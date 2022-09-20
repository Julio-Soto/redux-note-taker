import './App.css';
import {useSelector,useDispatch} from 'react-redux'
import {noteCreated,noteErased} from './actions'
import {useRef} from 'react'

function App() {

  const notesList = useSelector(state => state)
  const dispatch = useDispatch()
  const textBody = useRef() 
  
  const submitTextBody = () => {
    const inputValue = textBody.current.value
    dispatch(noteCreated(inputValue))
  }

  return (
    <div className="App">
      <div className='input-container'>
        <input type="text" ref={textBody}/>
        <button onClick={submitTextBody}>ADD</button>
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
