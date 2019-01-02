import React, { Component } from 'react';
import FormInputs from './FormInputs';

class FormInputValidation extends Component {

    state = { fieldValidations: [] };
    
    componentDidMount() {
        const { formProps } = this.state;

        const result = formProps.filter(x => x[Object.keys(x)[0]].validate === true).map(x => {
            const propName = Object.keys(x)[0];
            
            return { fieldName: propName, validated: false, addValidationError: false }; //set validated to false first as the input is not filled by user yet...
        });

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

    onNextStep = () => {
        const result = this.state.fieldValidations.map(x => {
            x.addValidationError = !x.validated;
            return x;
        });

        this.setState({ fieldValidations: result, validated: !result.some(x => x.validated === false) }, () => {
            // this.props.onValidation(this.state.validated);
            if (this.state.validated) {
                this.props.onNextStep();
            }
        });
    }

    renderNextBtn = () => {
        const { step } = this.props;

        if (step < 4) {
            return (
                <button
                    className="btn btn-primary"
                    onClick={this.onNextStep}
                >
                    Next
                </button>
            );
        } else if (step === 4) {
            return <button className="btn btn-primary" onClick={this.onNextStep}>Submit</button>;
        }

        return "";
    };

    onValidation = ({ fieldName, validated }) => {
        const result = this.state.fieldValidations.map(x => {
            if (x.fieldName === fieldName) {
                x.validated = validated;
                x.addValidationError = !validated;
            }
            
            return x;
        });

        this.setState({ fieldValidations: result, validated: !result.some(x => x.validated === false) }, () => {
            this.props.onValidation(this.state.validated);
        });
    }

    render() {
        return (
            <div>
                <FormInputs 
                    formProps={this.props.formProps} 
                    state={this.state} 
                    onChange={this.props.onChange}
                    onValidation={this.onValidation}
                    fieldValidations={this.state.fieldValidations}
                />

                {/* TODO: put it in Form Components instead (such as ContactForm, AddressForm) */}
                <br />
                <div className="row">
                    <div className="col s4">{this.renderBackBtn()}</div>
                    <div
                        className="col s8 offset-by-4"
                        style={{ textAlign: "right" }}
                    >
                        {this.renderNextBtn()}
                    </div>
                </div>
                {/* END */}
            </div>
        );
    }
}

export default FormInputValidation;