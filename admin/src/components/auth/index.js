import React from "react";
import FormContainer from "./../../shared/form/form-container";
import { Button, Container } from "reactstrap";
import { authForm } from "./form-structure";
import { AuthBody } from "./style";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";

const Auth = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    localStorage.setItem("ss", "ss");
  };

  return (
    <Container>
      <AuthBody>
        <h2>سلام مهدی</h2>
        <form onSubmit={handleSubmit(submitForm)}>
          {authForm.map((x) => (
            <FormContainer
              data={x}
              key={x.id}
              register={register}
              errors={errors}
            />
          ))}

          <Button color={"primary"} className={"mt-4"}>
            ورود به سایت
          </Button>
        </form>
        {/* <Redirect from="/" to="/users" /> */}
      </AuthBody>
    </Container>
  );
};

export default Auth;
