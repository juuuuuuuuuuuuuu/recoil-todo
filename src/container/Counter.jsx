import React from 'react';
import { useRecoilState } from 'recoil';
import counter from '../recoils/counter';

function Counter() {
  const [count, setCount] = useRecoilState(counter);

  const handleClick = (type) => {
    if (type === 'increase') {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      {count}
      <button onClick={() => handleClick('increase')}>증가</button>
      <button onClick={() => handleClick('decrease')}>감소</button>
      <button onClick={handleReset}>초기화</button>
    </div>
  );
}
export default Counter;
