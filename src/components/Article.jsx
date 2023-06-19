import { useContext } from "react";
import { GlobalContext } from "../context";

const ArticleStatus = ({ isNew }) => {
  return isNew && <span>-- Baru !!!</span>;
};

function Article(props) {
  const user = useContext(GlobalContext);

  return (
    <>
      <h3>{props.title}</h3>
      <small>
        Date : {props.date}, tags: {props.tags.join(", ")}{" "}
        <ArticleStatus isNew={props.isNew} />
      </small>
      <div>
        <smal>Ditulis oleh {user.username}</smal>
      </div>
    </>
  );
}

export default Article;
