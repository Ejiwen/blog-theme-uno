import React from 'react';
import { jsx, Styled, Heading } from 'theme-ui';

const Layout = ({children}) => (
    <div>
    <Heading> TEST </Heading>
    <Styled.h1> Ejiwen blog ...</Styled.h1>
    <div> {children} </div>
    </div>
)

export default Layout;