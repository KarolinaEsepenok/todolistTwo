import React from 'react';
type PropsHeaderType = {
    title: string

}
const Header = (props:PropsHeaderType) => {
    return (
        <h3>{props.title}</h3>
    );
};

export default Header;