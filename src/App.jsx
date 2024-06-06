import './App.css'
import Pages from './pages/pages'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useEffect, useState } from 'react';
import Loader from './components/loader';


function App() {
     const[loading,setLoading]=useState(false);

     useEffect(
    ()=>{
      setLoading(true);
      setTimeout(()=>{
        setLoading(false);
      },2000);  },[]
     )
  
  if(loading){
    return <Loader/>}
else{
  return (
    <>
  <Pages/>
      </>
  )
}
}
export default App
