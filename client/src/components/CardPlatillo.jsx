import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardPlatillo({ platillos, editarPlatillo, eliminarPlatillo }) {
  return (
    <div className="cards-container">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous"></link>

      {/* Map over the platillos and render a Card for each */}
      {platillos.map((platillo) => (
        <Card style={{ width: '18rem' }} key={platillo.id}>
          {/* Use actual image source or omit if not needed */}
          <Card.Img variant="top" src="../img/Food_in_Israel.jpg" />
          <Card.Body>
            <Card.Title>{platillo.nombre}</Card.Title>
            <Card.Text>{platillo.descripcion}</Card.Text>
            <Card.Text>Precio: {platillo.precio}$</Card.Text>
            <Button variant="primary">Comprar</Button>
            <Button onClick={() => editarPlatillo(platillo)}>Editar</Button>
            <Button onClick={() => eliminarPlatillo(platillo.id)}>Eliminar</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default CardPlatillo;
