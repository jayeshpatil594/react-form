import React from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { savePlanFormData, nextStep } from "../../actions";

const PlanForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const planList = ["plan1", "plan2", "plan3", "plan4"];

  const onSubmit = (data) => {
    props.savePlanFormData(data.plan);
    props.nextStep();
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h2>Choose a plan</h2>
        <select
          className={errors.plan && "warn-select"}
          {...register("plan", { required: true })}
        >
          <option key="" value="">
            Select a plan
          </option>
          {planList.map((plan, index) => (
            <option key={index} value={plan}>
              {plan}
            </option>
          ))}
        </select>
      </div>
      {errors.plan && <div style={{ color: "red" }}> Please select a plan</div>}

      <button className="continue-btn" type="submit">
        Continue
      </button>
    </form>
  );
};

const mapStateToProps = (state) => ({
  lendingForm: state.lendingForm,
});
export default connect(mapStateToProps, { savePlanFormData, nextStep })(
  PlanForm
);
