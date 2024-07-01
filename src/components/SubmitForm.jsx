import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button';
import axios from "axios";

export default function SubmitForm() {
  const [studentName, setStudentName] = useState("");
  const [studentAddress, setStudentAddress] = useState("");
  const [studentObj, setStudentObj] = useState([]);
  const [editingStudentId, setEditingStudentId] = useState(null);

  useEffect(() => {
    Load();
  }, []);

  async function Load() {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/v1/student/getAllStudents"
      );
      setStudentObj(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "name") {
      setStudentName(value);
    } else if (name === "address") {
      setStudentAddress(value);
    }
  };

  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/v1/student/saveStudent", {
        name: studentName,
        address: studentAddress,
      });
      alert("Student Registration Successfully");
      setStudentAddress("");
      setStudentName("");
      Load();
    } catch (err) {
      alert("User Registration Failed");
    }
  }

  async function handleDelete(id) {
    try {
      await axios.delete(`http://localhost:8080/api/v1/student/deleteStudent/${id}`);
      alert("Student Deleted Successfully");
      Load();
    } catch (err) {
      console.error("Error deleting student:", err);
      alert("Failed to delete student");
    }
  }

  async function handleEdit(name, address, id) {
    setStudentName(name);
    setStudentAddress(address);
    setEditingStudentId(id);
  }

  async function updateStudent(event) {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:8080/api/v1/student/updateStudent/${editingStudentId}`, {
        name: studentName,
        address: studentAddress,
      });
      alert("Student Updated Successfully");
      setStudentName("");
      setStudentAddress("");
      setEditingStudentId(null);
      Load();
    } catch (err) {
      console.error("Error updating student:", err);
      alert("Failed to update student");
    }
  }

  return (
    <>
      <Form onSubmit={save}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Student Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={studentName}
            onChange={handleChange}
            name="name"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your address"
            value={studentAddress}
            onChange={handleChange}
            name="address"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        {editingStudentId ? (
          <Button variant="primary" type="button" onClick={updateStudent}>
            Update
          </Button>
        ) : (
          <Button variant="primary" type="submit">
            Register
          </Button>
        )}
      </Form>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Student Name</th>
            <th>Student Address</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {studentObj.map((student, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{student.name}</td>
              <td>{student.address}</td>
              <td>
                <Button variant="primary" onClick={() => handleEdit(student.name, student.address, student._id)}>
                  Edit
                </Button>{' '}
                <Button variant="danger" onClick={() => handleDelete(student._id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
