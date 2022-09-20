import './App.css';
import {useSelector,useDispatch} from 'react-redux'
import {noteCreated,noteErased} from './actions'

function App() {

  const notesList = useSelector(state => state)
  const dispatch = useDispatch()  

  return (
    <div className="App">
      <div className='input-container'>
        <h1>Hello Note Taker</h1>
      </div>
      <ul>
        {notesList.map(
          note => (
            <li key={note.id}>
              <div className='note-container'>
                <div className='note-container-header'>
                  <button onClick={() => dispatch(noteErased(note.id))}>ERASE</button>
                </div>
                <div className='note-container-body'>
                  <p>{note.noteBody}</p>
                </div>
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default App;
