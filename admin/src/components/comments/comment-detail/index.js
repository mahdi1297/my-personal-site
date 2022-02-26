/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import TextArea from "../../../shared/form/textarea";
import { getCommentParent, replyComment } from "./data";
import { Button, ModalBody } from "reactstrap";
import { formStructure } from "./form-structure";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Body } from "./style";

import Cookies from "universal-cookie";

const cookie = new Cookies();
const Token = cookie.get("i_v_c");

const CommentDetail = ({ data }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { _id, content, parentId } = data;
  const [blogInfo, setBloginfo] = useState({});

  const user = useSelector((store) => store.user);

  useEffect(() => {
    async function gett() {
      if (parentId) {
        await getCommentParent(parentId, setBloginfo, Token);
      }
    }
    gett();
    return () => {};
  }, [parentId]);

  const submitResponse = async (data) => {
    if (user && user._id) {
      const commentData = {
        parentId: parentId,
        isReplyed: "true",
        username: user.username,
        userId: user._id,
        profile: user.profile,
        content: data.content,
        replyedParentId: _id,
        isConfirmed: "true",
      };

      await replyComment(commentData, Token);
    }
  };

  return (
    <ModalBody>
      <Body>
        <strong>مقاله: </strong>
        <h2 className="f-18">{blogInfo && blogInfo.title}</h2>
        {blogInfo && (
          <a href={`http://localhost:4200/blog/${blogInfo.slug}`}>
            رفتن به مقاله
          </a>
        )}

        <hr />

        <textarea
          className="disabled-inp"
          value={content && content}
          disabled={true}
          rows={5}
        ></textarea>

        <form onSubmit={handleSubmit(submitResponse)} className="mt-4">
          {formStructure && (
            <TextArea
              data={formStructure}
              register={register}
              errors={errors}
            />
          )}

          <Button color={"primary"} className="mt-4">
            ثبت پاسخ
          </Button>
        </form>
      </Body>
    </ModalBody>
  );
};

export default CommentDetail;
