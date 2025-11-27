import './App.css'
import BookList from './components/List.jsx'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function About() {
  return <h2>About This App</h2>;
}

function App() {
  return (
      <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
