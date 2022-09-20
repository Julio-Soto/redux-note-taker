import './App.css';
import {useSelector,useDispatch} from 'react-redux'
import {noteCreated,noteErased} from './actions'

function App() {

  const notesList = useSelector(state => state)
  const dispatch = useDispatch()  

  return (
    <div className="App">
      <h1>Hello Note Taker</h1>
      <ul>
        {notesList.map(
          note => (
            <li key={note.id}>
              <div className='note-container'>
                <h3>{note.noteBody}</h3>
                <button onClick={() => dispatch(noteErased(note.id))}>ERASE</button>
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default App;
