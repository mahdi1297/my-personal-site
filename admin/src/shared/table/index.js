import React from "react";
import { Table } from "reactstrap";
import { v4 as uuidv4 } from "uuid";
import Loader from "../loader";
import "./style.css";

const TableContainer = ({ heads, columns, length, isLoading }) => {
  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            {heads && heads.map((item) => <th key={item.id}>{item.name}</th>)}
          </tr>
        </thead>
        <tbody>
          {!isLoading && length === 0 ? (
            <tr style={{ width: "100%" }}>
              <td>آیتمی وجود ندارد</td>
            </tr>
          ) : (
            !isLoading &&
            columns &&
            columns.map((x, n) => (
              <tr key={x.id} style={{ width: "35px" }}>
                <td>{n + 1}</td>
                {x.body.map((m, s) => (
                  <td key={uuidv4()}>{m}</td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </Table>
      {isLoading && (
        <div className="">
          <Loader />
        </div>
      )}
    </>
  );
};

export default TableContainer;
