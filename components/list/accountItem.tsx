import React from 'react';
import data from '@components/data';
import styles from "@styles/List.module.scss";

interface Account {
    calculation: number,
    dateTime: string,
    description: string,
    id: string,
    targetId: any
}

const AccountItem : React.JSXElementConstructor<any> = () => {
    const users = Object.values(data.dbInstanceUserList);
    const accountDetails = Object.values(data.dbInstanceAccountList);

    return (
        <section className={styles.account}>
            <ul>
                {
                    accountDetails.map((item : Account) => {
                        const accountUser = users.find((v : any) => Number(v.id) === item.targetId);
                        const description = accountUser
                            ? `${accountUser.userName} ${item.description}`
                            : `${item.description}`;

                        return (
                            <li key={item.id}>
                                <p>{item.dateTime}</p>
                                <p>{description}</p>
                                <p>{item.calculation}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    );
};

export default AccountItem;