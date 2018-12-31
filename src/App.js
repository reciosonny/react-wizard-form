import React, { Component } from "react";
import "./App.css";

import "materialize-css/dist/css/materialize.css";
import "materialize-css/dist/js/materialize.js";

import ContactForm from "./ContactForm";
import AddressForm from "./AddressForm";
import CommentForm from "./CommentForm";
import ReviewForm from "./ReviewForm";
import ThankYouForm from "./ThankYouForm";

import ContactFormPropsModel from "./Models/ContactFormPropsModel";
import AddressFormPropsModel from "./Models/AddressFormPropsModel";
import CommentFormPropsModel from "./Models/CommentFormPropsModel";

const BreadCrumbs = ({ breadcrumbs }) => {
    return <div className="breadcrumb">
        {breadcrumbs.map((x, idx) => {
            const activeClass = x.active ? "breadcrumb__step--active" : "";
            return (
                <a className={`breadcrumb__step ${activeClass}`} href="javascript:void(0)">
                    {x.name}
                </a>
            );
        })}
    </div>;
};

class App extends Component {
    state = {
        step: 1,
        contactForm: ContactFormPropsModel,
        addressForm: AddressFormPropsModel,
        commentForm: CommentFormPropsModel,
        disableControl: true,
        breadcrumbsStep: [
            { name: "Contact Form", active: true },
            { name: "Address Form", active: false },
            { name: "Review", active: false },
            { name: "Success", active: false }
        ]
    };

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
        const newStep = step+1;

        this.setState({ step: newStep, breadcrumbsStep: mapBreadcrumbs(this.state.breadcrumbsStep, newStep-1) });
    };

    onPrevStep = () => {
        const { step } = this.state;
        const newStep = step-1;

        this.setState({ step: newStep, breadcrumbsStep: mapBreadcrumbs(this.state.breadcrumbsStep, newStep-1) });
    };

    onValidation = validated => {
        console.log("Validation on top hierarchy: ", validated);
        this.setState({ disableControl: !validated });
    };

    // onBreadCrumbsClick = (currIndex) => {
    //     this.setState({ breadcrumbsStep : mapBreadcrumbs(this.state.breadcrumbsStep, currIndex) });
    // };

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
                    <AddressForm
                        address={addressForm}
                        onChange={this.onChangeAddressForm}
                        onValidation={this.onValidation}
                        step={step}
                        onNextStep={this.onNextStep}
                        onPrevStep={this.onPrevStep}
                    />
                );
                break;
            // case 3:
            //     renderForm = (
            //         <CommentForm comment={commentForm} onChange={this.onChangeCommentForm} />
            //     );
            //     break;
            case 3:
                renderForm = (
                    <ReviewForm
                        {...this.state}
                        onChangeContactForm={this.onChangeContactForm}
                        onChangeAddressForm={this.onChangeAddressForm}
                        onChangeCommentForm={this.onChangeCommentForm}
                        onNextStep={this.onNextStep}
                    />
                );
                break;
            case 4:
                renderForm = <ThankYouForm />;
                break;
        }

        return (
            <div className="App">
                <div className="div-form">
                    <div className="row">
                        <BreadCrumbs breadcrumbs={this.state.breadcrumbsStep} />
                    </div>

                    <br />
                    {renderForm}
                </div>
            </div>
        );
    }
}

function mapBreadcrumbs(breadcrumbs, currIndex) {
    return breadcrumbs.map((x, idx) => {
        x.active = currIndex >= idx;
        return x;
    });
}

export default App;
