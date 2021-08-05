//index.js-> Module
import React from 'react'
import ReactDOM from 'react-dom'

//import external CSS
import './assets/css/IT_Services.css'

//import Bootstrap
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './../node_modules/bootstrap/dist/js/bootstrap.bundle'


//Route Components Module.....
import App from './App.js'

ReactDOM.render(<App />, document.getElementById('root'))
