import React from "react";
import { useForm } from "react-hook-form";
import "./PriceForm.css";
import { connect } from "react-redux";
import { savePriceFormData, nextStep } from "../../actions";
import styled from "styled-components";

const PriceForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    props.savePriceFormData(data.price);
    props.nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h4> Price </h4>
        <input
          className={errors.price && "warn-input"}
          type="number"
          placeholder="Enter price"
          {...register("price", { required: true, min: 0 })}
        />
        {errors.price &&
          (errors.price.type === "required" ? (
            <WarningDiv>This field is required</WarningDiv>
          ) : (
            <div>
              <WarningDiv>Price should not be negative</WarningDiv>
            </div>
          ))}
      </div>

      <button class="continue-btn" type="submit">
        Continue
      </button>
    </form>
  );
};

const WarningDiv = styled.div`
  color: red;
`;

const mapStateToProps = (state) => ({
  lendingForm: state.lendingForm,
});
export default connect(mapStateToProps, { savePriceFormData, nextStep })(
  PriceForm
);
