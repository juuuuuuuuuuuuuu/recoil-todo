import { selector, selectorFamily, noWait } from 'recoil';

const rand = selector({
  key: 'rand',
  get: () => new Promise((resolve) => {
    setTimeout(() => {
      resolve(Math.random());
    }, 3000);
  })
});


const postList = selectorFamily({
  key: 'post/list',
  get: (page) => async ({get}) => {
    if (!page) { return; }

    const randomNumLoadable = get(noWait(rand));
    const response = await fetch(`https://api.github.com/repos/${page}`);
    const json = await response.json();

    if (randomNumLoadable.state === 'hasValue') {
      return json.stargazers_count + ' ' + randomNumLoadable.contents;
    }

    return json.stargazers_count + '...';
  },
})

export default postList;