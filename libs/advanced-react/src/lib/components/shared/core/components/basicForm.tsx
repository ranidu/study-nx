import { FC } from 'react'

export interface BasicForm {
    firstName: string,
    lastName: string,
    email: string
}

const BasicForm:FC<BasicForm> = ({ firstName, lastName, email }) => {
    return (<div>
        <input type='text' value={firstName} />
        <input type='text' value={lastName} />
        <input type='text' value={email} />
    </div>)
}

export default BasicForm