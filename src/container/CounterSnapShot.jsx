import React, { useRef, useState } from 'react';
import { useRecoilCallback } from 'recoil';
import counter from '../recoils/counter';


function CounterSnapShot() {
  // const list = useRef([]);
  const [list, setList] = useState([]);
  const update = useRecoilCallback(({snapshot}) => async () => {
      const countValue = await snapshot.getPromise(counter);
      console.log('count', countValue)
      // list.current = [...list.current, snapshot];
      setList(prev => [...prev, snapshot]);
      // console.log(list.current)
  });

  return (
    <div>
      {/* <p>Snapshot count: {list.current.length}</p> */}
      <p>Snapshot count: {list.length}</p>
      <button onClick={update}>현재 스냅샷 보관</button>
    </div>
  );
}
export default CounterSnapShot;
