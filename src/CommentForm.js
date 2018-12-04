import React, { Component } from "react";

class CommentForm extends Component {
    render() {
        return (
            <div>
                <select class="custom-select">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
        );
    }
}

export default CommentForm;
