import React from 'react';
import Icon from './Icon';
import './horizontbar.css'

function Iconbar(props) {
  return (
    <div>
      <Icon>
        <section>{props.oriental}</section>
      </Icon>
    </div>
  );
}
export default Iconbar;
