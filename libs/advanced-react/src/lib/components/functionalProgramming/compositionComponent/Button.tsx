import { FC } from 'react'

type Size = 'small'|'large'

export interface ButtonProps {
    size: Size
    color?: string
    label: string
    style?: Record<string, string>
}

const Button:FC<ButtonProps> = ({ size, color, label, style, ...rest }) => {
    return <button type='button'  style={{
        fontSize: size === 'large' ? '18px' : '12px',
        backgroundColor: color || 'white',
        ...style
    }} {...rest}>{label}</button>
}


export const DangerButton:FC<ButtonProps> = (props) => {
    return <Button {...props} color='red' />
}

export const SmallButton:FC<Omit<ButtonProps, 'size'>> = (props) => {
    return <Button {...props} size='small' />
}

export default Button