import React from "react";
import MultipleUpload from "../../../../shared/form/multiple-upload";
import FormContainer from "../../../../shared/form/form-container";
import {Button, Col, Form} from "reactstrap";
import {formStructure} from "./form-structure";
import {themeColor} from "../../../../theme/color";
import {useForm} from "react-hook-form";


const NewPortfolioModal = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const createPortfolioSubmitHandler = data => {
        console.log(data)
    }


    return (
        <div className="w-100">
            <Col xl="12">
                <Form onSubmit={handleSubmit(createPortfolioSubmitHandler)}>
                    {formStructure && formStructure.map(form => (
                        <FormContainer
                            key={form.id}
                            data={form}
                            register={register}
                            errors={errors}
                        />
                    ))}
                    <MultipleUpload/>
                    <Button type="submit" className=" c-white" style={{background: themeColor.BLUE}}>ساخت portfolio</Button>
                </Form>
            </Col>
        </div>
    );
};

export default NewPortfolioModal;
