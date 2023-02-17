import Televisão from "./Televisão";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
      <Televisão marca="IFTV" chMin={1} chMax={20}/>    
      <Televisão marca="AppleTV" chMin={2} chMax={30}/>
    </div>    
  );
}

export default App;
