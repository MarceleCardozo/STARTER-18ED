import H1Styled from "./H1Styled"

function WelcomeComponent(){
    return(
        <div style={{display: 'flex'}}>
            <H1Styled switchColor={false}>Welcome</H1Styled><H1Styled switchColor={true}>&ensp;to The world of Testy & Fresh Food.</H1Styled>
        </div>
    )
}

export default WelcomeComponent