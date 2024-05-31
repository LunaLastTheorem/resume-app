import styles from './Navigation.module.css'

function Navigation(){
    return (
        <>  
            <div className={styles.navigate}>
                <a href='#'>About</a>
                <a href='#'>See Work</a>
            </div>
        </>
    )
}

export default Navigation;

