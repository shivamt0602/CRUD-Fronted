import React from "react";
import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button';


export default function StudentTable() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Student Name</th>
          <th>Student Address</th>
          <th>Option</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>USA</td>
          <td>
          <Button variant="primary">Edit</Button>{' '}
          <Button variant="primary">Delete</Button>{' '}
          </td>
        </tr>
      </tbody>
    </Table>
  );
}
