import DividerStyle from "../components/DividerStyled";
import PageDefault from "../components/PageDefault";
import FoodImage from "../components/food-image/FoodImage";
import WelcomeComponent from "../components/welcome-component/WelcomeComponent";

function Home() {
  return (
    <>
      <PageDefault>
        <DividerStyle>
          <WelcomeComponent />
          <FoodImage />
        </DividerStyle>
      </PageDefault>
    </>
  );
}

export default Home;
