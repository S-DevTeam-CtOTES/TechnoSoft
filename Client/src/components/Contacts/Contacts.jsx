import React from 'react'
import { useForm } from "react-hook-form"

import axios from 'axios'

import '../app/App.scss'
import './Contacts.scss'

const Contacts = () => {
   
    const token = '6496800838:AAGsJogTB1GKYYXCOAGMpOXu86P1o3yHqTM'
    const chat_id = '-1001884637203'

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid },
      } = useForm({ mode: "onBlur" });
    
    //   const output = 'Login:\n\n' + '<br />' + '\n' + this.state.login + "\n" + 'Email: \n' + this.state.email + '\n' + 'Password: ' + this.state.password;

      const onSubmit = async (data) => {
        console.log(data);
        try {
          await axios({
            url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&parse_mode=html&text=Name: ${data.Name}                                                                                                                                                                                  
            Email: ${data.email}                                                                                                                             
            Company: ${data.company}                                                                                                                             
            Web: ${data.web}                                                                                                                             
            Message: ${data.message}`,
            headers: {
              "Content-type": "application/json"
            },
            method: "GET",
            data: data
          }).then(({ data }) => {
            reset()
            return data;
          });
        } catch (e) {
          console.log("Sending error", e);
        }
    };

  

  return (
    <section className='Contacts'>
        <div className="container">
            <div className="Contacts__wrapper">
                <div className="Contacts__wrapper-title title">Свяжитесь с нами</div>
                
                <div className="Contacts__wrapper-Linerform">
                    <form className='Contacts__wrapper-form' onSubmit={handleSubmit(onSubmit)} >
                        <div className="Contacts__wrapper-form-grid">
                                <div className="inputbox">
                                    <input
                                    required={!isValid}
                                    {...register("Name", {
                                        required: "Заполните Имя!",
                                      })}
                                    type="text"/>
                                    <span>Полное имя</span>
                                    <i></i>
                                    <div className="Form-error">
                                        {errors?.Name && (
                                        <p>{errors?.Name?.message || "Ошибка!"}</p>
                                        )}
                                    </div>
                                </div>
                                
                                <div className="inputbox">
                                    <input
                                    {...register("email", {
                                        required: "Введите ваш email!",
                                      })}
                                    required={!isValid}
                                    type="text"/>
                                    <span>Адрес электронной почты</span>
                                    <i></i>
                                    <div className="Form-error">
                                        {errors?.email && (
                                        <p>{errors?.email?.message || "Ошибка!"}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="inputbox">
                                    <input
                                    required={!isValid}
                                    {...register("company", {
                                        required: "Заполните Имя!",
                                      })}
                                    type="text"/>
                                    <span>Компания</span>
                                    <i></i>
                                </div>
                                <div className="inputbox">
                                    <input
                                    required={!isValid}
                                    {...register("web", {
                                        required: "Заполните Имя!",
                                      })}
                                    type="text"/>
                                    <span>Адрес веб-сайта</span>
                                    <i></i>
                                </div>
                            <div className="inputbox isolate textarea">
                                <textarea
                                {...register("message", {
                                    required: "Поле не заполненно!",
                                  })}
                                required={!isValid}
                                type="text"/>
                                <span>Ваше сообщение</span>
                                <i></i>
                                <div className="Form-error-textarea">
                                    {errors?.message && (
                                    <p>{errors?.message?.message || "Ошибка!"}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        <button className="form__submit-btn  ui-btn" disabled={!isValid} type="submit">
                            <span>
                                Отправить
                            </span>
                        </button>

                    </form>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Contacts