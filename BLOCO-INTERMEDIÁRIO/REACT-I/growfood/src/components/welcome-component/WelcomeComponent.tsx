import DivWelcomeStyled from "./DivWelcomeStyle";
import H1Styled from "./H1Styled";

function WelcomeComponent() {
  return (
    <DivWelcomeStyled>
      <H1Styled switchColor={false}>
        Welcome
        <H1Styled switchColor={true}>
          &ensp;to <br />
          The world of <br />
          Tasty & Fresh Food.
        </H1Styled>
      </H1Styled>
    </DivWelcomeStyled>
  );
}

export default WelcomeComponent;
