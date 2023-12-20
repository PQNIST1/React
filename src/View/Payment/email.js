import React, { useState } from 'react';

const EmailValidator = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    validateEmail(newEmail);
  };

  const validateEmail = (value) => {
    // Regular expression for a simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Update the isValid state based on whether the email matches the regex
    setIsValid(emailRegex.test(value));
  };

  return (
    <div>
      <h6>Địa chỉ email</h6>
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Nhập email của bản"
      />
      {!isValid && <p style={{ color: 'red' }}>Invalid email address</p>}
    </div>
  );
};

export default EmailValidator;
