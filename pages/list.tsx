import React from 'react';
import List from 'components/list';

import styles from "@styles/List.module.scss";

const App = () => {
    return (
        <div className={styles.list}>
            <List />
        </div>
    );
};

export default App;