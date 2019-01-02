
export function setState(instance, props) {
    for (const prop in props) {
        if (props.hasOwnProperty(prop)) {
            const element = props[prop];
            instance.setState({ [prop]: element });
        }
    }
}

