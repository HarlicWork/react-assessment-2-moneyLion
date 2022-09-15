import React from 'react';
import NoteItem from '../note-item/note-item';

const NoteList = ({ title, status }) => {
  return (
    <tr>
      <NoteItem title={title} status={status} />
    </tr>
  );
};

export default NoteList;
