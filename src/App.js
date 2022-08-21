import Cards from "./components/Cards"
import { Form } from "./components/Form"
import { useState,useEffect } from "react"

function App() {
  const [pics,setPics] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  const [query,setQuery] = useState('');

  useEffect(()=>{
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${query}&image_type=photo&order=popular&safesearch=true`)
      .then(res=>res.json())
      .then(data=> {
        setPics(data.hits);
        setIsLoading(false);
      })
      .catch(err=> console.log(err))
  },[query])

  return (
    <div className="container mx-auto">
      {isLoading && <h1 className="text-5xl text-center mx-auto mt-32">Loading...</h1>}
      <Form setQuery={setQuery} />
      <Cards isLoading={isLoading} pics={pics} />
    </div>
  );
}

export default App;
