import { Route, Routes } from "react-router-dom"
import { EmailScreen } from "../components/EmailVerify";
import { VerifyAge } from '../components/VerifyAge';
import { useNavigate } from "react-router-dom";

export const AppRoutes = () => {
    const navigate = useNavigate();
    return (
        <Routes>
            <Route path='/' element={<VerifyAge placeholder={"Your Birth Year"} onClick={() => navigate('/verifyemail')} />} />
            <Route path='/verifyemail' element={<EmailScreen placeholder={"Email"} />} />
        </Routes>
    )
}