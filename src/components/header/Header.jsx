import styles from './Header.module.css'
export default function Header () {
return(
    <header>
        <div className={styles.h_content}>
            <div className={styles.logo}>Logo</div>
            <ul className={styles.content_h_link}>
                <li className={styles.h_link}>Produtos</li>
                <li className={styles.h_link}>Quem Somos</li>
                <li className={styles.h_link}>Link3</li>
                <li className={styles.h_link}>Link4</li>
            </ul>
            <div className={styles.content_account}>
                <div>Login</div>
            </div>
        </div>
    </header>
)
}