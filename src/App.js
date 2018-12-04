import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import "bootstrap/dist/css/bootstrap.css";

import ModalWizardForm from "./ModalWizardForm";
import ContactForm from "./ContactForm";
import AddressForm from "./AddressForm";
import CommentForm from "./CommentForm";

// window.store = "mystore";

class App extends Component {
    state = { step: 1, contactForm: {}, addressForm: {} };

    componentDidMount() {
        // debugger;
    }

    onChangeContactForm = (state) => {
        this.setState({ contactForm: state });
    };

    onChangeAddressForm = (state) => {
        this.setState({ addressForm: state });
    }

    renderBackBtn = () => {
        const { step } = this.state;
        if (step > 1) {
            return (
                <button
                    className="btn btn-primary"
                    onClick={() => this.setState({ step: step - 1 })}
                >
                    Previous
                </button>
            );
        }

        return "";
    };

    renderNextBtn = () => {
        const { step } = this.state;
        if (step < 4) {
            return (
                <button className="btn btn-primary"
                    onClick={() => {
                        this.setState({
                            step: step + 1
                        });
                    }}
                >
                    Next
                </button>
            );
        }

        return "";
    };

    render() {
        const { step } = this.state;
        let renderForm;

        switch (step) {
            case 1:
                renderForm = <ContactForm onChange={this.onChangeContactForm} />;
                break;
            case 2:
                renderForm = <AddressForm />;
                break;
            case 3:
                renderForm = <CommentForm />;
            default:
                break;
        }

        return (
            <div className="App">
                <div className="div-form">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="text-center">
                                Please fillup the form
                            </h1>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            **breadcrumbs here**
                        </div>
                    </div>

                    <br />
                    {renderForm}

                    <br />
                    <div className="row">
                        <div className="col-4">{this.renderBackBtn()}</div>
                        <div
                            className="col-4 offset-4"
                            style={{ textAlign: "right" }}
                        >
                            {this.renderNextBtn()}
                        </div>
                    </div>
                </div>

                {/* <ModalWizardForm /> */}
            </div>
        );
    }
}

export default App;
