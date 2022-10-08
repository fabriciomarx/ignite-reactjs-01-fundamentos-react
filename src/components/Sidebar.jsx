import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" />

            <div className={styles.profile}>
                <Avatar 
                    className={styles.avatar}
                    src='https://github.com/fabriciomarx.png' />
                <strong>Fabrício Marques</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#"> <PencilLine size={20}/> Editar seu perfil</a>
            </footer>
        </aside>
    );
    
}