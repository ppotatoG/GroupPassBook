import React from 'react';
import Header from 'components/list/header';
import AccountItem from 'components/list/accountItem';

const List : React.JSXElementConstructor<any> = () => {
    return (
        <>
            <Header />
            <AccountItem />
        </>
    );
};

export default List;