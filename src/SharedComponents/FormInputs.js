import React from 'react';
import FormInput from './FormInput';
import BackNextBtn from './BackNextBtn';

// We do most of the dirty work here including form validations and input...
class FormInputs extends React.Component {

    state = { validated: false, fieldValidations: [], formInputs: [] };

    componentDidMount() {
        this.setState({ forms: this.props.forms }); //to change the value of forms
    }

    // note: we use this instead to get updates from the top hierarchy of forms value saved in state. componentDidMount() won't work
    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.forms !== prevProps.forms) {

            const result = formsToValidate(this.props.forms, this.props.formProps);
            const formInputs = result.map(x => {
                const val = this.props.forms[x];
                return {
                    fieldName: x,
                    validated: val.length > 0,
                    addValidationError: !val.length > 0
                }
            });

            this.setState({ forms: this.props.forms, formInputs }); //to change the value of forms
        }
    }

    //note: won't take effect until you submit the next button. Afterwards, each time you typed in input field, the textbox will turn red if not validated "on change"
    onValidation = ({ fieldName, validated }) => {
        const { fieldValidations, formInputs } = this.state;

        const result = mapFieldValidations({ fieldValidations, fieldName, validated });
        const formInputsResult = mapFormInputs({ formInputs, fieldName, validated });

        this.setState({ fieldValidations: result, validated: !result.some(x => x.validated === false), formInputs: formInputsResult });
    }

    renderFormInputs = () => {
        const { fieldValidations, forms } = this.state;

        if(!forms) return;

        const formPropsWithValidations = createFormPropsWithValidations(fieldValidations, forms, forms.formProps);
        const result = formPropsWithValidations.map((x, idx) => {
            return <FormInput 
                        key={idx}
                        formVal={x.formVal}
                        active={x.active}
                        propName={x.propName}
                        propLabel={x.propLabel}
                        propValidate={x.propValidate}
                        onChange={this.onChange}
                        onValidation={this.onValidation}
                        addValidationError={x.addValidationError}
                    />;
        });
        return result;
    }

    onNextStepFieldValidation = (result) => {
        this.setState({ fieldValidations: result, validated: !result.some(x => x.validated === false) });
    }

    onSubmit = (e) => {
        e.preventDefault();
    }

    onChange = (propName, value) => {
        let newForms = Object.assign({}, this.state.forms); //use a new object instead and mutate the values
        // this.state.forms[propName] = value; //using this method is a mutation in state
        newForms[propName] = value;

        this.setState({ forms: newForms }, () => this.props.onChange(this.state.forms));
    }

    render() {
        return (
            <>
                <form onSubmit={this.onSubmit}>
                    <div className="div-form-fields">
                        <div className="form-intro">
                            {this.renderFormInputs()}
                        </div>
                    </div>

                    <BackNextBtn 
                        formProps={this.props.formProps} 
                        forms={this.state.forms}
                        step={this.props.step} 
                        onNextStepFieldValidation={this.onNextStepFieldValidation}
                        onNextStep={this.props.onNextStep}
                        onPrevStep={this.props.onPrevStep}
                        fieldValidations={this.state.fieldValidations}
                        formInputs={this.state.formInputs}
                    />
                </form>
            </>
        );
    }
};

function formsToValidate(forms, formProps) {
    return Object.keys(forms).filter(form => {
        const formProp = formProps.find(x => Object.keys(x)[0] === form);
        return form !== "formProps" && (formProp ? formProp[form].validate : false);
    });
}

function createFormPropsWithValidations(fieldValidations, forms, formProps) {
    return formProps.map(x => {
        const propName = Object.keys(x)[0];
        const formVal = forms[propName];
        const fieldValidation = fieldValidations.find(x => x.fieldName === propName);

        return {
            propName,
            propLabel: x[propName].label,
            propValidate: x[propName].validate,
            formVal,
            active: formVal ? "active" : "",
            fieldValidation,
            addValidationError: fieldValidation ? fieldValidation.addValidationError : false
        }
    });
}

function mapFormInputs({ formInputs, fieldName, validated }) {

    return !formInputs.some(x => x.fieldName === fieldName) ? 
        formInputs.concat([{ fieldName, validated }]) : 
        formInputs.map(x => {
            if (x.fieldName === fieldName) {
                x.validated = validated;
            }
            return x;
        });    
}

function mapFieldValidations ({ fieldValidations, fieldName, validated }) {
    return fieldValidations.map(x => {
        if (x.fieldName === fieldName) {
            x.validated = validated;
            x.addValidationError = !validated;
        }
        return x;
    });
}

export default FormInputs;