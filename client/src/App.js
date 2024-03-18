
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterComponent from "./Register/RegisterComponets";
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
        </Routes>
      </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
