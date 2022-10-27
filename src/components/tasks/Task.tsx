import styles from './Task.module.css'
import trash from '../../assets/img/trash.svg'


interface TaskProps extends React.HTMLAttributes<HTMLButtonElement> {
    Id: number,
    isChecked: boolean,
    description: string,
    setChecked: () => void,
}

export function Task({ id, description, isChecked, setChecked, ...props }: TaskProps) {
    return (
        <div className={styles.container}>
            <input type="checkbox" checked={isChecked} />
            <label onClick={setChecked}></label  >
            <p className={isChecked ? styles.isChecked : ''}>{description}</p>

            <button type='button' {...props} >
                <img src={trash} alt="" />
            </button>

        </div >
    )
}