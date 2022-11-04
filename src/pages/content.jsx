import { useNavigate } from "react-router-dom";
import { postServices } from "../services/posts";

const Content = () => {
  const navigate = useNavigate();
  const { data, error, isError, isLoading } = postServices.fetchingPost();

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Have an errors: {error.message}</span>;
  }

  return (
    <div>
      <ul>
        {data.map((article) => {
          const { id, title, author } = article;
          return <li key={article.id}>{`${id}-${title}-${author}`}</li>;
        })}
      </ul>
      <a onClick={() => navigate("/")} href>
        Back Home
      </a>
    </div>
  );
};

export default Content;
