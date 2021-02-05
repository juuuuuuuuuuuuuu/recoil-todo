import { selector } from 'recoil';

const recoilStar = selector({
  key: 'recoil/star',
  get: async() => {
    const response = await fetch('https://api.github.com/repos/facebookexperimental/Recoil');
    const json = await response.json();
    return json.stargazers_count;
  },
});

export default recoilStar;