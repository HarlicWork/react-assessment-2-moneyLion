import React, { useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import NoteList from '../note-list/noteList';
import NoteListActive from '../note-list/noteListActive';
import NoteListCompleted from '../note-list/noteListCompleted';

import './index.css';

function NotesApp() {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('');
  const [addNote, setAddNote] = useState([
    {
      id: Math.floor(Math.random() * 1000),
      title: 'List 1',
      status: 'Completed',
      category: 'Completed',
    },
    {
      id: Math.floor(Math.random() * 1000),
      title: 'List 2',
      status: 'Active',
      category: 'Active',
    },
    {
      id: Math.floor(Math.random() * 1000),
      title: 'List 3',
      status: 'All',
      category: 'All',
    },
  ]);

  const newNote = {
    id: Math.floor(Math.random() * 1000),
    title,
    status,
    category: 'All',
  };

  const submitHandler = (e) => {
    e.preventDefault();

    // prevent empty string added
    if (newNote.title === '' || newNote.status === '') return;

    if (newNote.status === 'Active') {
      const newNotePending = {
        id: Math.floor(Math.random() * 1000),
        title,
        status,
        category: 'Active',
      };

      setAddNote([...addNote].concat(newNotePending));
    } else if (newNote.status === 'Completed') {
      const newNoteCompleted = {
        id: Math.floor(Math.random() * 1000),
        title,
        status,
        category: 'Completed',
      };

      setAddNote([...addNote].concat(newNoteCompleted));
    } else {
      setAddNote([...addNote].concat(newNote));
    }

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
            <Link to='/'>All</Link>
          </li>
          <li className='tab-item slide-up-fade-in' data-testid='activeButton'>
            <Link to='/active'>Active</Link>
          </li>
          <li
            className='tab-item slide-up-fade-in'
            data-testid='completedButton'
          >
            <Link to='/completed'>Completed</Link>
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
            <Switch>
              <Route path='/' exact>
                {addNote.map((note) => (
                  <NoteList
                    key={note.id}
                    title={note.title}
                    status={note.status}
                  />
                ))}
              </Route>
              <Route path='/active'>
                {addNote.map((note) => (
                  <NoteListActive
                    key={note.id}
                    title={note.title}
                    status={note.status}
                  />
                ))}
              </Route>
              <Route path='/completed'>
                {addNote.map((note) => (
                  <NoteListCompleted
                    key={note.id}
                    title={note.title}
                    status={note.status}
                  />
                ))}
              </Route>
            </Switch>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default NotesApp;
