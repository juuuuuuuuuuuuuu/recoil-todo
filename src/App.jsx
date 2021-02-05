import React, { Suspense } from 'react';
import Counter from './container/Counter';
import CounterSnapShot from './container/CounterSnapShot';
import Name from './container/Name';
import Post from './container/Post';
import RecoilStar from './container/RecoilStar';
import '../public/css/main.css';
import Todo from './container/Todo';

function App() {
  return (
    <>
      {/* <Suspense fallback={<div>로딩중</div>}>
        <Counter />
        <CounterSnapShot />
      </Suspense>
      <Name />
      <Suspense fallback={<div>로딩중</div>}>
        <RecoilStar />
      </Suspense>
      <Suspense fallback={<div>로딩중</div>}>
        <Post />
      </Suspense> */}

      <Todo />
    </>
  )
}
export default App;