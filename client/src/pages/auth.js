import React, {useContext, useState} from 'react';
import './style/auth.css' 
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {REGISTRATION_ROUTE,LOGIN_ROUTE, MAIN_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userApi";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth=observer(()=> {
        const {user} = useContext(Context)
        const location = useLocation()
        const navigate = useNavigate()
        const isLogin = location.pathname === LOGIN_ROUTE
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')

        const click = async () => {
            try {
                let data;
                if (isLogin) {
                    data = await login(email, password);
                } else {
                    data = await registration(email, password);
                }
                user.setUser(user)
                user.setUserID(data.id)
                user.setIsAuth(true)
                navigate(MAIN_ROUTE)
            } catch (e) {
                alert(e.response.data.message)
            }
            
        }

        return (
            
            <div className="limiter">
            <div className="container-login100">
            <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
            <Form  >
            <span className="login100-form-title p-b-33">
                {isLogin?"Авторизация":"Регистрация"}
            </span>
            <div className="wrap-input100 validate-input" data-validate="Введите почту корректно: ex@abc.xyz">
                <input className="input100" type="text" name="email" placeholder="Почта" value={email} onChange={e => setEmail(e.target.value)}/>
                <span className="focus-input100-1"></span>
                <span className="focus-input100-2"></span>
            </div>
            <div className="wrap-input100 rs1 validate-input" data-validate="Введите пароль">
                <input className="input100" type="password" name="password" placeholder="Пароль" value={password}
                        onChange={e => setPassword(e.target.value)}/>
                <span className="focus-input100-1"></span>
                <span className="focus-input100-2"></span>
            </div>
            {!isLogin?
                <div className="wrap-input100 rs1 validate-input" data-validate="Подтвердите пароль">
                <input className="input100" type="password" name="pass2" placeholder="Подтвердите пароль" />
                <span className="focus-input100-1"></span>
                <span className="focus-input100-2"></span>
                 </div>
                 :""
            }
            

            <div className="container-login100-form-btn m-t-20">
                <Button className="login100-form-btn" onClick={click}>
                {isLogin?"Войти":"Регистрация"}
                    
                </Button>
            </div>
            {isLogin?
                <div>
                    <div className="text-center p-t-45 p-b-4">
                        <span className="txt1">
                            Забыли&nbsp;
                        </span>
                        <a href="#" className="txt2 hov1">
                            Логин / Пароль?
                        </a>
                    </div>
                    <div className="text-center">
                        <span className="txt1">
                            Хотите создать аккаунт?&nbsp;
                        </span>
                        <NavLink to={REGISTRATION_ROUTE} > Регистрация</NavLink>
                    </div>
                </div>
            :
            <div className="text-center p-t-45">
                <span className="txt1">
                Уже есть аккаунт?&nbsp;
                </span>
                <NavLink to={LOGIN_ROUTE}>Войти</NavLink>
            </div>
            }
            </Form>
            </div>
            </div>
            </div>
           
        )
    })

export default Auth;