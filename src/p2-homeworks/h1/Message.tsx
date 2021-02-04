import React from 'react'
import styles from './Message.module.css'

type  MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
    isIncoming?: boolean
}

function Message(props: MessagePropsType) {
    return (
        <div className={props.isIncoming ? styles.incoming : styles.outgoing}>
            <div className={styles.container}>
                <img src={props.avatar} alt={props.name} className={styles.avatar}/>
                <div className={styles.message}>
                    <span className={styles.name}>{props.name}</span>
                    <span className={styles.text}>{props.message}</span>
                    <span className={styles.time}>{props.time}</span>
                </div>
            </div>

        </div>
    )
}

export default Message
