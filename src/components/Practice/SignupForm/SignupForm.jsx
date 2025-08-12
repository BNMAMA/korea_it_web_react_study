import React, { useState } from 'react'

function SignupForm() {
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState({});
    const [isDisabled, setIsDisabled] = useState(true);
  return (
    <div>
        <div>
            <input type="email" />
        </div>
        <div>
            <input type="password" />
        </div>
    </div>
  )
}

export default SignupForm