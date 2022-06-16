import React, {useContext}  from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import {authRoutes, publicRoutes} from "../routes";
import {MAIN_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const AppRouter=()=> {
    const {user} = useContext(Context)
    
    return (
      <Routes>
            {user.isAuth && authRoutes.map(({path, Element}) =>
                <Route key={path} path={path} element={<Element />} />
            )}
            {publicRoutes.map(({path, Element}) =>
                <Route key={path} path={path} element={<Element />} />
            )}
            <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );
  }
  
  export default AppRouter;
  