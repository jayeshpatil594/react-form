import React from "react";
import { connect } from "react-redux";
import { resetStep } from "../../actions";

const SuccessForm = (props) => {
  const resetFormStep = (e) => {
    props.resetStep();
  };
  return (
    <React.Fragment>
      <div style={{ color: "green" }}>Form submitted sucessfully</div>
      <div>
        <label>Price : </label> {props.lendingForm.price}
      </div>
      <div>
        <label>Plan : </label> {props.lendingForm.plan}
      </div>
      <button onClick={resetFormStep}>Reset Form Step</button>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  lendingForm: state.lendingForm,
});

export default connect(mapStateToProps, { resetStep })(SuccessForm);
