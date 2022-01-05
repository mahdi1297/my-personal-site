import React from "react";
import {Col} from "reactstrap";
import {formStructure} from "./form-structure";
import {useForm} from "react-hook-form";
import FormContainer from "../../../../shared/form/form-container";
import MultipleUpload from "../../../../shared/form/multiple-upload";


const NewPortfolioModal = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();


    return (
        <div className="w-100">
            <Col xl="12">
                {formStructure && formStructure.map(form => (
                    <FormContainer
                        key={form.id}
                        data={form}
                        register={register}
                        errors={errors}
                    />
                ))}
                <MultipleUpload/>
            </Col>
        </div>
    );
};

export default NewPortfolioModal;
