import styles from './Navigation.module.css'

function Navigation(){
    return (
        <>  
            <div className={styles.navigate}>
                <a href='#profile'>About</a>
                <a href='#projects'>See Work</a>
            </div>
        </>
    )
}

export default Navigation;

