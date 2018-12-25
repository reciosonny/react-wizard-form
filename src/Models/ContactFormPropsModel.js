

export default {
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    formProps: [
        { firstName: {label: "First Name", validate: true} },
        { lastName: {label: "Last Name", validate: true} },
        { emailAddress: {label: "Email Address", validate: false} },
        { phoneNumber: {label: "Phone Number", validate: false} }
    ]
}