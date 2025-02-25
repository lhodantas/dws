import { BrowserRouter } from "react-router-dom";
import { StyleSheetManager, ThemeProvider } from "styled-components";
import { QueryClientProvider } from "@tanstack/react-query";

import AppRoutes from "routes/AppRoutes";
import DefaultStyles from "styles/default";
import { theme } from "themes";
import { queryClient } from "services/dws-api-react-query/configs/queryClient";

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <StyleSheetManager>
            <DefaultStyles />
            <AppRoutes />
          </StyleSheetManager>
        </ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
