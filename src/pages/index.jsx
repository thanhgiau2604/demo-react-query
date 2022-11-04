import { useNavigate } from "react-router-dom";
import { postServices } from "../services/posts";

const Home = () => {
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
        {data.map((article) => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
      <a onClick={() => navigate("/contents")} href>
        Go to content
      </a>
    </div>
  );
};

export default Home;
