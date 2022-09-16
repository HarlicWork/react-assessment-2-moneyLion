import React from 'react';
const NoteListActive = ({ title, status }) => {
  if (status === 'Active') {
    return (
      <tr>
        <td>{title}</td>
        <td>Active</td>
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
