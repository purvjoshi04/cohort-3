import { useState } from "react"
import ToggleBulbState from "./ToggleBulbState.jsx";
import BulbState from "./BulbState.jsx"

function LightBulb() {
    const [bulbOn, setBulbOn] = useState(true);
    return (
        <div>
            <BulbState bulbOn={bulbOn} />
            <ToggleBulbState setBulbOn={setBulbOn} />
        </div>

    )
}

export default LightBulb;