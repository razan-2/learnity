import React, { useState } from 'react';
import Events from './components/Events.jsx';
import Presentation from './components/Presentation.jsx';

export const Playground = () => {
    return (  
        <div className=''>
            <Presentation />
            <Events />
        </div>
    );
}