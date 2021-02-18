import React from 'react'
import {useSelector} from 'react-redux'

export const CounterDisplay = () => {

    const counter = useSelector(state => state.counter)
    return (
        <div>
            <br/>

            <hr />

            <h4>This is counter display function</h4>
            <p> The value of counter from store is: {counter}</p>

        </div>
    )
}
