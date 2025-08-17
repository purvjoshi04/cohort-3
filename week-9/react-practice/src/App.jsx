import Post from "./post.jsx";
import ProfileCard from "./profileCard.jsx";

function App() {
  return (
    <div>
      <div style={{ background: "#dfe6e9", height: "100vh" }}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "20px", paddingTop: "20px" }}>
          <div style={{ width: 660, fontWeight: "bold", fontFamily: "monospace", }}>
            <ProfileCard />
          </div>
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </div>
  )
}

export default App