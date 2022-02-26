import React, { useState } from "react";
import { Button, Container } from "reactstrap";
import { useForm } from "react-hook-form";
import FormContainer from "./../../shared/form/form-container";
import Loader from "../../shared/loader";
import { authForm } from "./form-structure";
import { getUser } from "./data";
import { AuthBody } from "./style";

const Auth = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);

  const submitForm = async (data) => {
    setIsLoading(true);
    const userFormData = {
      email: data.email,
      username: data.username,
      password: data.password,
      from: "admin",
    };

    await getUser(userFormData);

    setTimeout(() => {
      setIsLoading(false);
      window.location.href = "/";
    }, 1200);
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

          <div className="w-100 d-flex justify-content-center">
            <Button
              color={"primary"}
              size="lg"
              className={"mt-4 d-flex align-items-center"}
              style={{ overflow: "hidden" }}
            >
              {isLoading === true ? <Loader /> : <>ورود به سایت</>}
            </Button>
          </div>
        </form>
      </AuthBody>
    </Container>
  );
};

export default Auth;
