import React, { useEffect, useState } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([]);

  const updateComments = (newComment) => {
    setComments([...comments, newComment]);
  };

  const fetchComments = () => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + asin, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjE4ZjQwNTdmMzA0NjAwMWFlNTlmOTAiLCJpYXQiOjE3MTQzOTQ0NzQsImV4cCI6MTcxNTYwNDA3NH0.5tdYXsd0yCaS_3hdUhPAK_zcNk_XQelQHVfW8Tj0Ezs",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
      })
      .catch((error) => console.error("Error fetching comments:", error));
  };

  useEffect(() => {
    fetchComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [asin]);

  return (
    <>
      <AddComment asin={asin} updateComments={updateComments} />
      <CommentsList comments={comments} />
    </>
  );
};

export default CommentArea;
