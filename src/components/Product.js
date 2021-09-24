import { Card, Button } from "react-bootstrap";

const Product = ({ item }) => {
  const { fields, id } = item;
  const { name, image, company, price } = fields;
  return (
    <div className="col-sm-6 col-lg-3 mb-3">
      <Card>
        <Card.Img variant="top" src={image[0].thumbnails.large.url} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            <h4>{name}</h4>
            <p>Brand: {company}</p>
            <span>${price}</span>
          </Card.Text>
          <Button variant="primary">Buy Now</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
