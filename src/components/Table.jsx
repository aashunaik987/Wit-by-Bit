import React, { useState } from 'react';
import '../styles/Table.css';
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs';
import DeleteModal from './DeleteModal';


const Table = ({ studentData, deleteRow,editRow }) => {
  const [hoveredRow, setHoveredRow] = useState(null);
  const totalEntries = studentData.length;
  return (
    <div className='table-wrapper'>
      <table className='table'>
        <thead>
          <tr>
            <th>No.</th>
            <th>Student Name</th>
            <th>Class</th>
            <th>Result</th>
            <th>Score</th>
            <th>Grade</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {studentData.map((student, index) => (
            <tr
              key={index}
              onMouseEnter={() => setHoveredRow(index)}
              onMouseLeave={() => setHoveredRow(null)}
            >
              <td>{index + 1}</td>
              <td>{student.StudentName}</td>
              <td>{student.Class}</td>
              <td style={{ color: student.Result === 'Passed' ? 'green' : 'red' }}>{student.Result}</td>
              <td>{student.Score}</td>
              <td style={{ color: getGradeColor(student.Grade) }}>{student.Grade}</td>
              <td>
                {hoveredRow === index && (
                  <div className='actions'>
                    <span><BsFillTrashFill
                      className='icon'
                      onClick={() => deleteRow(index)}
                              /> </span>
                              <span> <BsFillPencilFill
                                  className='icon' onClick={() => { editRow(index) }} /></span>
                             
                   
                  </div>
                )}
              </td>
            </tr>
          ))}
              </tbody>
              
          </table>
          <div className='foot'>
              <h1>
                  Showing {totalEntries} of {totalEntries} entries.
              </h1>
          </div>
     
    </div>
  );
};
const getGradeColor = (grade) => {
    switch (grade) {
      case 'Excellent':
        return 'green';
      case 'Average':
        return 'blue';
      case 'Poor':
        return 'red';
      default:
        return 'black'; // Default color if the grade doesn't match any case
    }
  };

export default Table;