import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import { useEffect } from 'react'
import { getList } from './Redux/Reducers/TaskReducer'
import { supprimer } from './Redux/Reducers/TaskReducer'
import { useState } from 'react'
import { ajouter } from './Redux/Reducers/TaskReducer'


function App() {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getList())
  },[])
  
  const Tasks = useSelector( state => state.ListTasks.Tasks)
  console.log(Tasks)

  const [text, setText] = useState({
    tache:"",
    statut:false
  })

  
  return (
    <div className="App">

        <div>
          <input type="text" placeholder='ajouter une tache' onChange={(e)=>setText({...text,tache:e.target.value})} />
          <button onClick={()=>dispatch(ajouter(text))}>Ajouter</button>
        </div>

      {
        Tasks.map(item =>(
          <div>
          <h1>{item.tache}</h1>
          <button onClick={()=>dispatch(supprimer(item.tache))}>supprimer</button>
          </div>
        ))
      }
    </div>
  );
}




export default App;
