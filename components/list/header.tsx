import React from 'react';
import data from '@components/data';
import styles from "@styles/List.module.scss";

const Header : React.JSXElementConstructor<any> = () => {
    const users = Object.values(data.dbInstanceUserList);
    const accountDetails = Object.values(data.dbInstanceAccountList);

    const totalNum = accountDetails.reduce((a : number, c) => a += Number(c.calculation), 0);

    return (
        <section className={styles.header}>
            <b>{totalNum.toString().replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,')}원</b>
            <p>(1/n 정산{
                Math.floor(totalNum / users.length)
                    .toString()
                    .replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,')
            }원)</p>
            <ul className={styles.header__user_list}>
                {
                    users.map(v => {
                        return (
                            <li key={v.id}>
                                <figure>
                                    <img src={v.userImg} alt={v.userName}/>
                                </figure>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    );
};

export default Header;