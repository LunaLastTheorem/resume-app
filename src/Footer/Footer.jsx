import styles from './Footer.module.css'

function Footer(){
    return (
        <>
            <footer className= {styles.foots}>
                <h1>"Carpe Diem"</h1>
                <hr></hr>
                <div>
                    <a href="#">hey</a>
                    <a href="#">hey</a>
                    <a href="#">hey</a>
                </div>
            </footer>
        </>
    );
}

export default Footer;