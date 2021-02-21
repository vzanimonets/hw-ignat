import React, { ChangeEvent, KeyboardEvent } from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    { name, setNameCallback, addUser, error, totalUsers } // деструктуризация пропсов
) => {
    const inputClass = error.length ? s.error : ''; // need to fix with (?:)

    const onKeyPressAddUser = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            addUser();
        }
    }


    return (
        <div className={s.greetingsWrapper}>
            <input value={name} onChange={setNameCallback} className={inputClass} onKeyPress={onKeyPressAddUser} />
            <span className={s.message}>{error}</span>
            <button onClick={addUser}>add</button>
            <span>{totalUsers}</span>
        </div>
    );
}

export default Greeting;
