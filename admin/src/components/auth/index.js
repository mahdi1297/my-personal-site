import React from "react";
import { Container } from "reactstrap";
import { authForm } from "./form-structure";
import { AuthBody } from "./style";
import FormContainer from "./../../shared/form/form-container";
import { useForm } from "react-hook-form";

const Auth = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => console.log(data);

  return (
    <Container>
      <AuthBody>
        <h2>ورود به پنل</h2>
        <form onSubmit={handleSubmit(submitForm)}>
          {authForm.map((x) => (
            <FormContainer
              data={x}
              key={x.id}
              register={register}
              errors={errors}
            />
          ))}
        </form>
      </AuthBody>
    </Container>
  );
};

export default Auth;
