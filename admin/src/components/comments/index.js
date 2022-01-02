/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, lazy, Suspense } from "react";
import TableContainer from "../../shared/table";
import PageTitle from "../../shared/page-title";
import { confirmComment, getCommentList, removeComment } from "./data";
import { Button, Modal, ModalHeader, ModalFooter } from "reactstrap";
import { tableColumns } from "./table-columns";
import { heads } from "./table-heads";
import Loader from "../../shared/loader";

const CommentDetail = lazy(() => {
  return new Promise((resolve) => {
    resolve(import("./comment-detail"));
  });
});

const Comments = () => {
  const [columns, setColumns] = useState([]);
  const [modal, setModal] = useState(false);
  const [choosedComment, setChoosedComment] = useState({});

  useEffect(() => {
    if (modal === false) {
      request();
    }
  }, [modal]);

  const request = async () => {
    const { data } = await getCommentList();
    if (data.result) {
      let cols = tableColumns(data.result, removerFunction, responseFunction);
      setColumns(cols);
    }
  };

  async function responseFunction(_id, content, parentId) {
    setChoosedComment({ _id, content, parentId });
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

  const toggle = () => {
    setModal(!modal);
  };

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
      <Modal
        isOpen={modal}
        toggle={toggle}
        external={externalCloseBtn}
        size="lg"
      >
        <ModalHeader>پاسخ به دیدگاه</ModalHeader>
        <Suspense fallback={<Loader />}>
          <CommentDetail data={choosedComment} />
        </Suspense>
        <ModalFooter>
          <div className="w-100">
            <Button color="secondary" onClick={toggle}>
              انصراف
            </Button>
          </div>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default Comments;
