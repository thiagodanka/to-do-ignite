import styles from './Header.module.css'
export function Header() {
    return (
        <header className={styles.header}>
            <img src='../../../public/vite.svg' alt="" />
            <p>to<span>do</span></p>
        </header>
    )
}