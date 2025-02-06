import CardComponent from "../cards/CardComponent";
import style from "./home.module.css";

const Home = () => {
  return (
    <div className={style.home_container}>
      <div>Main components</div>

      {}
      <CardComponent/>
    </div>
  );
};

export default Home;
