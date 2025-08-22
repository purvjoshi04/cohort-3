function ToggleBulbState({ setBulbOn }) {
    return (
        <button onClick={setBulbOn(currentState => !currentState)}>Toggle bulb</button>
    )
}

export default ToggleBulbState;