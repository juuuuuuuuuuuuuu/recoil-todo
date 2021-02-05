import React from 'react';
import { useRecoilValue } from 'recoil';
import recoilStar from '../recoils/star';

function RecoilStar() {
  const star = useRecoilValue(recoilStar);

  return (
    <div>
      star: {star}
    </div>
  );
}
export default RecoilStar;
