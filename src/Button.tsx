import React from 'react';
export type ButtonPropsType={
    titleBtn: string

}
const Button = (props:ButtonPropsType) => {

    return (
        <button >{props.titleBtn}</button>
    );
};

export default Button;