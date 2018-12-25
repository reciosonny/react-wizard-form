import React, { Component } from "react";

class FormInput extends Component {

    state = {addValidationError: false};

    componentDidMount() {
        
    }

    render() {
        const { propLabel, propName, active, formVal, propValidate, addValidationError } = this.props;
        const displayValidation = addValidationError ? "inline" : "none";
        const invalidValidationInputStyle = addValidationError ? "invalid" : "";

        return (
            <>
                <div className="row">
                    <div className="input-field col s12">
                        <input
                            type="text"
                            className={`form-control ${invalidValidationInputStyle}`}
                            value={formVal}
                            onChange={e => {
                                const val = e.target.value;
                                this.props.onChange(propName, val);
                                if (propValidate) {
                                    // this.setState({ validate: val.length > 0 });
                                    this.props.onValidation({ fieldName:propName, validated: val.length > 0});
                                }
                            }}
                        />{" "}
                        
                        {/**add class `invalid` for validation */}
                        <label className={active}>{propLabel}</label>
                        <span className="red-text" style={{display: displayValidation}}>Required</span>
                    </div>
                </div>
                <br />
            </>
        );
    }
}

export default FormInput;
