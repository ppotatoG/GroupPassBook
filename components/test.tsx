import React, {useEffect, useState} from "react";

import { app, database } from '../firebaseConfig';
import { collection, addDoc, getDocs } from 'firebase/firestore';

const Test : React.FC  = () => {
    const dbInstanceUserList = collection(database, 'userList');
    const dbInstanceAccountList = collection(database, 'accountList');

    let getUserList : any[] = [];
    let getAccountList : any[] = [];

    const getListAll = async () => {

        await getDocs(dbInstanceUserList).then((data) => {
            console.log(data.docs)
            getUserList = data.docs.map((item) => {
                return { ...item.data(), id: item.id };
            });
        });

        await getDocs(dbInstanceAccountList).then((data) => {
            console.log(data.docs)
            getAccountList = data.docs.map((item) => {
                return { ...item.data(), id: item.id };
            });
        });

    };

    useEffect(() => {
        getListAll();
        // console.log(getUserList)
        // console.log(getAccountList)
    }, [getUserList, getAccountList]);

    return (
        <h2>test</h2>
    );
};

export default Test;