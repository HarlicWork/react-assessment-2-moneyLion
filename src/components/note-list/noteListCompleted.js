import React from 'react';
const NoteListCompleted = ({ title, status }) => {
  if (status === 'Completed') {
    return (
      <tr>
        <td>{title}</td>
        <td>Completed</td>
      </tr>
    );
  } else {
    return (
      <tr>
        {/* <td></td>
            <td></td> */}
      </tr>
    );
  }
};

export default NoteListCompleted;
