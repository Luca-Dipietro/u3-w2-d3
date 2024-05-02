import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const AddComment = ({ asin, updateComments }) => {
  const [comment, setComment] = useState({
    comment: "",
    rate: 1,
    elementId: asin,
  });

  const fetchComment = (e) => {
    e.preventDefault();
    fetch("https://striveschool-api.herokuapp.com/api/comments", {
      method: "POST",
      body: JSON.stringify({
        ...comment,
        elementId: asin,
      }),
      headers: {
        "Content-type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjE4ZjQwNTdmMzA0NjAwMWFlNTlmOTAiLCJpYXQiOjE3MTQzOTQ0NzQsImV4cCI6MTcxNTYwNDA3NH0.5tdYXsd0yCaS_3hdUhPAK_zcNk_XQelQHVfW8Tj0Ezs",
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("Recensione inviata!");
          updateComments(comment);
          setComment({
            comment: "",
            rate: 1,
            elementId: asin,
          });
        } else {
          throw new Error("Qualcosa è andato storto");
        }
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="my-3 text-center">
      <Form onSubmit={fetchComment}>
        <Form.Group className="mb-2">
          <Form.Label>Recensione</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci qui il testo"
            value={comment.comment}
            onChange={(e) =>
              setComment((prevComment) => ({
                ...prevComment,
                comment: e.target.value,
              }))
            }
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Valutazione</Form.Label>
          <Form.Control
            as="select"
            value={comment.rate}
            onChange={(e) =>
              setComment((prevComment) => ({
                ...prevComment,
                rate: e.target.value,
              }))
            }
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Invia
        </Button>
      </Form>
    </div>
  );
};

export default AddComment;
