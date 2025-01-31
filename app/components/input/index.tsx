type InputProps =  {
    name: string,
    className: string,
    id: string,
    type?: string,
    multiple?: boolean,
    required?: boolean,
}


export function Input({name, className, id, type, multiple, required}:InputProps) {
    return (
        <input
            className={className}
            name={name}
            id={id}
            type={type}
            multiple={multiple}
            required={required}
         />
    )
}