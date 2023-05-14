import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import { Dashboard } from "./views/Dashboard/Dashboard";
import { SelectedWeatherLocation } from "./types/weatherDetailTypes";
import { useState } from "react";
import { Container } from "@mui/material";
import { SelectedWeatherLocationView } from "./views/SelectedWeatherLocationView/SelectedWeatherLocationView";

let theme = createTheme({ typography: { fontSize: 12 } });
theme = responsiveFontSizes(theme);

function App() {
  const [selectedLocation, setSelectedLocation] =
    useState<SelectedWeatherLocation>();
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm" sx={{ my: 2 }}>
        {selectedLocation ? (
          <SelectedWeatherLocationView
            onBack={() => setSelectedLocation(undefined)}
            selectedWeatherLocation={selectedLocation}
          />
        ) : (
          <Dashboard onClick={setSelectedLocation} />
        )}
      </Container>
    </ThemeProvider>
  );
}

export default App;
