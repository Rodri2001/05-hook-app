import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { SimpleForm } from './02-useState/SimpleForm'
//import { HooksApp } from './HooksApp'
//import CounterWithCustomHook from './01-useState/CounterWithCustomHook'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SimpleForm />
  </React.StrictMode>,
)
