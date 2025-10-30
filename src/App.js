import { createContext, useCallback, useRef, useState } from 'react';
import './App.css';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navigationbar from './Pages/Navigationbar';
import Footer from './Pages/Footer';


export const bookContext = createContext();
function App() {
  //mobile friendly click option
  const togglerRef = useRef(null);
  const handlemobileDropdownItemClick = useCallback(() => {
    if (window.innerWidth < 767 && togglerRef.current) {
      togglerRef.current.click();
    }
  }, [])

  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  const searchBooks = async (title) => {

    if (!title.trim()) {
      setError("Please enter a book title");
      setBooks([]);
      return;
    }
    setLoading(true);
    setError("");
    setBooks([]);
    try {
      const response = await fetch(`https://openlibrary.org/search.json?title=${encodeURIComponent(title)}`);
      const data = await response.json();
      console.log(query, "loading")

      if (data.docs && data.docs.length > 0) {
        setBooks(data.docs);
      }
      else {
        setError("No Books Found");
      }
    }
    catch (err) {
      setError("Error fetching books");
    }
    finally {
      setLoading(false);
    }
  };



  return (
    <bookContext.Provider value={{ togglerRef, handlemobileDropdownItemClick, searchBooks, query, setQuery, books, loading, error, setError }}>
      <Navigationbar />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </bookContext.Provider>
  );
}

export default App;
