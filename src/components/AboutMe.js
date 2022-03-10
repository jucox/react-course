import styles from './AboutMe.module.css'
import PropTypes from 'prop-types'

function AboutMe({name, age, city}) {
    return (
        <div className={styles.container}>
            <h1>Hello, {name}</h1>
            <p>You are {age} years old and you live in {city}.</p>
        </div>
    )
}

AboutMe.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    city: PropTypes.string,
}

AboutMe.defaultProps = {
    name: 'Faltou o nome',
}

export default AboutMe