import React, { Component } from "react";
import { Modal, Button } from "react-materialize";


class FormEditModal extends Component {

    render() {
        return (
            <div>
                <Modal trigger={<Button>Edit</Button>} className="form-modal-edit" fixedFooter>
                    {this.props.editForm}
                </Modal>
            </div>
        );
    }
}

export default FormEditModal;