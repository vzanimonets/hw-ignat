import React from "react";
import { AffairType } from "./HW2";
import styles from './Affairs.module.css'


type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = (_id: number) => {
        props.deleteAffairCallback(_id)
    };// need to fix

    return (
        <div className={styles.row}>
            <span className={styles.col}>{props.affair._id}</span>
            <span className={styles.col}>{props.affair.name}</span>
            <span className={styles.col}>{props.affair.priority}</span>
            <button className={`${styles.btn} ${styles.col}`} onClick={() => deleteCallback(props.affair._id)}>⊗</button>
        </div>
    );
}

export default Affair;
