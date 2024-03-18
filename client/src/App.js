
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterComponent from "./Register/RegisterComponets";
import LoginComponent from "./Login/LoginComponets";
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';


const queryClient = new QueryClient();

function App() {
  return (
    <div>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="register" element={<RegisterComponent/>} />
          <Route path="login" element={<LoginComponent/>} />
        </Routes>
      </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
