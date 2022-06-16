import React, {useContext}  from 'react';
import {Context} from "../index";
import './style/NavBar.css'
import './style/util.css'
import { NavLink , useLocation} from "react-router-dom";
import {MAIN_ROUTE, THEORY_ROUTE, PRACTICE_ROUTE, TESTS_ROUTE, LOGIN_ROUTE, STATISTICS_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const {study} = useContext(Context)
    const location = useLocation()
    const isMain = location.pathname === MAIN_ROUTE
    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }
    return (
    <div className="content">
        <header>
            {isMain?
                <div className="left">
                <NavLink to={THEORY_ROUTE} >Теоретический блок</NavLink>
                <NavLink to={PRACTICE_ROUTE}>Практический блок</NavLink>
                <NavLink to={TESTS_ROUTE}>Контроль знаний</NavLink>
            </div>
            :
            <div >
                <NavLink to={THEORY_ROUTE} onClick={()=>study.setSelectedTypes(study.types[1])}>Теоретический блок</NavLink>
                <NavLink to={PRACTICE_ROUTE} onClick={()=>study.setSelectedTypes(study.types[2])}>Практический блок</NavLink>
                <NavLink to={TESTS_ROUTE}>Контроль знаний</NavLink>
            </div>
            
            }
            
                {user.isAuth?
                    <div className="right">
                        <NavLink to={STATISTICS_ROUTE}>Статистика</NavLink>
                        <NavLink to={MAIN_ROUTE} onClick={() => logOut()}>Выйти</NavLink>
                    </div>
                :<div className="right">
                    <NavLink to={LOGIN_ROUTE} >Войти</NavLink>
                    </div>
                }

        </header>
    </div>
    )
})


export default NavBar
