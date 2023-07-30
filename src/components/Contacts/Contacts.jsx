import React from 'react'
import { useForm } from "react-hook-form"

import '../app/App.scss'
import './Contacts.scss'

const Contacts = () => {

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
      } = useForm({ mode: "onBlur" });
    
      const postData = (data) => {
        console.log(data);
      };

  return (
    <section className='Contacts'>
        <div className="container">
            <div className="Contacts__wrapper">
                <div className="Contacts__wrapper-title title">Свяжитесь с нами</div>
                
                <div className="Contacts__wrapper-Linerform">
                    <form className='Contacts__wrapper-form' onSubmit={handleSubmit(postData)} >
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
                            <div className="inputbox isolate">
                                <input
                                {...register("message", {
                                    required: "Поле не заполненно!",
                                  })}
                                required={!isValid}
                                type="text"/>
                                <span>Ваше сообщение</span>
                                <i></i>
                                <div className="Form-error">
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