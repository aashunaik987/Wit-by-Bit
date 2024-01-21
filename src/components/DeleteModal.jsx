import React from "react";
import "../styles/DeleteModal.css";
import { Button } from "@mui/material";

function DeleteModal() {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
  
        </div>
        <div className="title">
          <h1>Remove Student</h1>
        </div>
        <div className="body">
          <p>Are you sure you want to remove the current student from the list?</p>
        </div>

        <div>
          <span>STUDENT NAME</span> <br />
          <br/>
          <span>CLASS</span>
          <br/>
        </div>
       
        <div className="footer">
          <Button variant="outlined"  onClick={() => {
              setOpenModal(false);
            }} style={{marginRight:'15px'}} > Cancel</Button>
           <Button variant="contained" style={{background: '#F24643'}}>Remove</Button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
