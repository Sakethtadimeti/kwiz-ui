import { ThemeProvider } from "@emotion/react";
import { defaultTheme } from "./themes";
import AppRouter from "./router";

function App() {
  console.log(defaultTheme);
  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <AppRouter />
      </ThemeProvider>
    </div>
  );
}

export default App;
