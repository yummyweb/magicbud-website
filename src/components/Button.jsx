import "./Button.css"

export const Button = props => {
    return (
        <button className="button-base" {...props}>
            { props.text }
        </button>
    )
}