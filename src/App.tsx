import { BrowserRouter } from "react-router-dom";
import { StyleSheetManager, ThemeProvider } from "styled-components";
import { QueryClientProvider } from "@tanstack/react-query";

import { AppProviders } from "contexts";
import { theme } from "themes";
import AppRoutes from "routes/AppRoutes";
import DefaultStyles from "styles/default";
import { queryClient } from "services/dws-api-react-query/configs/queryClient";

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <StyleSheetManager>
            <DefaultStyles />
            <AppProviders>
              <AppRoutes />
            </AppProviders>
          </StyleSheetManager>
        </ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
