// src/components/PostDetails.js
import React, { useState } from "react";

const PostDetails = ({ match }) => {
  const postId = match.params.id;

  const postDetails = {
    id: postId,
    title: `Blog Post ${postId}`,
    content: `This is the content of Blog Post ${postId}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    datetime: new Date().toLocaleString(),
    comments: [
      { id: 1, user: "User1", text: "Great post!" },
      { id: 2, user: "User2", text: "I enjoyed reading this." },
    ],
  };

  const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = (e) => {
    e.preventDefault();

    const updatedComments = [
      ...postDetails.comments,
      { id: postDetails.comments.length + 1, user: "Current User", text: newComment },
    ];

    postDetails.comments = updatedComments;
    setNewComment("");
  };

  return (
    <div>
      <h2>{postDetails.title}</h2>
      <p>Post ID: {postDetails.id}</p>
      <p>{postDetails.content}</p>
      <p>Posted on {postDetails.datetime}</p>

      <h3>Comments</h3>
      <ul>
        {postDetails.comments.map((comment) => (
          <li key={comment.id}>
            <strong>{comment.user}:</strong> {comment.text}
          </li>
        ))}
      </ul>

      <form onSubmit={handleCommentSubmit}>
        <label>
          Add a Comment:
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            rows={4}
          />
        </label>
        <br />
        <button type="submit">Submit Comment</button>
      </form>
    </div>
  );
};

export default PostDetails;
