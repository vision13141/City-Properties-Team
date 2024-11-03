import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import OrgState from './Context/OrgState.jsx'
import app from '../Firebase.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <OrgState>
    <App />
  </OrgState>
)
