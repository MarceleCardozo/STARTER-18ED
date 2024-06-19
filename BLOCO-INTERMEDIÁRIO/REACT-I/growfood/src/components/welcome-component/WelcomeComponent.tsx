import ButtonStyled from "../button/ButtonStyled";
import SearchBarStyled from "../search-bar/SearchBarStyled";
import DivWelcomeStyled from "./DivWelcomeStyle";
import H1Styled from "./H1Styled";

function WelcomeComponent() {
  return (
    <>
      <DivWelcomeStyled>
        <div style={{display: "flex", flexDirection: "column"}}>
          <H1Styled switchColor={false}>
            Welcome
            <H1Styled switchColor={true}>
              &ensp;to <br />
              The world of <br />
              Tasty & Fresh Food.
            </H1Styled>
          </H1Styled>
          <p style={{fontSize: "1.2rem"}}>
            Keep it easy with these simple but delicious recipes. <br /> From make-ahead lunches and midweek meals to <br /> fuss-free
            sides.
          </p>
          <div style={{paddingLeft: "30px", paddingTop: "30px"}}>
            <SearchBarStyled type="text" placeholder="Search, Burger" />
            <ButtonStyled>Search</ButtonStyled>
          </div>
        </div>
      </DivWelcomeStyled>
    </>
  );
}

export default WelcomeComponent;
