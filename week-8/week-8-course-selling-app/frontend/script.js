// Global variables
let currentUser = null;
let currentUserType = null;
let isLoginMode = true;
let currentLoginType = 'user';

// API Base URL - Update this to match your backend
const API_BASE = 'http://localhost:4221'; // Change this to your backend URL

// Common API endpoints based on 100xdevs course selling app structure
const API_ENDPOINTS = {
    user: {
        signup: '/user/signup',
        signin: '/user/signin',
        purchases: '/user/purchases'
    },
    admin: {
        signup: '/admin/signup',
        signin: '/admin/signin',
        courses: '/admin/courses'
    },
    course: {
        preview: '/course/preview',
        purchase: '/user/courses/:courseId'
    }
};

// Initialize the app
document.addEventListener('DOMContentLoaded', function () {
    loadPreviewCourses();

    // Set up form event listeners
    document.getElementById('authForm').addEventListener('submit', handleAuth);
    document.getElementById('createCourseForm').addEventListener('submit', handleCreateCourse);
});

// Show specific page
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

// Show login modal
function showLoginModal(type) {
    currentLoginType = type;
    isLoginMode = true;

    const modal = document.getElementById('loginModal');
    const title = document.getElementById('modalTitle');
    const submitBtn = document.getElementById('submitBtn');
    const switchText = document.getElementById('switchText');

    title.textContent = `${type.charAt(0).toUpperCase() + type.slice(1)} Login`;
    submitBtn.textContent = 'Login';
    switchText.textContent = "Don't have an account?";

    modal.classList.add('active');
    clearForm();
}

// Switch between login and signup
function switchAuthMode() {
    isLoginMode = !isLoginMode;
    const title = document.getElementById('modalTitle');
    const submitBtn = document.getElementById('submitBtn');
    const switchText = document.getElementById('switchText');

    if (isLoginMode) {
        title.textContent = `${currentLoginType.charAt(0).toUpperCase() + currentLoginType.slice(1)} Login`;
        submitBtn.textContent = 'Login';
        switchText.textContent = "Don't have an account?";
    } else {
        title.textContent = `${currentLoginType.charAt(0).toUpperCase() + currentLoginType.slice(1)} Sign Up`;
        submitBtn.textContent = 'Sign Up';
        switchText.textContent = "Already have an account?";
    }
    clearForm();
}

// Handle authentication
async function handleAuth(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('authMessage');

    const endpoint = isLoginMode ? API_ENDPOINTS[currentLoginType].signin : API_ENDPOINTS[currentLoginType].signup;
    const url = `${API_BASE}${endpoint}`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (response.ok) {
            // Store token from response - could be data.token or data.jwt
            const token = data.token || data.jwt || data.accessToken;
            currentUser = { email, token, id: data.userId || data.id };
            currentUserType = currentLoginType;

            // Update UI
            updateNavForLoggedInUser();
            closeModal();

            if (currentLoginType === 'user') {
                showUserDashboard();
            } else {
                showAdminDashboard();
            }

            showMessage(messageDiv, 'Success!', 'success');
        } else {
            showMessage(messageDiv, data.message || data.error || 'Authentication failed', 'error');
        }
    } catch (error) {
        console.error('Auth error:', error);
        showMessage(messageDiv, 'Network error. Please try again.', 'error');
    }
}

// Show user dashboard
function showUserDashboard() {
    document.getElementById('userName').textContent = currentUser.email;
    showPage('userDashboard');
    loadUserPurchases();
    loadBrowseCourses();
}

// Show admin dashboard
function showAdminDashboard() {
    showPage('adminDashboard');
    loadAdminCourses();
}

// Load courses for preview
async function loadPreviewCourses() {
    try {
        const response = await fetch(`${API_BASE}${API_ENDPOINTS.course.preview}`);
        if (response.ok) {
            const data = await response.json();
            // Handle different response structures
            const courses = data.courses || data || [];
            displayCourses(courses, 'previewCourseGrid', false);
        } else {
            console.error('Error loading preview courses:', response.status);
        }
    } catch (error) {
        console.error('Error loading preview courses:', error);
    }
}

// Load user purchases
async function loadUserPurchases() {
    if (!currentUser) return;

    try {
        const response = await fetch(`${API_BASE}${API_ENDPOINTS.user.purchases}`, {
            headers: {
                'Authorization': `Bearer ${currentUser.token}`
            }
        });

        if (response.ok) {
            const data = await response.json();
            const purchases = data.purchasedCourses || data.courses || data || [];
            displayCourses(purchases, 'purchaseGrid', true);
        } else {
            console.error('Error loading purchases:', response.status);
        }
    } catch (error) {
        console.error('Error loading purchases:', error);
    }
}

// Load courses for browsing (user)
async function loadBrowseCourses() {
    try {
        const response = await fetch(`${API_BASE}${API_ENDPOINTS.course.preview}`);
        if (response.ok) {
            const data = await response.json();
            const courses = data.courses || data || [];
            displayCourses(courses, 'browseGrid', false, true);
        } else {
            console.error('Error loading browse courses:', response.status);
        }
    } catch (error) {
        console.error('Error loading browse courses:', error);
    }
}

// Load admin courses
async function loadAdminCourses() {
    if (!currentUser) return;

    try {
        const response = await fetch(`${API_BASE}${API_ENDPOINTS.admin.courses}`, {
            headers: {
                'Authorization': `Bearer ${currentUser.token}`
            }
        });

        if (response.ok) {
            const data = await response.json();
            const courses = data.courses || data || [];
            displayCourses(courses, 'adminCourseGrid', true);
        } else {
            console.error('Error loading admin courses:', response.status);
        }
    } catch (error) {
        console.error('Error loading admin courses:', error);
    }
}

// Display courses in grid
function displayCourses(courses, gridId, showPurchased = false, showPurchaseButton = false) {
    const grid = document.getElementById(gridId);
    grid.innerHTML = '';

    if (!courses || courses.length === 0) {
        grid.innerHTML = '<p style="text-align: center; color: #666;">No courses available.</p>';
        return;
    }

    courses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';

        // Handle different course object structures
        const courseId = course._id || course.id;
        const courseTitle = course.title || course.name || 'Untitled Course';
        const courseDescription = course.description || 'No description available';
        const coursePrice = course.price || '0';
        const courseImage = course.imageUrl || course.image || '';

        let buttonsHtml = '';
        if (showPurchased) {
            buttonsHtml = `<button onclick="showCourseDetail('${courseId}')">View Details</button>`;
        } else if (showPurchaseButton) {
            buttonsHtml = `
                        <button onclick="showCourseDetail('${courseId}')" class="secondary">Preview</button>
                        <button onclick="purchaseCourse('${courseId}')" style="margin-left: 10px;">Purchase</button>
                    `;
        } else {
            buttonsHtml = `<button onclick="showCourseDetail('${courseId}')" class="secondary">Preview</button>`;
        }

        let imageHtml = '';
        if (courseImage) {
            imageHtml = `<img src="${courseImage}" alt="${courseTitle}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 10px; margin-bottom: 15px;">`;
        }

        courseCard.innerHTML = `
                    ${imageHtml}
                    <h3 class="course-title">${courseTitle}</h3>
                    <p class="course-description">${courseDescription}</p>
                    <div class="course-price">${coursePrice}</div>
                    <div>${buttonsHtml}</div>
                `;

        grid.appendChild(courseCard);
    });
}

// Show course details
async function showCourseDetail(courseId) {
    try {
        // Try to fetch detailed course info
        const response = await fetch(`${API_BASE}/courses/${courseId}`);
        let courseData = null;

        if (response.ok) {
            courseData = await response.json();
        } else {
            // If specific course endpoint doesn't exist, show basic info
            courseData = { _id: courseId, title: 'Course Details', description: 'Loading...' };
        }

        const modal = document.getElementById('courseDetailModal');
        const content = document.getElementById('courseDetailContent');

        const course = courseData.course || courseData;
        const courseTitle = course.title || 'Course Details';
        const courseDescription = course.description || 'No description available';
        const coursePrice = course.price || 'N/A';
        const courseImage = course.imageUrl || course.image || '';

        let imageHtml = '';
        if (courseImage) {
            imageHtml = `<img src="${courseImage}" alt="${courseTitle}" style="width: 100%; max-height: 300px; object-fit: cover; border-radius: 10px; margin-bottom: 20px;">`;
        }

        content.innerHTML = `
                    ${imageHtml}
                    <h2>${courseTitle}</h2>
                    <p style="color: #666; margin: 15px 0; line-height: 1.6;">${courseDescription}</p>
                    <div style="font-size: 1.5rem; font-weight: bold; color: #4834d4; margin: 20px 0;">Price: ${coursePrice}</div>
                    <div style="margin-top: 30px;">
                        <button onclick="closeCourseDetailModal()" class="secondary">Close</button>
                        ${currentUser && currentUserType === 'user' ? `<button onclick="purchaseCourse('${courseId}'); closeCourseDetailModal();" style="margin-left: 10px;">Purchase Now</button>` : ''}
                    </div>
                `;

        modal.classList.add('active');
    } catch (error) {
        console.error('Error loading course details:', error);
        alert('Error loading course details');
    }
}

// Purchase course
async function purchaseCourse(courseId) {
    if (!currentUser || currentUserType !== 'user') {
        alert('Please login as a user to purchase courses.');
        return;
    }

    try {
        // Common purchase endpoint patterns
        let purchaseUrl = `${API_BASE}/user/courses/${courseId}`;

        const response = await fetch(purchaseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${currentUser.token}`
            }
        });

        const data = await response.json();

        if (response.ok) {
            alert('Course purchased successfully!');
            loadUserPurchases();
            loadBrowseCourses();
        } else {
            alert(data.message || data.error || 'Purchase failed');
        }
    } catch (error) {
        console.error('Purchase error:', error);
        alert('Network error. Please try again.');
    }
}

// Show create course modal
function showCreateCourseModal() {
    document.getElementById('createCourseModal').classList.add('active');
    document.getElementById('createCourseForm').reset();
    document.getElementById('createCourseMessage').textContent = '';
}

// Handle create course
async function handleCreateCourse(e) {
    e.preventDefault();

    if (!currentUser || currentUserType !== 'admin') {
        alert('Please login as admin to create courses.');
        return;
    }

    const title = document.getElementById('courseTitle').value;
    const description = document.getElementById('courseDescription').value;
    const price = parseFloat(document.getElementById('coursePrice').value);
    const imageUrl = document.getElementById('courseImageUrl').value;
    const messageDiv = document.getElementById('createCourseMessage');

    try {
        const response = await fetch(`${API_BASE}${API_ENDPOINTS.admin.courses}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${currentUser.token}`
            },
            body: JSON.stringify({
                title,
                description,
                price,
                imageUrl: imageUrl || undefined
            })
        });

        const data = await response.json();

        if (response.ok) {
            showMessage(messageDiv, 'Course created successfully!', 'success');
            loadAdminCourses();
            loadPreviewCourses(); // Refresh preview courses as well
            setTimeout(() => closeCreateCourseModal(), 1500);
        } else {
            showMessage(messageDiv, data.message || data.error || 'Failed to create course', 'error');
        }
    } catch (error) {
        console.error('Create course error:', error);
        showMessage(messageDiv, 'Network error. Please try again.', 'error');
    }
}

// Switch user tabs
function switchUserTab(tab) {
    const purchases = document.getElementById('userPurchases');
    const browse = document.getElementById('userBrowse');
    const purchasesTab = document.getElementById('purchasesTab');
    const browseTab = document.getElementById('browseTab');

    if (tab === 'purchases') {
        purchases.classList.remove('hidden');
        browse.classList.add('hidden');
        purchasesTab.classList.add('active');
        browseTab.classList.remove('active');
    } else {
        purchases.classList.add('hidden');
        browse.classList.remove('hidden');
        purchasesTab.classList.remove('active');
        browseTab.classList.add('active');
    }
}

// Switch preview tabs
function switchTab(tab) {
    // For now, we only have preview tab
    // You can extend this for other tabs
}

// Logout
function logout() {
    currentUser = null;
    currentUserType = null;

    // Reset UI
    document.getElementById('userLoginBtn').classList.remove('hidden');
    document.getElementById('adminLoginBtn').classList.remove('hidden');
    document.getElementById('logoutBtn').classList.add('hidden');

    showPage('home');
}

// Update navigation for logged in user
function updateNavForLoggedInUser() {
    document.getElementById('userLoginBtn').classList.add('hidden');
    document.getElementById('adminLoginBtn').classList.add('hidden');
    document.getElementById('logoutBtn').classList.remove('hidden');
}

// Modal functions
function closeModal() {
    document.getElementById('loginModal').classList.remove('active');
    clearForm();
}

function closeCreateCourseModal() {
    document.getElementById('createCourseModal').classList.remove('active');
}

function closeCourseDetailModal() {
    document.getElementById('courseDetailModal').classList.remove('active');
}

// Utility functions
function clearForm() {
    document.getElementById('authForm').reset();
    document.getElementById('authMessage').textContent = '';
}

function showMessage(element, message, type) {
    element.textContent = message;
    element.className = type;
}