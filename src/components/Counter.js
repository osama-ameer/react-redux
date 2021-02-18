import React, {useState} from 'react';
import { decrement, increment, incrementByAmount } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';


export const Counter = () => {

    const dispatch = useDispatch();
    const [value, setvalue] = useState(0);
    const state = useSelector(state => state.counter)

    
    return (
        <div>
            <h3> Counter: {state} </h3>
        
            <button onClick={ () => {dispatch(increment())}} >+Increment Counter</button><br/>
            <button onClick={ () => {dispatch(decrement())}}  >-Decrement Counter</button><br/>
            
            <input type="text" placeholder="Increment by Amount" onChange={ (e) => {setvalue(e.target.value)}} /><br/>

            <button onClick = { () => {dispatch(incrementByAmount(Number(value)))} } >Increment By value</button>

            
        </div>
    )
}
