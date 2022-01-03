/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, lazy, Suspense } from "react";
import TableContainer from "../../shared/table";
import Pagination from "../../shared/pagination";
import PageTitle from "../../shared/page-title";
import Loader from "../../shared/loader";
import { confirmComment, getCommentList, removeComment } from "./data";
import { Button, Modal, ModalHeader, ModalFooter } from "reactstrap";
import { tableColumns } from "./table-columns";
import { heads } from "./table-heads";
import { withRouter } from "react-router-dom";

const CommentDetail = lazy(() => {
  return new Promise((resolve) => {
    resolve(import("./comment-detail"));
  });
});

const Comments = ({ history, location }) => {
  const [columns, setColumns] = useState([]);
  const [columnsLength, setColumnsLength] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [choosedComment, setChoosedComment] = useState({});

  let pageParam = new URLSearchParams(location.search).get("page");

  useEffect(() => {
    if (modal === false) {
      request();
    }
  }, [modal, currentPage, choosedComment, pageParam]);

  const request = async () => {
    setIsLoading(true);

    const { data } = await getCommentList(pageParam);
    if (data.result) {
      setColumnsLength(data.count);
      let cols = tableColumns(data.result, removerFunction, responseFunction);
      setColumns(cols);
      setTimeout(() => {
        setIsLoading(false);
      }, 400);
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

  const nextBtnFunc = () => {
    setCurrentPage(currentPage + 1);
    history.push(`/comments?page=${currentPage + 1}`);

    if (columnsLength !== 0) {
      request();
    }

    setChoosedComment({});
  };
  const prevBtnFunc = () => {
    if (currentPage === 1 || currentPage < 2) {
      setCurrentPage(1);
      history.push(`/comments?page=${currentPage}`);
      setChoosedComment({});
    } else {
      setCurrentPage(currentPage - 1);
      history.push(`/comments?page=${currentPage}`);
      setChoosedComment({});
      request();
    }
  };

  const toggle = () => setModal(!modal);

  return (
    <>
      <div>
        <PageTitle title=" نظرات کاربران" />
        <div className="w-100 mt-5">
          <TableContainer
            heads={heads}
            columns={columns}
            length={columnsLength}
            isLoading={isLoading}
          />
        </div>
        <Pagination
          nextBtnFunc={nextBtnFunc}
          prevBtnFunc={prevBtnFunc}
          currentPage={currentPage}
          pageCount={columnsLength}
        />
      </div>
      {/* response modal */}
      <Modal isOpen={modal} toggle={toggle} size="lg">
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

export default withRouter(Comments);
