import NavBar from "./ui/NavBar/NavBar";
import Catalog from "./pages/catalog/Catalog";

import { CircularProgress } from "@mui/material";
import "./App.css";

import { ThemeProvider } from "@mui/material";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { theme } from "./MUI/theme";

import AppLayout from "./ui/AppLayout";

import { Suspense } from "react";
import { Preview } from "@mui/icons-material";
import SignInForm from "./features/form/SignInForm";
import BookDetails from "./features/loadBook/BookDetails";
import Cart from "./features/cart/Cart";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Suspense fallback={<CircularProgress />}>
          <NavBar />
          <Routes>
            <Route path="/" element={<AppLayout />} />
            <Route element={<Preview />} />
            <Route path="catalog" element={<Catalog />}></Route>
            <Route path="catalog/:id" element={<BookDetails />} />
            <Route path="form" element={<SignInForm />} />
            <Route path="cart" element={<Cart />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
