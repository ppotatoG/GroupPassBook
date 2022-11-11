import React from 'react';

import Header from '@components/main/header';
import Card from "@components/main/Card";

const Main : React.JSXElementConstructor<any> = () => {
    return (
        <section>
            <Header />
            <Card />
        </section>
    );
};

export default Main;