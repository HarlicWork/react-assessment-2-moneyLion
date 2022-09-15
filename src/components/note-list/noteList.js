import React from 'react';

const NoteList = ({ title, status }) => {
  return (
    <tr>
      <td>{title}</td>
      <td>{status}</td>
    </tr>
  );
};

export default NoteList;
