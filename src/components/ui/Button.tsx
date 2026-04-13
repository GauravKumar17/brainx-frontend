import React from 'react';

interface ButtonProps {
    title:string;
    size: "sm"|"md"|"lg";
    variant: "primary" | "secondary" ;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
}

const VariantStyles = {
    primary: "bg-blue-600 text-white hover:opacity-90 hover:bg-blue-600 ",
    secondary: "bg-rose-500 text-white hover:opacity-90 hover:bg-rose-600 ", 
}

const SizeStyles = {
    sm: "px-2 py-1 text-sm flex items-center justify-center gap-3  rounded-lg font-normal",
    md: "px-6  py-2 text-md flex items-center justify-center gap-3 rounded-md font-normal",
    lg: "px-10 py-3 text-2xl flex items-center justify-center gap-3  rounded-md font-normal",
}
    


function Button(props : ButtonProps) {
    return (  
        <button type={props.type ?? "button"} onClick={props.onClick} className={`${VariantStyles[props.variant]} ${SizeStyles[props.size]} ${props.startIcon} `} >{props.startIcon} {props.title}{props.endIcon}</button>
    );
}

export default Button;
