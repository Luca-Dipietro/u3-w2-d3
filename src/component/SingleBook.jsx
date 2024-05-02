import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const SingleBook = ({ book, selected, changeSelectedBook }) => {
  return (
    <>
      <Card className={selected ? "selected-card" : ""}>
        <Card.Img variant="top" src={book.img} onClick={() => changeSelectedBook(book.asin)} className="card-img" />
        <Card.Body className="card-body">
          <Card.Title className="card-title">{book.title}</Card.Title>
          <Card.Text className="card-category">Category: {book.category}</Card.Text>
          <Card.Text className="card-price">{book.price}$</Card.Text>
          <Button variant="primary" className="card-button">
            Buy It
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleBook;
