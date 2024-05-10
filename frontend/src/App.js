import React from 'react';
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import SignupBmsons from './components/SignupBmsons';

function App() {
  return(
    <>
    
    <BrowserRouter >
      <Routes>
      <Route path="/" element={<SignupBmsons/>}/>
       </Routes>
     </BrowserRouter>
     
    
    </>

  );
}

export default App;
