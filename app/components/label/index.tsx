type LabelProps = {
    htmlFor: string,
    text: string,
    className:string,
}

export function Label({htmlFor, text, className}:LabelProps) {
    return <label htmlFor={htmlFor} className={className}>{text}</label>
}