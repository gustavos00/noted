import { BrowserRouter } from "react-router-dom";
import AppRouter from "./AppRouter";
import GlobalStyles from "./_common/theme/globalStyles";
import Theme from "./_common/theme/Theme";

function App() {
  return (
    <div className="App">
      <Theme>
        <GlobalStyles />
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </Theme>
    </div>
  );
}

export default App;
