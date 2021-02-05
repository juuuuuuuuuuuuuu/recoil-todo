import React from 'react';
import { useRecoilState } from 'recoil';
import { nameSelector } from '../recoils/input';

function Name() {
  const [name, setName] = useRecoilState(nameSelector);

  const handleChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  return (
    <div>
      fullname: {name}
      <input onChange={handleChange} />
    </div>
  );
}
export default Name;
