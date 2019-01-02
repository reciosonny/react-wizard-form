import React, { Component } from "react";
import FormInputs from "./SharedComponents/FormInputs";

import * as stateHelper from './Helpers/stateHelper';
import AddressFormPropsModel from './Models/AddressFormPropsModel';

class AddressForm extends Component {
    state = {...AddressFormPropsModel};

    componentDidMount() {
        stateHelper.setState(this, this.props.address);
    }

    onChange = (propName, value) => {
        this.setState({ [propName]: value }, () => this.props.onChange(this.state));
    }

    render() {
        return (
            <>
                <h4>Address Form</h4>
                <FormInputs 
                    formProps={this.state.formProps} 
                    forms={this.state} 
                    step={this.props.step}
                    onNextStep={this.props.onNextStep}
                    onPrevStep={this.props.onPrevStep}
                    onChange={this.props.onChange}
                />
            </>
        );
    }
}

export default AddressForm;
