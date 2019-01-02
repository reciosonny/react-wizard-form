import React from 'react';

const ReviewFormStyle = ({ label, value }) => {
    return (
        <div className="row">
            <div className="s12">
                <label><h5>{label}</h5></label>
            </div>
            <div className="s12">
                <h6><strong>{value}</strong></h6>
            </div>
        </div>
    );
};
export default ReviewFormStyle;