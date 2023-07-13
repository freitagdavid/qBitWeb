import { styled } from "styled-components";
import tw from "tailwind-styled-components";

const Grid = styled.div`
  grid-area: statusBar;
`;

const Container = tw(Grid)`
    
`;

const StatusBar = () => {
  const dhtNum = 0;
  return (
    <Container>
      <div>{`DHT: ${dhtNum} nodes`}</div>
    </Container>
  );
};

export default StatusBar;
