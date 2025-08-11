import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from "react-router";
import { Layout } from './Layout'

import './index.css'


const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
)
