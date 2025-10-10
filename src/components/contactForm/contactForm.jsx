import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import "./contactForm.scss";

// Схема валидации для полей
const validationSchema = Yup.object().shape({
  user_name: Yup.string().required("Введите имя"),
  user_email: Yup.string()
    .email("Введите корректный email")
    .required("Email обязателен"),
  message: Yup.string().required("Введите сообщение"),
});

const ContactForm = () => {
  const [status, setStatus] = useState("");
  const formRef = useRef(null);

  //Настройка useForm с Yup
  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    reset,
    clearErrors
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onBlur",
  }); 

  useEffect(() => {
    const handleClickOutside = (event) => {
      if(formRef.current && !formRef.current.contains(event.target)) {
        clearErrors();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [clearErrors]);
  
  // Функция отправки через EmailJS
  const sendEmail = (data) => {
    emailjs
      .send(
        "service_gugsloc",
        "template_iudi9bk",
        data,
        "UJkmuTvqyfm4XrL1M"
      )
      .then(
        () => {
          setStatus("Сообщение успешно отправлено!");
          reset();
          setTimeout(() => setStatus(""), 3000);
        },
        (error) => {
          console.log(error);
          setStatus("Ошибка при отправке. Попробуйте позже.");
        }
      );
  };

  return (
    <div className="contacts__form">
      <h2 className="form__title">Отправьте сообщение по e-mail</h2>
      <div className="divider"></div>
      <form ref={formRef} onSubmit={handleSubmit(sendEmail)}>
        <input
          name="user_name"
          type="text"
          placeholder="Ваше имя"
          {...register("user_name")}
          className={errors.user_name ? "error" : ""}
        />
        {errors.user_name && (
          <p className="form__error">{errors.user_name.message}</p>
        )}

        <input
          name="user_email"
          type="email"
          placeholder="Ваш email"
          {...register("user_email")}
          className={errors.user_email ? "error" : ""}
        />
        {errors.user_email && (
           <p className="form__error">{errors.user_email.message}</p>
        )}
        <textarea
          name="message"
          placeholder="Ваше сообщение"
          {...register("message")}
        />
        {errors.message && (
          <p className="form__error">{errors.message.message}</p>
        )}
        <button type="submit">Отправить</button>
      </form>
      {status && <p className="form__status">{status}</p>}
    </div>
  );
};

export default ContactForm;