import styles from './Task.module.css'
import trash from '../../assets/img/trash.svg'
import { AllHTMLAttributes, ButtonHTMLAttributes } from 'react'

interface TaskProps extends React.HTMLAttributes<HTMLButtonElement> {
    Id: number,
    isChecked: boolean,
    description: string,
}

export function Task({ id, description, isChecked, ...props }: TaskProps) {
    return (
        <div className={styles.container}>
            <input type="checkbox" checked={isChecked} />
            <p>{description}</p>

            <button type='button' {...props} >
                <img src={trash} alt="" />
            </button>

        </div>
    )
}