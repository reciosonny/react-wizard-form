

export default {
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    formProps: [
        { firstName: {label: "First Name", validate: true} },
        { lastName: {label: "Last Name", validate: false} },
        { emailAddress: {label: "Email Address", validate: false} },
        { phoneNumber: {label: "Phone Number", validate: false} }
    ]
}