import React from "react";
import moment from "moment";// moment
const Article = ({ title, snippet, date, length }) => {
  
  return (
    <article className="post">
      <h2>{title}</h2>
      <div className="post-info">
        <span>{moment(date).format('MMMM dddd Do, YYYY')}</span>
        <span>||</span>
        <span>Read Time: {length} min</span>
      </div>
      <p>{snippet}</p>
    </article>
  );
};

export default Article;
