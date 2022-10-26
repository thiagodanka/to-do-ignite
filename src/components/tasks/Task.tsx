import styles from './Task.module.css'
import trash from '../../assets/img/trash.svg'

export interface TaskProps {
    id: number
    isChecked: boolean,
    description: string,
}

export function Task({ id, description, isChecked }: TaskProps) {
    return (
        <div className={styles.container}>
            <input type="checkbox" checked={isChecked}/>
            <p>{description}</p>
            <img src={trash} alt="" />
        </div>
    )
}