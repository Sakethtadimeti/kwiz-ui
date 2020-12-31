import "./App.css";
import { ThemeProvider } from "@emotion/react";
import { defaultTheme } from "./themes";
import Intro from "./features/intro/intro-component";
import { Button } from "rebass";

function App() {
  console.log(defaultTheme);
  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <Intro />
        {/* <Text fontSize={[3, 4, 5]} fontWeight="bold" color="primary"></Text> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
