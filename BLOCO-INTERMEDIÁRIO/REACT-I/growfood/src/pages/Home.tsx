import PageDefault from "../components/PageDefault";
import FoodImage from "../components/food-image/FoodImage";
import WelcomeComponent from "../components/welcome-component/WelcomeComponent";

function Home() {
  return (
    <>
      <PageDefault>
        <WelcomeComponent/>
       <FoodImage/>
      </PageDefault>
    </>
  );
}

export default Home;
