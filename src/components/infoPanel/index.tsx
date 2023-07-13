import { styled } from "styled-components";
import tw from "tailwind-styled-components";

const Grid = styled.div`
  grid-area: infoDisplay;
`;

const Container = tw(Grid)`
    
`;

const InfoPanel = () => {
  return <Container>hello</Container>;
};

export default InfoPanel;
