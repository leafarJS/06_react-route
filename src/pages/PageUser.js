import { useParams } from "react-router-dom";
const PageUser = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h4>User: {id}</h4>
    </div>
  );
};

export default PageUser;
