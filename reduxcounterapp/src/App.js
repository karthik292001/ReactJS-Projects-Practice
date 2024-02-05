import './App.css'
import { increase } from './actions'
import { decrease } from './actions'
import { red } from './actions'
import { yellow } from './actions'
import { green } from './actions'
import {useSelector, useDispatch} from 'react-redux'

export default function App() {
  const val=useSelector((state)=>state.updateValue)
  const color=useSelector((state)=>state.updateColor)
  const dispatch= useDispatch()
  console.log(color)
  return (
    <div className="app" style={{backgroundColor:color}}>
      <h1>Counter App</h1>
      <button onClick={()=>dispatch(decrease())}>-</button>
      <input type="text" value={val} readOnly/>
      <button onClick={()=>dispatch(increase())}>+</button>

      <h1>Background Color</h1>
      <button onClick={()=>dispatch(red())}>Red</button>
      <button onClick={()=>dispatch(green())}>Green</button>
      <button onClick={()=>dispatch(yellow())}>Yellow</button>
    </div>
  );
}


