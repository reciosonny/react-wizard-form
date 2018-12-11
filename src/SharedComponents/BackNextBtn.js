import React, { Component } from 'react';

class BackNextBtn extends Component {

    state = {fieldValidations: []};

    componentDidMount() {
        const { formProps } = this.props;

        const result = formProps.filter(x => x[Object.keys(x)[0]].validate === true).map(x => {
            const propName = Object.keys(x)[0];
            
            return { fieldName: propName, validated: false, addValidationError: false }; //set validated to false first as the input is not filled by user yet...
        });

        this.setState({ fieldValidations: result });
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default BackNextBtn;