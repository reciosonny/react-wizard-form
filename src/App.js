import React, { Component } from "react";
import "./App.css";

import "materialize-css/dist/css/materialize.css";
import "materialize-css/dist/js/materialize.js";

import ContactForm from "./ContactForm";
import AddressForm from "./AddressForm";
import CommentForm from "./CommentForm";
import ReviewForm from "./ReviewForm";
import ThankYouForm from "./ThankYouForm";

import ContactFormPropsModel from './Models/ContactFormPropsModel';
import AddressFormPropsModel from './Models/AddressFormPropsModel';
import CommentFormPropsModel from './Models/CommentFormPropsModel';

class App extends Component {
    state = { step: 1, contactForm: ContactFormPropsModel, addressForm: AddressFormPropsModel, commentForm: CommentFormPropsModel, disableControl: true };

    onChangeContactForm = state => {
        this.setState({ contactForm: state });
    };

    onChangeAddressForm = state => {
        this.setState({ addressForm: state });
    };

    onChangeCommentForm = state => {
        this.setState({ commentForm: state });
    };

    onNextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    }

    onPrevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    }

    onValidation = (validated) => {
        console.log("Validation on top hierarchy: ", validated);
        this.setState({ disableControl: !validated });
    }

    render() {
        const { step, contactForm, addressForm, commentForm } = this.state;
        let renderForm;

        switch (step) {
            case 1:
                renderForm = (
                    <ContactForm 
                        contact={contactForm} 
                        onChange={this.onChangeContactForm} 
                        onValidation={this.onValidation}
                        step={step}
                        onNextStep={this.onNextStep}
                        onPrevStep={this.onPrevStep}
                    />
                );
                break;
            case 2:
                renderForm = (
                    <AddressForm address={addressForm} onChange={this.onChangeAddressForm} />
                );
                break;
            case 3:
                renderForm = (
                    <CommentForm comment={commentForm} onChange={this.onChangeCommentForm} />
                );
                break;
            case 4: 
                renderForm = <ReviewForm 
                                {...this.state} 
                                onChangeContactForm={this.onChangeContactForm}
                                onChangeAddressForm={this.onChangeAddressForm}
                                onChangeCommentForm={this.onChangeCommentForm}
                            />;
                break;
            case 5:
                renderForm = <ThankYouForm />;
                break;
        }

        return (
            <div className="App">
                <div className="div-form">
                    <div className="row">
                        <div className="s12">
                            <h1 className="text-center">
                                Please fillup the form
                            </h1>
                        </div>
                    </div>

                    <div className="row">
                        <div className="s12">**breadcrumbs here**</div>
                    </div>

                    <br />
                    {renderForm}
                </div>
            </div>
        );
    }
}

export default App;
