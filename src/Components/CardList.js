import Card from 'react-bootstrap/Card';



const CardList=({el})=>{
    return(
        <div>
    <Card style={{ width: '260px',height:"260px",margin:"10px" }} >
     
      <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Text>
          {el.username}
          <br/>
          {el.phone}
          <br/>
          {el.address.geo.lat}
        </Card.Text>
        
      </Card.Body>
    </Card>

        </div>
    )
}

export default CardList