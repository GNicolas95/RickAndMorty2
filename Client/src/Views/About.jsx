import styles from "./About.module.css"

function About() {
    return (
        <div className={styles.aboutContainer}>
            <h1 className={styles.aboutTitle}>
                Bienvenidos a mi primer app con React !!!</h1>
            <h1 className={styles.aboutTitle}>
            Mi nombre es Gerónimo Nicolás Almonte. Actualmente, me encuentro cursando la 
            carrera de Desarrollo FullStack en Henry. Esta aplicación es una pequeña muestra
            de algunas herramientas que fuimos adquiriendo en el bootcamp. 
            </h1> 
        </div>
    )
}

export default About;
