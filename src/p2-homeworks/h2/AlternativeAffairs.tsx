import React from "react";
import {AffairType, FilterType} from "./HW2";
import Affair from "./Affair";
import styles from './Affairs.module.css'


type AlternateAffairsPropsType = {
    data: AffairType[]
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function AlternativeAffairs(props: AlternateAffairsPropsType) {
    // need to fix
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    )), setAll = () => {
        props.setFilter("all");
    }, setHigh = () => {
        props.setFilter("high");

    }, setMiddle = () => {
        props.setFilter("middle");
    }, setLow = () => {
        props.setFilter("low");

    };

    return (
        <div className={styles.outgoing}>
            <div className={styles.affairs.concat(' ', styles.alternateAffairs)}>
                <div className={styles.content}>
                    {mappedAffairs}
                </div>
                <div className={styles.buttons}>
                    <button className={styles.btn} onClick={setAll}>All</button>
                    <button className={styles.btn} onClick={setHigh}>High</button>
                    <button className={styles.btn} onClick={setMiddle}>Middle</button>
                    <button className={styles.btn} onClick={setLow}>Low</button>
                </div>
            </div>
        </div>
    );
}

export default AlternativeAffairs;
