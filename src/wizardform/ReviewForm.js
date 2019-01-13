import React, { Component } from 'react';
import ReviewFormStyle from './SharedComponents/ReviewFormStyle';
import FormEditModal from './FormEditModal';
import ContactForm from './ContactForm';
import AddressForm from './AddressForm';
import CommentForm from './CommentForm';


class ReviewForm extends Component {

    constructor(props) {
        super(props);        
    }

    renderCommentForm = () => {
        const { commentForm } = this.props;
        const labels = ["Feedback Type", "Comment Box"];

        return Object.keys(commentForm).filter(x => x !== "selectionVal").map((prop, idx) => 
            <ReviewFormStyle label={labels[idx]} value={commentForm[prop]} />
        )
    }

    
    render() {
        const { contactForm, addressForm, commentForm } = this.props;
        const renderContactForm = mapForm(contactForm);
        const renderAddressForm = mapForm(addressForm);

        const editContactForm = <ContactForm onChange={this.props.onChangeContactForm} contact={contactForm} />
        const editAddressForm = <AddressForm onChange={this.props.onChangeAddressForm} address={addressForm} />
        // const editCommentForm = <CommentForm onChange={this.props.onChangeCommentForm} comment={commentForm} />

        return (
            <div>
                <h3>Review form</h3>
                <br/><br/>

                <div className="row">
                    <div className="">
                        <h4>Contacts</h4>
                        <hr/>
                        {renderContactForm}
                        <FormEditModal editForm={editContactForm} />

                        <h4>Address</h4>
                        <hr/>
                        {renderAddressForm}
                        <FormEditModal editForm={editAddressForm} />
                    </div>
                </div>

                <div className="row">
                    <div className="col s4">
                        <button className="btn btn-primary" onClick={this.props.onPrevStep}>
                            Previous
                        </button>
                    </div>
                    <div
                        className="col s8 offset-by-4"
                        style={{ textAlign: "right" }}
                    >
                        <button className="btn btn-primary" onClick={this.props.onNextStep}>
                            Submit
                        </button>
                    </div>
                </div>

            </div>
        );
    }
}

function mapForm(formData) {
    const { formProps } = formData;

    const result = Object.keys(formData).filter(propForm => propForm !== "formProps" && propForm !== "fieldValidations").map((x) => {
        const columnName = formProps.find(cFormProp => Object.keys(cFormProp)[0] === x)[x];

        return <ReviewFormStyle 
            label={columnName.label} 
            value={formData[x]} 
        />
    });

    return result;
}


export default ReviewForm;