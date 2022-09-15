import React, { useState } from 'react';

import NoteList from '../note-list/noteList';
import './index.css';

function NotesApp() {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('');
  const [addNote, setAddNote] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const newNote = {
      id: Math.floor(Math.random() * 1000),
      title,
      status,
    };

    setAddNote([...addNote].concat(newNote));
    setTitle('');
    setStatus('');
  };

  return (
    <div className='layout-column align-items-center justify-content-start'>
      <section className='layout-row align-items-center justify-content-center mt-30'>
        <input
          data-testid='input-note-name'
          type='text'
          className='large mx-8'
          placeholder='Note Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          data-testid='input-note-status'
          type='text'
          className='large mx-8'
          placeholder='Note Status'
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
        <button
          className=''
          data-testid='submit-button'
          onClick={submitHandler}
        >
          Add Note
        </button>
      </section>

      <div className='mt-50'>
        <ul className='tabs'>
          <li className='tab-item slide-up-fade-in' data-testid='allButton'>
            All
          </li>
          <li className='tab-item slide-up-fade-in' data-testid='activeButton'>
            Active
          </li>
          <li
            className='tab-item slide-up-fade-in'
            data-testid='completedButton'
          >
            Completed
          </li>
        </ul>
      </div>
      <div className='card w-40 pt-30 pb-8'>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody data-testid='noteList'>
            {addNote.map((note) => (
              <NoteList key={note.id} title={note.title} status={note.status} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default NotesApp;
