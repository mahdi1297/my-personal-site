/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import TableContainer from "../../shared/table";
import PageTitle from "../../shared/page-title";
import { confirmComment, getCommentList, removeComment } from "./data";
import { tableColumns } from "./table-columns";
import { heads } from "./table-heads";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const Comments = () => {
  const [columns, setColumns] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    request();
  }, []);

  const request = async () => {
    const { data } = await getCommentList();
    if (data.result) {
      let cols = tableColumns(data.result, removerFunction, responseFunction);
      setColumns(cols);
    }
  };

  async function responseFunction() {
    toggle();
  }

  async function removerFunction(isConfirmed, _id) {
    if (isConfirmed === "false") {
      await confirmComment(_id);
      request();
    } else if (isConfirmed === "true") {
      await removeComment(_id);
      request();
    }
  }

  const toggle = () => setModal(!modal);

  const externalCloseBtn = (
    <button
      className="close"
      style={{ position: "absolute", top: "15px", right: "15px" }}
      onClick={toggle}
    >
      &times;
    </button>
  );

  return (
    <>
      <div>
        <PageTitle title=" نظرات کاربران" />
        <div className="w-100 mt-5">
          <TableContainer heads={heads} columns={columns} />
        </div>
      </div>
      {/* response modal */}
      <Modal isOpen={modal} toggle={toggle} external={externalCloseBtn}>
        <ModalHeader>Modal title</ModalHeader>
        <ModalBody>
          <b>Look at the top right of the page/viewport!</b>
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default Comments;
