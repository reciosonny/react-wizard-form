import React from 'react';
import FormInput from './FormInput';

class FormInputs extends React.Component {

    state = { validated: false };

    componentDidMount() {
        
    }

    onValidation = ({ fieldName, validated }) => {
        this.props.onValidation({ fieldName, validated });
    }

    renderFormInputs = () => {
        const { formProps, state, onChange, fieldValidations } = this.props;


        const result = formProps.map(x => {
            const propName = Object.keys(x)[0];
            const propLabel = x[propName].label;
            const propValidate = x[propName].validate;
            const formVal = state[propName];
            const active = formVal ? "active" : "";

            const fieldValidation = fieldValidations.find(x => x.fieldName === propName);
            const addValidationError = fieldValidation ? fieldValidation.addValidationError : false;
            
            return <FormInput 
                        formVal={formVal}
                        active={active} 
                        propName={propName} 
                        propLabel={propLabel} 
                        propValidate={propValidate} 
                        onChange={onChange} 
                        onValidation={this.onValidation}
                        addValidationError={addValidationError}
                    />;
        });

        return result;
    }

    render() {    
        return (
            <>
                {this.renderFormInputs()}
            </>
        );
    }
};

export default FormInputs;