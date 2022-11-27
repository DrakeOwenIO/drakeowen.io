import {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';

function App() {

  const [articles, setArticles] = useState(null)

  useEffect(() => {
    const getArticles = async () => {
      const res = await axios.get("http://localhost:5001")
      setArticles(res.data)
    }
    getArticles()
  }, [])

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
