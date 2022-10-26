import styles from './Task.module.css'
import trash from '../../assets/img/trash.svg'


export function Task() {
    return (
        <div className={styles.container}>
           <input type="checkbox" />
           <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
           <img src={trash} alt="" />
        </div>
    )
}