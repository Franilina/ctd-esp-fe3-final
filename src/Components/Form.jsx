import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: ""
  });

  const [errors, setErrors] = useState({
    fullNameError: "",
    emailError: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    let isValid = true;
    const newErrors = {};

    if (formData.fullName.length < 5) {
      newErrors.fullNameError = "Full name must be at least 5 characters long";
      isValid = false;
    }

    if (!formData.email.includes("@")) {
      newErrors.emailError = "Invalid email address";
      isValid = false;
    }

    if (isValid) {
      // Aquí podrías enviar el formulario o realizar otras acciones
      console.log("Form submitted:", formData);
      setFormData({ fullName: "", email: "" }); // Limpiar el formulario después de enviar
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullNameError && <span>{errors.fullNameError}</span>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.emailError && <span>{errors.emailError}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
