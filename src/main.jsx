import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./App.jsx"

createRoot(document.getElementById('root')).render(
    <App /> // this represent calling to the function that will returns the html code
)

// This is the React syntax to make the frontend-application (interanlly all the html code that components provides is getting injected into the index.html file "see the index.html we have id="root" element and added this jsx file using script")