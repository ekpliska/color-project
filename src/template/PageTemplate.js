import React from 'react';
import { MainMenu } from '../MenuComponents/MainMenu';

const PageTemplate = ({ children }) => {
    return (
        <div className="page">
            <MainMenu />
            {children}
        </div>
    )
}

export default PageTemplate;