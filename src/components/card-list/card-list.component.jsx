import Card from '../card/card.component';
import './card-list.styles.css';

const CardList = () => {
    
  const { robots } = this.props;
  
  return (
    <div className='card-list'>
      {robots.map(robot => {
        const {name, email, id} = robot;
        
        return (
          <Card 
            robot = {robot}
          /> 
        )
      })}
    </div>
  );
}


export default CardList;