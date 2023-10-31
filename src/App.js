import './App.css';
import './dog.jpg'

function App() {
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={require('./dog.jpg')} alt="" className="w-full" />
      <div className="px-6 py-4">
        
      </div>
    </div>
  );
}

export default App;
