import React, { Component } from "react";
import * as stateHelper from './Helpers/stateHelper';

import CommentFormPropsModel from './Models/CommentFormPropsModel';
import FormInputs from "./SharedComponents/FormInputs";


class CommentForm extends Component {

    state = CommentFormPropsModel;

    componentDidMount() {        
        stateHelper.setState(this, this.props.comment);
    }

    onChangeSelection = (e) => {
        var index = e.nativeEvent.target.selectedIndex;
        const selectionLbl = e.nativeEvent.target[index].text;

        this.setState(
            { selectionVal: e.target.value, selectionLbl },
            () => this.props.onChange(this.state)
        );
    }

    render() {
        const active = this.state.commentBox ? "active" : "";

        return (
            <div>
                <div className="input-field col s12">
                    <select 
                        className="browser-default" 
                        onChange={this.onChangeSelection}
                        value={this.state.selectionVal}
                    >
                        <option value="" disabled selected>
                            Choose your option
                        </option>
                        <option value="1">Staff Feedback</option>
                        <option value="2">Checkout Feedback</option>
                        <option value="3">Product Feedback</option>
                    </select>
                </div>

                <div className="row">
                    <div className="input-field col s12">
                        <textarea 
                            className="materialize-textarea"
                            onChange={(e) => this.setState({ commentBox: e.target.value }, () => this.props.onChange(this.state))}
                            value={this.state.commentBox}
                        />
                        <label className={active}>Comment Box</label>
                    </div>
                </div>
                <br />

                {/* <FormInputs 
                    formProps={this.state.formProps} 
                    forms={this.state} 
                    step={this.props.step}
                    onNextStep={this.props.onNextStep}
                    onPrevStep={this.props.onPrevStep}
                    onChange={this.props.onChange}
                /> */}

            </div>
        );
    }
}

export default CommentForm;
