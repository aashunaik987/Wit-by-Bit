import React, { useState } from 'react';
import { Button } from '@mui/material';
import '../styles/AddModal.css';
import { ValidatorForm,TextValidator } from 'react-material-ui-form-validator';

const AddModal = ({ setOpenModal, addStudent,defaultvalue }) => {
  const [formState, setFormState] = useState( defaultvalue ||{ 
    StudentName: "",
    Class: "",
    Result: "",
    Score: "",
    Grade: ""
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault(); 
    addStudent(formState);
    setOpenModal(false);
  }


  return (
    <div className='modal-container'>
      <div className='modal'>
        <ValidatorForm onSubmit={handleSubmit}>
          <div className='title'>
            <h1>Add Student</h1>
          </div>
          <div className='form-group'>
            <label htmlFor='StudentName'>STUDENT NAME*</label>
            <TextValidator className='input' name="StudentName" value={formState.StudentName} onChange={handleChange} validators={['required']} errorMessages={['Name is Required']}/>
          </div>
          <div className='form-group'>
            <label htmlFor='Class'>CLASS*</label>
            <TextValidator className='input' name="Class" value={formState.Class} onChange={handleChange} validators={['required']} errorMessages={['Class must be specified']}/>
          </div>
          <div className='form-group'>
            <label htmlFor='Score'>SCORE*</label>
            <TextValidator className='input' name="Score" value={formState.Score} onChange={handleChange} validators={['required']} errorMessages={['Score is required']}/>
          </div>
          <div className='form-group'>
            <label htmlFor='Result'>RESULT*</label>
            <TextValidator className='input' name="Result" value={formState.Result} onChange={handleChange} validators={['required']} errorMessages={[' Required']}/>
          </div>
          <div className='form-group'>
            <label htmlFor='Grade'>GRADE*</label>
            <TextValidator className='input' name="Grade" value={formState.Grade} onChange={handleChange} validators={['required']} errorMessages={['Grade is Required']}/>
          </div>
          <div className="footer">
            <Button variant="outlined" onClick={() => setOpenModal(false)} style={{ marginRight: '15px' }}>Cancel</Button>
            <Button  type="submit" variant="contained" style={{ background: '#2CA4D8' }}  >Confirm</Button>
          </div>
        </ValidatorForm>
      </div>
    </div>
  );
}

export default AddModal;
