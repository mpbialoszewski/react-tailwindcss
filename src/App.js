import './App.css';
import './dog.jpg'
import React, { useState, useEffect} from 'react';


function App() {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(()=>{
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXELBAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
    .then(res=>res.json())
    .then(data => console.log(data))
    .catch(err=> console.log(err))
  },[]);


  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={require('./dog.jpg')} alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-green-500">Niutek🐶</div> 

     <ul>
      <li>
        <strong>🖥️ Views:</strong>4000
      </li>
      <li>
        <strong>🌐 Downloads:</strong>300
      </li>
      <li>
        <strong>❤️ Likes:</strong>222
      </li>
     </ul>
    </div>
     <div className="px-6 py-4 ">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
        chiuhuaha
      </span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
        animal
      </span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
        cute
      </span>
     </div>
    </div>

  );
}

export default App;
