import React, { Component } from "react";


// TODO: I think this needed to be put inside FormInputs component
class BackNextBtn extends Component {
    state = { fieldValidations: [] };

    //TODO: we're going to need `formProps` as a property to be passed on this component to process it and set formValidationErrors flag.
    componentDidMount() {
        const { formProps } = this.props;
        const result = mapFormProps(formProps);

        this.setState({ fieldValidations: result });
    }

    renderBackBtn = () => {
        const { step } = this.props;
        if (step > 1 & step < 4) {
            return (
                <button
                    className="btn btn-primary"
                    onClick={this.props.onPrevStep}
                >
                    Previous
                </button>
            );
        }

        return "";
    };

    // TODO: refactor this one out
    onNextStep = () => {
        const { formInputs } = this.props;
        const result = mapFieldValidations(this.state.fieldValidations, formInputs);

        this.setState({ fieldValidations: result, validated: !result.some(x => x.validated === false) }, () => {
            if (this.state.validated) {
                this.props.onNextStep();
            } else {
                this.props.onNextStepFieldValidation(result);
            }
        });
    }

    renderNextBtn = () => {
        const { step } = this.props;

        if (step < 4) {
            return (
                <button className="btn btn-primary" onClick={this.onNextStep}>
                    Next
                </button>
            );
        } else if (step === 4) {
            return <button className="btn btn-primary" onClick={this.onNextStep}>Submit</button>;
        }

        return "";
    };

    render() {
        return (
            <div className="row">
                <div className="col s4">{this.renderBackBtn()}</div>
                <div
                    className="col s8 offset-by-4"
                    style={{ textAlign: "right" }}
                >
                    {this.renderNextBtn()}
                </div>
            </div>
        );
    }
}


function mapFormProps(formProps) {
    return formProps
            .filter(x => x[Object.keys(x)[0]].validate === true)
            .map(x => {
                const propName = Object.keys(x)[0];

                return {
                    fieldName: propName,
                    validated: false,
                    addValidationError: false
                }; //set validated to false first as the input is not filled by user yet...
            });
}

function mapFieldValidations(fieldValidations, formInputs) {
    return fieldValidations.map(x => {
        const formInput = formInputs.find(y => y.fieldName === x.fieldName);
        if (formInput) {
            x.addValidationError = !formInput.validated;
            x.validated = formInput.validated;
        } else {
            x.addValidationError = true;
            x.validated = false;
        }

        return x;
    });
}


export default BackNextBtn;