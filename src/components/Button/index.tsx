import React, { ButtonHTMLAttributes } from 'react';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
}

const Button = ({ text, ...rest } : IButtonProps) => {
    return(
        <button {...rest}>{text}</button>
    )
}

export default React.memo(Button);