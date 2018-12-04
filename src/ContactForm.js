import React, { Component } from "react";

class ContactForm extends Component {

    state = { firstName: "", lastName: "", emailAddress: "" };

    render() {
        return (
            <>
                <div className="row">
                    <div className="col-12">
                        <h2>Your Contact Form</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="First Name"
                            onChange={(e) => {
                                this.setState({ firstName: e.target.value }, () => this.props.onChange(this.state));
                            }}
                        />
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-12">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Last Name"
                            onChange={(e) => {
                                this.setState({ lastName: e.target.value }, () => this.props.onChange(this.state));
                            }}
                        />
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-12">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Email Address"
                            onChange={(e) => {
                                this.setState({ emailAddress: e.target.value }, () => this.props.onChange(this.state));
                            }}
                        />
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-12">
                        <input
                            type="phone"
                            className="form-control"
                            placeholder="Phone Number"
                        />
                    </div>
                </div>
            </>
        );
    }
}

export default ContactForm;
