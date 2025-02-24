import { BrowserRouter } from "react-router-dom";
import { StyleSheetManager, ThemeProvider } from "styled-components";

import AppRoutes from "routes/AppRoutes";
import DefaultStyles from "styles/default";
import { theme } from "themes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyleSheetManager>
        <BrowserRouter>
          <DefaultStyles />
          <AppRoutes />
        </BrowserRouter>
      </StyleSheetManager>
    </ThemeProvider>
  );
}

export default App;
