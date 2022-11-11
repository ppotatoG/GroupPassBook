import React from 'react';
import styles from "@styles/Main.module.scss";

import data from '@components/data';

const Card = () => {

    const users = Object.values(data.dbInstanceUserList);
    const totalNum = Object.values(data.dbInstanceAccountList).reduce((a : number, c) => a += Number(c.calculation), 0);

    return (
        <div className={styles.card}>
            <h3>🎉 REACT STUDY GROUP</h3>
            <p className={styles.card__price}>{
                totalNum
                    .toString()
                    .replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,')
            }원</p>
            <ul className={styles.card__list}>
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
            <a className={styles.card__button} href="/list"></a>
        </div>
    );
};

export default Card;