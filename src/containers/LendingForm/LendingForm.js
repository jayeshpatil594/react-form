import React, { Component } from "react";
import { connect } from "react-redux";
import PlanForm from "../../components/PlanForm/PlanForm";
import PriceForm from "../../components/PriceForm/PriceForm";
import { resetStep } from "../../actions";
import SuccessForm from "../../components/SuccessForm/SuccessForm";

class LendingForm extends Component {
  resetFormStep = (e) => {
    this.props.resetStep();
  };
  render() {
    const step = this.props.lendingForm.step;
    console.log(this.props);
    switch (step) {
      case 1:
        return <PriceForm />;
      case 2:
        return <PlanForm />;
      case 3:
        return <SuccessForm />;
      default:
        return <button onClick={this.resetFormStep}>Reset Form Step</button>;
    }
  }
}

const mapStateToProps = (state) => ({
  lendingForm: state.lendingForm,
});

export default connect(mapStateToProps, { resetStep })(LendingForm);
