/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { getCommentParent, replyComment } from "./data";
import { Button, ModalBody } from "reactstrap";
import { formStructure } from "./form-structure";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Body } from "./style";

const UserDetail = ({ data }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(data);

  const { _id, content, parentId } = data;
  const [blogInfo, setBloginfo] = useState({});

  const user = useSelector((store) => store.user);

  useEffect(() => {
    async function gett() {
      if (parentId) {
        await getCommentParent(parentId, setBloginfo);
      }
    }
    gett();
  }, [parentId]);

  const submitResponse = async (data) => {
    if (user && user._id) {
    }
  };

  return (
    <ModalBody>
      <Body></Body>
    </ModalBody>
  );
};

export default UserDetail;
