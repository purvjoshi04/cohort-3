function BulbState({ bulbOn }) {
    return (
        <div>
            {bulbOn ? "Bulb is on" : "Bulb is off"}
        </div>
    )
}

export default BulbState;