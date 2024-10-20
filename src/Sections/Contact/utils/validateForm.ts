interface FormData {
  name: string;
  phone_number: string;
  email: string;
  message: string;
}

const validateName = (name: string) => name.trim().length > 5;
const validatePhoneNumber = (phone: string) => /^\d{11}$/.test(phone);
const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);
const validateMessage = (message: string) => message.trim().length > 0;

const validateForm = (
  { name, phone_number, email, message }: FormData,
  setErrors: React.Dispatch<React.SetStateAction<Partial<FormData>>>
) => {
  const newErrors: Partial<FormData> = {};

  if (!validateName(name))
    newErrors.name = "Nombre debe tener al menos 5 letras";

  if (!validatePhoneNumber(phone_number))
    newErrors.phone_number = "El telefono debe contener al menos 11 numeros";

  if (!validateEmail(email)) newErrors.email = "Email no valido";

  if (!validateMessage(message))
    newErrors.message = "Completa el campo mensaje!";

  if (!name.trim()) newErrors.name = "Ingresa un nombre";
  if (!phone_number.trim()) newErrors.phone_number = "Ingresa un numero";
  if (!email.trim()) newErrors.email = "Ingresa un email";

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};

export default validateForm;
