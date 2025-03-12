import React, { useState, useEffect } from 'react';
import styles from '../Styles/CreditCardForm.module.css';

const CreditCardForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardExp, setCardExp] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardCcv, setCardCcv] = useState('');

  // Errores
  const [errors, setErrors] = useState({
    cardNumber: '',
    cardExp: '',
    cardName: '',
    cardCcv: ''
  });

  // Validación del número de tarjeta
  const validateCardNumber = (number) => {
    const regex = /^[0-9]{16}$/; // Solo números y exactamente 16 dígitos
    if (!regex.test(number)) {
      return 'Card number must be 16 digits';
    }
    return '';
  };

  // Validación de la fecha de expiración
  const validateExpDate = (exp) => {
    const regex = /^(0[1-9]|1[0-2])\/\d{2}$/; // Formato MM/AA
    if (!regex.test(exp)) {
      return 'Expiration date must be in MM/YY format';
    }

    // Verificar que la tarjeta no haya expirado
    const [month, year] = exp.split('/');
    const expDate = new Date(`20${year}`, month - 1);
    const currentDate = new Date();
    if (expDate < currentDate) {
      return 'Card has expired';
    }

    return '';
  };

  // Validación del nombre del titular
  const validateCardName = (name) => {
    if (!name.trim()) {
      return 'Card holder name is required';
    }
    return '';
  };

  // Validación del CCV
  const validateCcv = (ccv) => {
    const regex = /^[0-9]{3}$/; // Solo 3 dígitos
    if (!regex.test(ccv)) {
      return 'CCV must be 3 digits';
    }
    return '';
  };

  // Manejo de cambios en los inputs
  const handleCardNumberChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setCardNumber(value);
  };

  const handleExpChange = (e) => {
    let value = e.target.value;
    if (value.length === 2) {
      value += '/';
    }
    setCardExp(value);
  };

  const handleCardNameChange = (e) => {
    setCardName(e.target.value);
  };

  const handleCcvChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setCardCcv(value);
  };

  // Validar cuando el formulario se envíe
  const handleSubmit = (e) => {
    e.preventDefault();

    const cardNumberError = validateCardNumber(cardNumber);
    const cardExpError = validateExpDate(cardExp);
    const cardNameError = validateCardName(cardName);
    const cardCcvError = validateCcv(cardCcv);

    // Verificar si hay errores
    if (cardNumberError || cardExpError || cardNameError || cardCcvError) {
      setErrors({
        cardNumber: cardNumberError,
        cardExp: cardExpError,
        cardName: cardNameError,
        cardCcv: cardCcvError
      });
    } else {
      setErrors({
        cardNumber: '',
        cardExp: '',
        cardName: '',
        cardCcv: ''
      });
      // Aquí se procesaría el envío del formulario
      console.log('Form submitted successfully');
    }
  };

  return (
    <div className={styles.box}>
      <div className={styles.mdl}>
        <div className={styles.circles}>
          <div className={`${styles.circle} ${styles.circle1}`}></div>
          <div className={`${styles.circle} ${styles.circle2}`}></div>
        </div>
        <h1 className={styles.title}>
          Please enter your credit card <br />details below
        </h1>

        <div className={styles.card}>
          <form onSubmit={handleSubmit}>
            <div className={styles.logo}>
              <svg
                width="48px"
                height="48px"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <title>Group</title>
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="Group" fill="#FFFFFF">
                    <circle id="Oval" cx="16" cy="16" r="16"></circle>
                    <circle id="Oval" cx="16" cy="48" r="16"></circle>
                    <circle id="Oval" cx="48" cy="16" r="16"></circle>
                    <circle id="Oval" cx="48" cy="48" r="16"></circle>
                  </g>
                </g>
              </svg>
            </div>
            <div className={styles.cardNumber}>
              <label>Card Number</label>
              <input
                className={styles.inputCard}
                id="card-number"
                placeholder="1234 1234 1234 1234"
                type="text"
                value={cardNumber}
                onChange={handleCardNumberChange}
                maxLength="19"
              />
              {errors.cardNumber && <span className={styles.error}>{errors.cardNumber}</span>}
              <span className={styles.underline}></span>
            </div>

            <div className={styles.group}>
              <div className={styles.cardName}>
                <label>Card Holder</label>
                <input
                  className={styles.inputCard}
                  id="card-name"
                  placeholder="ISRAEL ISRAELI"
                  type="text"
                  value={cardName}
                  onChange={handleCardNameChange}
                />
                {errors.cardName && <span className={styles.error}>{errors.cardName}</span>}
                <span className={styles.underline}></span>
              </div>

              <div className={styles.expirationDate}>
                <label>Exp. Date</label>
                <input
                  className={styles.inputCard}
                  id="card-exp"
                  placeholder="10/25"
                  type="text"
                  value={cardExp}
                  onChange={handleExpChange}
                  maxLength="5"
                />
                {errors.cardExp && <span className={styles.error}>{errors.cardExp}</span>}
                <span className={styles.underline}></span>
              </div>

              <div className={styles.ccv}>
                <label>CCV</label>
                <input
                  className={styles.inputCard}
                  id="card-ccv"
                  placeholder="123"
                  type="text"
                  value={cardCcv}
                  onChange={handleCcvChange}
                  maxLength="3"
                />
                {errors.cardCcv && <span className={styles.error}>{errors.cardCcv}</span>}
                <span className={styles.underline}></span>
              </div>
            </div>

            <button type="submit" className={styles.submitBtn}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreditCardForm;
