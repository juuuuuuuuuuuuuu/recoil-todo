import { atom } from 'recoil';

const counter = atom({
  key:' count',
  // default: 0,
  default: new Promise((resolve) => {
    setTimeout(() => {
       resolve(0);
    }, 3000)
  })
})

export default counter;