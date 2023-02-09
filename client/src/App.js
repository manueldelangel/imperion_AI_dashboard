import { CssBaseline, ThemeProvider } from "@mui/material";
import {createTheme} from "@mui/material/styles";
import { useMemo } from "react";
import {useSelector} from "react-redux"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import {themeSettings} from "theme"
import Dashboard from "scenes/dashboard"
import Layout from "scenes/layout"
import Table from "scenes/table"
import Bar from "scenes/chart";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to= "/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/Table" element={<Table />} />
              <Route path="/chart" element={<Bar />} />

              
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
