export default {
    street1: "",
    street2: "",
    city: "",
    state: "",
    zip: "",
    formProps: [
        { street1: {label: "Street 1", validate: true} },
        { street2: {label: "Street 2", validate: false} },
        { city: {label: "City", validate: false} },
        { state: {label: "State", validate: false} },
        { zip: {label: "Zip", validate: false} },
    ]
}