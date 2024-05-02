import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";

const BookList = ({ books }) => {
  const [selected, setSelected] = useState(false);

  const changeSelectedBook = (asin) => {
    setSelected(asin);
  };

  return (
    <>
      <Row>
        <Col md={9}>
          <Row className="g-2 mt-3">
            {books.map((book) => (
              <Col xs={12} md={4} key={book.asin}>
                <SingleBook book={book} selected={selected === book.asin} changeSelectedBook={changeSelectedBook} />
              </Col>
            ))}
          </Row>
        </Col>
        <Col md={3}>
          <CommentArea asin={selected} />
        </Col>
      </Row>
    </>
  );
};

export default BookList;
