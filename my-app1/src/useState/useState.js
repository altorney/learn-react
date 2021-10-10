import React from 'react';
import { useForm } from './useForm';

const UseHookEg = () => {
  const [values, handleChange] = useForm({ email: '', password: '' });

  return (
    <div>
      <div>
        <input name="email" value={values.email} onChange={handleChange} />
      </div>
      <div>
        <input name="password" type="password" value={values.password} onChange={handleChange} />
      </div>
      email = {values.email}
      <br />
      password = {values.password}
    </div>
  );
};

export default UseHookEg;
