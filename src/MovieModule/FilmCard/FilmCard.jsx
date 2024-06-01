import styles from './FilmCard.module.css';

function FilmCard(props){
    return (
        <>  
            <div className={styles.filmCard}>
                <iframe src={props.link}/>
                {props.children ? props.children : <p>insert some text</p>}
            </div>
        </>
    );
}

FilmCard.defaultProps = {
    link: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=yXN4Xr14euHqLduG"
}

export default FilmCard;
