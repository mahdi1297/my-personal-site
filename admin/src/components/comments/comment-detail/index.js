/* eslint-disable no-unused-vars */
import React from "react";
import { ModalBody } from "reactstrap";

const CommentDetail = ({ data }) => {
  const { _id, content, isReplyed, username, profile, parentId } = data;

  console.log(parentId);

  return (
    <ModalBody>
      <div>CommentDetail</div>
    </ModalBody>
  );
};

export default CommentDetail;
