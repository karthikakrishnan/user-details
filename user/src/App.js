import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from './login'
import { UserDetails } from './user-details'

import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}>
          <Route path="/user" element={<UserDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);