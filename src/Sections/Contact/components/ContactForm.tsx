import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import validateForm from "../utils/validateForm";
import styles from "./ContactForm.module.css";

interface FormData {
  name: string;
  phone_number: string;
  email: string;
  message: string;
}

const INITIAL_FORM = {
  name: "",
  phone_number: "",
  email: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const { name, phone_number, email, message } = formData;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValidForm = validateForm(formData, setErrors);

    if (!isValidForm) {
      return Object.values(errors).forEach((errorMessage) => {
        toast.error(errorMessage);
      });
    }

    toast.success("Formulario enviado correctamente!");
    setFormData(INITIAL_FORM);
  };

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          duration: 3000,
          style: {
            background: "#faf9f6",
            color: "#2c2c2c",
          },
        }}
      />
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <label htmlFor="name">
          Nombre
          <input
            type="text"
            value={name}
            name="name"
            id="name"
            placeholder="Nombre Apellido"
            onChange={handleInput}
          />
        </label>

        <label htmlFor="phone_number">
          Telefono
          <input
            type="tel"
            value={phone_number}
            name="phone_number"
            id="phone_number"
            placeholder="00000000"
            onChange={handleInput}
          />
        </label>

        <label htmlFor="email">
          E-mail
          <input
            type="email"
            value={email}
            name="email"
            id="email"
            placeholder="Nombre@dominio"
            onChange={handleInput}
          />
        </label>

        <label htmlFor="message">
          Mensaje
          <textarea
            name="message"
            value={message}
            id="message"
            placeholder="Mensaje"
            onChange={handleInput}
          ></textarea>
        </label>

        <button type="submit">Enviar</button>
      </form>
    </>
  );
}
