import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ModalWizardForm extends Component {


    state = { modal:false };

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div>
                <Button color="danger" onClick={this.toggle}>
                    Click me!
                </Button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                    className={this.props.className}
                >
                    <ModalHeader toggle={this.toggle}>Registration Form</ModalHeader>
                    <ModalBody>
                        <div className="container-fluid">

                            <div className="row">
                                <div className="col-4">
                                    <h1>Hello world!</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <input type="text" className="form-control" placeholder="First Name"/>
                                </div>
                            </div>
                        </div>

                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>
                            Do Something
                        </Button>{" "}
                        <Button color="secondary" onClick={this.toggle}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default ModalWizardForm;
