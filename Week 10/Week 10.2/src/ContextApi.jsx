import React, { useContext } from 'react'
import { BulbContext } from './App'

export function Light() {
    return (
        <div>
            <BulbState />
            <ToggleBulbState />
        </div>
    )
}

function BulbState() {
    const {bulbOn}=useContext(BulbContext);
    return <div>
        {bulbOn ? "Bulb On" : "Bulb Off"}
    </div>
}

function ToggleBulbState() {
    const {bulbOn,setBulbOn}=useContext(BulbContext);

    function toggle() {
    // setBulbOn(currentState => !currentState)
        setBulbOn(!bulbOn);
    }

    return <div>
        <button onClick={toggle}>Toggle the bulb</button>
    </div>
}
