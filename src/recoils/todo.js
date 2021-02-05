import { atom, selector } from 'recoil';

let id = 0;

export const todo = atom({
  key: 'todo/list',
  default: [],
});

export const todoListSelector = selector({
  key: 'todo/todolist',
  get: ({ get }) => {
    const list = get(todo);
    return list.filter(v => !v.done);
  },
  set: ({ set }, content) => {
    set(todo, prevState => ([
      ...prevState,
      { content, id: id++ },
    ]));
  }
});

export const doneListSelector = selector({
  key: 'todo/donelist',
  get: ({ get }) => list.filter(v => v.done),
});



