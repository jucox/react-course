import styles from './AboutMe.module.css'

function AboutMe({name, age, city}) {
    return (
        <div className={styles.container}>
            <h1>Hello, {name}</h1>
            <p>You are {age} years old and you live in {city}.</p>
        </div>
    )
}

export default AboutMe