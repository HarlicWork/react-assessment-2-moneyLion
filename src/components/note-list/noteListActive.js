import React from 'react';
const NoteListActive = ({ title, status }) => {
  if (status === 'Pending') {
    return (
      <tr>
        <td>{title}</td>
        <td>Pending</td>
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

export default NoteListActive;
