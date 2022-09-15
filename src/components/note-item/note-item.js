import React from 'react';

const NoteItem = ({ title, status }) => {
  return (
    <>
      <td>{title}</td>
      <td>{status}</td>
    </>
  );
};

export default NoteItem;
