import styles from './Bike.module.css'
//IMPRIMINDO OS BAGULHO
const Bike = ({bike}) => {
  return (
    <div className={styles.card2}> 
        <h1>{bike.name}</h1>
        <p>Nome: {bike.name}</p>
        <p>COR: {bike.color}</p>
        <p>NOVA: {bike.new}</p>
        <p>ALUGUEL: {bike.rent}</p>
    </div>
  )
}

export default Bike