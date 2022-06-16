import React,{useContext,  useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import './App.css'
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {check} from "./http/userApi";
import {Spinner} from "react-bootstrap";


const App= observer(()=> {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)
  
      useEffect(() => {
          check().then(data => {
              user.setUser(true)
              user.setUserID(data.id)
              user.setIsAuth(true)
          }).finally(() => setLoading(false))
      }, [])
  
      if (loading) {
          return (<div style={{width:'100%', display:"flex",justifyContent:"center",alignItems:'center',height:'100%'}}>
          <Spinner animation={"border"} variant={"primary"}/>
          </div>)
      }

  return (
   <BrowserRouter>
     <AppRouter />
    </BrowserRouter>
  );
})

export default App;
