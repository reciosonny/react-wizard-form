import React, { Component } from 'react';

class AddressForm extends Component {
    render() {
        return (
            <>
                <div className="row">
                    <div className="col-12">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Street 1"
                            onChange={(e) => {
                                this.setState({ street1: e.target.value }, () => this.props.onChange(this.state));
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
                            placeholder="Street 2"
                            onChange={(e) => {
                                this.setState({ street2: e.target.value }, () => this.props.onChange(this.state));
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
                            placeholder="City"
                            onChange={(e) => {
                                this.setState({ city: e.target.value }, () => this.props.onChange(this.state));
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
                            placeholder="State"
                            onChange={(e) => {
                                this.setState({ state: e.target.value }, () => this.props.onChange(this.state));
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
                            placeholder="Zip"
                            onChange={(e) => {
                                this.setState({ zip: e.target.value }, () => this.props.onChange(this.state));
                            }}
                        />
                    </div>
                </div>
            </>
        );
    }
}

export default AddressForm;