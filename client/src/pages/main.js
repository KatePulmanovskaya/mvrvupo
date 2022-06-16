import React from 'react'
import NavBar from '../components/NavBar'
import './style/main.css' 
import { NavLink } from "react-router-dom";
import {LOGIN_ROUTE} from "../utils/consts";
import Ellipse from '../assets/Ellipse.png'
import Ellipse2 from '../assets/Ellipse 2.png'
import Main_img from '../assets/main_img.png'

const Main=()=> {
        return (
            
            <div>
                <div className="content">
                    <NavBar />
                    <section className="main">
                    <div className="left">
                        <p>Онлайн-ресурс</p>
                        <h1>Методика воспитательной работы в учреждениях профессионального образования</h1>
                        <NavLink to={LOGIN_ROUTE}>Начать подготовку</NavLink>
                        <footer>
                            <p>Руководитель разработки: <br/> Доцент кафедры информационных радиотехнологий , канд.пед.наук, доцент Парафиянович Т.А.
                            </p>
                            <p>Разработчик: Пульмановская Е.Д.</p>
                        </footer>
                    </div>
                    <div className="right">
                        <img src={Main_img}/>
                    </div>
                </section>
       
            </div>
            <div className="bg">
                <img src={Ellipse}/>
                <img src={Ellipse2}/>
            </div>
        
            </div>
        )
    }

export default Main;