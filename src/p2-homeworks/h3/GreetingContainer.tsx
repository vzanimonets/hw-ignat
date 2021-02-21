import React, { ChangeEvent, useState } from "react";
import Greeting from "./Greeting";
import { UserType } from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (newName: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const EMPTY_VALUE_ERROR_MESSAGE = 'User\'s name is empty'

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({ users, addUserCallback }) => { // деструктуризация пропсов
    const [name, setName] = useState<string>(""); // need to fix any
    const [error, setError] = useState<string>(""); // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setError('')
        setName(e.target.value); // need to fix
    };
    const addUser = () => {
        let _error = '';
        if (name.length) {
            alert(`Hello ${name}!`); // need to fix
            addUserCallback(name)
            setName('')
        } else {
            _error = EMPTY_VALUE_ERROR_MESSAGE
        }
        setError(_error)
    };

    const totalUsers = users.length; // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    );
}

export default GreetingContainer;
