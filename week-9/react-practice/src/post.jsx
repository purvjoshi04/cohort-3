function Post() {
    return (
        <>
            <div style={{ width: 200, backgroundColor: "white", borderRadius: 10, borderColor: "gray", borderWidth: 10, padding: 20 }} >
                <div style={{ display: "flex" }}>
                    <img src="https://imgs.search.brave.com/rwE-hC6ESt3hBJZhImPkb-KvU26bLDKVe-OKv1y50-M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzE0LzQz/LzU1LzE0NDM1NWQ3/YjM2YzVmNjQ2NDM1/NDIzNzk4MjgxY2U5/LmpwZw" style={{ borderRadius: 3, width: 40, height: 40 }} />
                    <div style={{ fontWeight: "bold", fontFamily: "monospace", marginLeft: 10 }}>
                        Purv Joshi
                        <div style={{ fontWeight: "normal", fontSize: 12 }}>
                            <div >100 followers</div>
                            <div>12m</div>
                        </div>
                    </div>
                </div>
                <div style={{ fontSize: 16, marginTop: 5 }}>
                    Do coding everyday to build mussel memory
                </div>
            </div>
        </>
    )
}

export default Post;
