import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import HomePage from './components/HomePage';
import ItemDetail from './components/ItemDetail';
import LoginForm from './components/LoginForm';
import Test from './components/Test';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/test" element={<Test />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/item/:id" element={<ItemDetail />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
