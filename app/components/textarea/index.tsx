type TextAreaProps =  {
    name: string,
    className: string,
    id: string,
}
export function TextArea({name, className, id}:TextAreaProps) {
    return (
        <textarea
        className={className}
        name={name}
        id={id}></textarea>
    )
}