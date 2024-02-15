import './card.styles.css';


const Card = ({robot}) => {
  
  return (
    <div 
    key= {robot.id}
    className='card-container'
  >
    <img 
      alt={`robot  ${robot.name}`}
      src={`https://robohash.org/${robot.id}?set=set3&size=180x180`} 
    />
    <h2>{robot.name}</h2>
    <p>{robot.email}</p>
  </div>
  )

}

export default Card;