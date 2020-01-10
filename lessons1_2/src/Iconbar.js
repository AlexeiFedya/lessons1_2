import React from 'react';
import Icon from './Icon';
import './bar.css'

function Iconbar({orientation}) {
  return !orientation || orientation === 'horizontal'
  ?  <div className='horizontal'>
      <Icon />
    </div>
  : <Icon />
}

export default Iconbar;
