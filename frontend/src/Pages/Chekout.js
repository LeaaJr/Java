import React, { useState } from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
  // Estado para los inputs
  const [formData, setFormData] = useState({
    username: "lucky.jesse",
    email: "jesse@example.com",
    firstName: "Lucky",
    lastName: "Jesse",
    address: "Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09",
    city: "New York",
    country: "United States",
    postalCode: "Postal Code",
    aboutMe: "A beautiful UI Kit and Admin for JavaScript & Tailwind CSS. It is Freeand Open Source."
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    country: "",
    postalCode: "",
    aboutMe: ""
  });

  // Función para manejar los cambios en los inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Validación de campos
  const validateForm = () => {
    let formErrors = { ...errors };

    // Validar el username
    formErrors.username = formData.username.trim() === "" ? "Username is required" : "";

    // Validar el email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    formErrors.email = !emailRegex.test(formData.email) ? "Please enter a valid email" : "";

    // Validar first name
    formErrors.firstName = formData.firstName.trim() === "" ? "First name is required" : "";

    // Validar last name
    formErrors.lastName = formData.lastName.trim() === "" ? "Last name is required" : "";

    // Validar address
    formErrors.address = formData.address.trim() === "" ? "Address is required" : "";

    // Validar city
    formErrors.city = formData.city.trim() === "" ? "City is required" : "";

    // Validar country
    formErrors.country = formData.country.trim() === "" ? "Country is required" : "";

    // Validar postal code
    formErrors.postalCode = formData.postalCode.trim() === "" ? "Postal code is required" : "";

    // Validar about me
    formErrors.aboutMe = formData.aboutMe.trim() === "" ? "About me is required" : "";

    // Establecer los errores
    setErrors(formErrors);

    // Retornar si no hay errores
    return Object.values(formErrors).every((error) => error === "");
  };

  // Manejo del envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validar el formulario
    if (validateForm()) {
      console.log("Form is valid and ready to be submitted", formData);
      // Aquí iría el código para enviar el formulario, por ejemplo, hacer una solicitud a una API.
    }
  };

  return (
    <>
      <section className="py-16 bg-transparent">
        <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-900 border-0">
            <div className="rounded-t bg-gray-800 mb-0 px-6 py-6">
              <div className="text-center flex justify-between">
                <h6 className="text-white text-xl font-bold">My account</h6>
                <button className="bg-pink-600 text-white active:bg-pink-700 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
                  Settings
                </button>
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form onSubmit={handleSubmit}>
                <h6 className="text-gray-400 text-sm mt-3 mb-6 font-bold uppercase">User Information</h6>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-gray-300 text-xs font-bold mb-2" htmlFor="username">
                        Username
                      </label>
                      <input
                        type="text"
                        id="username"
                        name="username"
                        className="border-0 px-3 py-3 placeholder-gray-500 text-white bg-gray-700 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={formData.username}
                        onChange={handleInputChange}
                      />
                      {errors.username && <span className="text-red-500 text-xs">{errors.username}</span>}
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-gray-300 text-xs font-bold mb-2" htmlFor="email">
                        Email address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="border-0 px-3 py-3 placeholder-gray-500 text-white bg-gray-700 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                      {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-gray-300 text-xs font-bold mb-2" htmlFor="firstName">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="border-0 px-3 py-3 placeholder-gray-500 text-white bg-gray-700 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={formData.firstName}
                        onChange={handleInputChange}
                      />
                      {errors.firstName && <span className="text-red-500 text-xs">{errors.firstName}</span>}
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-gray-300 text-xs font-bold mb-2" htmlFor="lastName">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="border-0 px-3 py-3 placeholder-gray-500 text-white bg-gray-700 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={formData.lastName}
                        onChange={handleInputChange}
                      />
                      {errors.lastName && <span className="text-red-500 text-xs">{errors.lastName}</span>}
                    </div>
                  </div>
                </div>

                <hr className="mt-6 border-b-1 border-gray-600" />

                <h6 className="text-gray-400 text-sm mt-3 mb-6 font-bold uppercase">Contact Information</h6>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-gray-300 text-xs font-bold mb-2" htmlFor="address">
                        Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        className="border-0 px-3 py-3 placeholder-gray-500 text-white bg-gray-700 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={formData.address}
                        onChange={handleInputChange}
                      />
                      {errors.address && <span className="text-red-500 text-xs">{errors.address}</span>}
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-gray-300 text-xs font-bold mb-2" htmlFor="city">
                        City
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        className="border-0 px-3 py-3 placeholder-gray-500 text-white bg-gray-700 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={formData.city}
                        onChange={handleInputChange}
                      />
                      {errors.city && <span className="text-red-500 text-xs">{errors.city}</span>}
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-gray-300 text-xs font-bold mb-2" htmlFor="country">
                        Country
                      </label>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        className="border-0 px-3 py-3 placeholder-gray-500 text-white bg-gray-700 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={formData.country}
                        onChange={handleInputChange}
                      />
                      {errors.country && <span className="text-red-500 text-xs">{errors.country}</span>}
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-gray-300 text-xs font-bold mb-2" htmlFor="postalCode">
                        Postal Code
                      </label>
                      <input
                        type="text"
                        id="postalCode"
                        name="postalCode"
                        className="border-0 px-3 py-3 placeholder-gray-500 text-white bg-gray-700 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                      />
                      {errors.postalCode && <span className="text-red-500 text-xs">{errors.postalCode}</span>}
                    </div>
                  </div>
                </div>

                <hr className="mt-6 border-b-1 border-gray-600" />

                <h6 className="text-gray-400 text-sm mt-3 mb-6 font-bold uppercase">About Me</h6>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-gray-300 text-xs font-bold mb-2" htmlFor="aboutMe">
                        About me
                      </label>
                      <textarea
                        id="aboutMe"
                        name="aboutMe"
                        className="border-0 px-3 py-3 placeholder-gray-500 text-white bg-gray-700 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        rows="4"
                        value={formData.aboutMe}
                        onChange={handleInputChange}
                      ></textarea>
                      {errors.aboutMe && <span className="text-red-500 text-xs">{errors.aboutMe}</span>}
                    </div>
                  </div>
                </div>
              <Link to="/CreditCardForm">
                <button className="bg-green-600 text-white active:bg-green-700 font-bold uppercase text-xs px-6 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none w-full lg:w-auto ease-linear transition-all duration-150" type="submit">
                  Pay
                </button>
              </Link>
              </form>
            </div>
          </div>

          <footer className="relative pt-8 pb-6 mt-2">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap items-center md:justify-between justify-center">
                <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                  <div className="text-sm text-gray-500 font-semibold py-1">
                    Made with <a href="https://www.creative-tim.com/product/notus-js" className="text-gray-500 hover:text-gray-300" target="_blank" rel="noopener noreferrer">Notus JS</a> by <a href="https://www.creative-tim.com" className="text-gray-500 hover:text-gray-300" target="_blank" rel="noopener noreferrer">Creative Tim</a>.
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </section>
    </>
  );
};

export default Checkout;
