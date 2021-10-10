import React, { useEffect } from 'react';

import { useForm } from '../useState/useForm';

const UseHookEg = () => {
  const [values, handleChange] = useForm({ email: '', password: '' });

  useEffect(() => {
    console.log("i've been rendered only when password is changed because of the array at the end of the useEffect function. It does a shallow render comparison of the values");

    return () => {
      console.log(' this is a clean up function the runs on component unmount'); // this is good for removing events listeners that have been added on the load of the component
    };
  }, [values.password]);
  //if the [] above is empty then the useEffect will only run once on component load

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
