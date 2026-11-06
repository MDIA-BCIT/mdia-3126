import "./Button.css";

export default function Button({
    children,
    disabled,
    modifier = "primary",
    onClick,
    ...props
}) {
    return (
        <button
            className={`button button--${modifier}`}
            disabled={disabled}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
}
