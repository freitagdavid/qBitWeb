import "./App.css";
import AppBar from "./components/appbar";
import LeftColumn from "./components/leftColumn";
import RightColumn from "./components/rightColumn";
import { useStyletron } from "baseui";
import LoginModal from "./components/LoginModal";

function App() {
  const [css, theme] = useStyletron();

  return (
    <div className="App">
      <LoginModal />
      <div
        className={css({
          backgroundColor: theme.colors.backgroundPrimary,
          height: "100vh",
          width: "100vw",
          display: "grid",
          gridTemplateColumns:
            "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
          gridTemplateRows: "auto 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
        })}
      >
        <AppBar />
        <LeftColumn />
        <RightColumn />
        {/* <InfoPanel /> */}
        {/* <StatusBar /> */}
      </div>
    </div>
  );
}

export default App;
