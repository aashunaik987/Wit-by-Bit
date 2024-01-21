import React, { useState } from "react";
import "../styles/Sidebar.css";
import { Button, Modal} from "@mui/material";
import DeleteModal from "./DeleteModal";
import profile from "../assets/Ellipse 1.png";
import AddModal from "./AddModal";
import Table from "./Table";

const Sidebar = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const [student, setStudent] = useState([
    {
      StudentName: 'Robert Fox',
      Class: '8th',
      Result: 'Passed',
      Score: '78/100',
      Grade: 'Excellent'
    },
    {
      StudentName: 'Ralph Edwards',
      Class: '7th',
      Result: 'Failed',
      Score: '20/100',
      Grade: 'Poor'
    },
    {
      StudentName: 'Esther Howard',
      Class: '9th',
      Result: 'Passed',
      Score: '60/100',
      Grade: 'Average'
    },
    {
      StudentName: 'Arlene McCoy',
      Class: '7th',
      Result: 'Passed',
      Score: '60/100',
      Grade: 'Average'
    },
    {
      StudentName: 'Eleanor Pena',
      Class: '8th',
      Result: 'Passed',
      Score: '60/100',
      Grade: 'Average'
    },
  ]);
  const [rowToEdit, setrowToEdit] = useState(null)

  const handleDeleteRow = (targetIndex) => {
    setStudent(student.filter((_,index) => index !== targetIndex))
  }
  const handleEditRow = (index) => {
    setrowToEdit(index);
    setModalOpen(true);
  }

  const addStudent = (newStudent) => {
    setStudent([...student, newStudent]); 
    setModalOpen(false);
  };
  
 

  const Menus = [
    { title: "Dashboard", src: "dashboard 1" },
    { title: "Courses", src: "book 1" },
    { title: "Students", src: "stand-users 1" },
    { title: "Exams ", src: "exam 1" },
    { title: "Results", src: "result 1" },
    { title: "Notice board", src: "black-board 1" },
    { title: "Live  classes ", src: "live-streaming 1" },
    { title: "Notifications", src: "notification 1" },
  ];

  return (
    <>
      <div className="sidebar">
        <div className="flex gap-x-4 items-center">
          <div className="logo-btn">
            <img src="./src/assets/logo.png" />
          </div>

          <h1 className="brand">School Space</h1>
        </div>

        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer  text-slate-900 text-sm items-center gap-x-4 
              ${index === 0 && "bg-light-white"} `}
            >
              <img src={`./src/assets/${Menu.src}.png`} />
              <span>{Menu.title}</span>
            </li>
          ))}
        </ul>
        <div className="profile">
          <div>
            <img src={profile} />
          </div>

          <h1 style={{ fontWeight: "bold" }}> Andy Samberg</h1>
          <span style={{ color: "gray" }}> andy.samberg@gmail.com</span>

          <div>
            <Button
              variant="outlined"
              style={{ marginTop: 12, marginLeft: 40, borderRadius: 10 }}
            >
              {" "}
              View Profile{" "}
            </Button>
          </div>
        </div>
      </div>
      <div className="student-add">
        <span style={{ fontSize: 50, marginRight: "45%" }}>Students</span>

        <Button
          variant="contained"
          onClick={() => {
            setModalOpen(true);
          }}
          style={{ borderRadius: 10 }}
        >
          {" "}
          <span style={{ marginRight: 10 }}>&#10011;</span> ADD
        </Button>

        {modalOpen && <AddModal setOpenModal={setModalOpen} addStudent={addStudent} defaultvalue={rowToEdit !== null && student[rowToEdit]} />}
        
      </div>
      <Table studentData={student} deleteRow={handleDeleteRow} editRow={handleEditRow } />
    </>
  );
};

export default Sidebar;