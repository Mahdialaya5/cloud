import './App.css';
import {useLoadScript} from "@react-google-maps/api"
import Map from './Map';


function App() {
  const {isloaded}= useLoadScript({
    googleMapsApiKey:process.env.googleMapsApiKey
  }) 

  if(!isloaded) return <div>loading...</div>
return <Map/>
}



export default App;
