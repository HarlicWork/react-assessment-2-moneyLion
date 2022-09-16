import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import 'h8k-components';
import NotesApp from './components/notes-app/index.js';

const title = 'Notes App';

function App() {
  return (
    <div>
      <h8k-navbar header={title} />
      <BrowserRouter>
        <NotesApp />
      </BrowserRouter>
    </div>
  );
}

export default App;
