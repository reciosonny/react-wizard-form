import React, { Component } from "react";

import * as stateHelper from './Helpers/stateHelper';

import FormInputs from "./SharedComponents/FormInputs";
import ContactFormPropsModel from './Models/ContactFormPropsModel';


class ContactForm extends Component {
    state = {...ContactFormPropsModel, fieldValidations: []};

    componentDidMount() {
        stateHelper.setState(this, this.props.contact);
    }

    render() {
        return (
            <>
                <h4>Contact Form</h4>

                <FormInputs 
                    formProps={this.state.formProps} 
                    forms={this.state} 
                    step={this.props.step}
                    onNextStep={this.props.onNextStep}
                    onPrevStep={this.props.onPrevStep}
                    onChange={this.props.onChange}
                />

                <br />

            </>
        );
    }
}

export default ContactForm;