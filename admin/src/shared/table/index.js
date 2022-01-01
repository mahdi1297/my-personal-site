import React from "react";
import { Table } from "reactstrap";
import { v4 as uuidv4 } from "uuid";
import "./style.css";

const TableContainer = ({ heads, columns }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          {heads && heads.map((item) => <th key={item.id}>{item.name}</th>)}
        </tr>
      </thead>
      <tbody>
        {columns &&
          columns.map((x, n) => (
            <tr key={x.id} style={{ width: "35px" }}>
              <td>{n}</td>
              {x.body.map((m, s) => (
                <td key={uuidv4()}>{m}</td>
              ))}
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export default TableContainer;
