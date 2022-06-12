import styles from './Car.module.css'

const Car = ({car}) => {
  return (
    <div className={styles.card1}>
        <h1>{car.name}</h1>
        <p>KM: {car.km}</p>
        <p>COR: {car.color}</p>
        <p>{car.valor}</p>
    </div>
  )
}

export default Car