import { useEffect, useState } from "react";
import Mainform from "./component/form";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import List from "./component/list";

function App() {
  const [data,setData] = useState([])

  const Newdata=(val)=>{
    setData([...data,val])
  }
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Mainform Newdata={Newdata}/>}></Route>
          <Route path='/list' element={<List data={data} />}></Route>
          <Route path='/edit/:id' element={<Mainform data={data} />}></Route>


        </Routes>
      </Router>
    </div>
  );
}

export default App;
