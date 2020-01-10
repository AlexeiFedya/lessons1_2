import React from 'react';

const Icon = () => { 
    return ( 
    <div className="icon-bar">
        <a className="active" href="icon"><i className="fa fa-home"></i></a>
        <a href="icon"><i className="fa fa-search"></i></a>
        <a href="icon"><i className="fa fa-envelope"></i></a>
        <a href="icon"><i className="fa fa-globe"></i></a>
        <a href="icon"><i className="fa fa-trash"></i></a>
    </div>
    );
}
export default Icon;