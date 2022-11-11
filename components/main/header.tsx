import React from 'react';
import styles from "@styles/Main.module.scss";

interface User {
    id: number,
    userImg: string,
    userName: string
}

const Header : React.JSXElementConstructor<any> = () => {
    const dummyUser : User = {
        id: 1,
        userImg: "https://avatars.githubusercontent.com/u/115357815?v=4",
        userName: "김현수"
    }

    return (
        <header className={styles.header}>
            <h3>{dummyUser.userName}</h3>
            <figure><img src={dummyUser.userImg} alt={dummyUser.userName}/></figure>
        </header>
    );
};

export default Header;