/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import TextArea from "../../../shared/form/textarea";
import { Button, ModalBody } from "reactstrap";
import { getCommentParent, replyComment } from "./data";
import { formStructure } from "./form-structure";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Body } from "./style";

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
        await getCommentParent(parentId, setBloginfo);
      }
    }
    gett();
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

      await replyComment(commentData);
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
