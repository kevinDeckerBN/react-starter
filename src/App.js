import React from 'react';
import styled from 'styled-components';

const AppBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const App = () => (
    <AppBody>
        <h1>React Starter</h1>
        <h2>Hello World</h2>
    </AppBody>
);

export default App;
