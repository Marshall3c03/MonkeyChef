import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import WebRoutes from './routes/WebRoutes';
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Layout>
        <WebRoutes />
      </Layout>
    </BrowserRouter>
  );
}

export default App;