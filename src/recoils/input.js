import { atom, selector } from 'recoil';

const inputValue = atom({
  key: 'name',
  default: {
    firstName: '주영',
    lastName: '이'
  }
});


const nameSelector = selector({
  key: 'username',
  get: ({get}) => {
    const user = get(inputValue);
    return user.lastName + ' ' + user.firstName;
  },
  set: ({ set }, name) => {
    const names = name.split(' ');
    set(inputValue, prevState => ({
      ...prevState,
      firstName: names[1] || '',
      lastName: names[0] || '',
    }));
  }
})


export {
  inputValue,
  nameSelector
}
