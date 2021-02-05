import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import postList from '../recoils/post';

function Post() {
  const [project, setProject] = useState('');
  const starCount = useRecoilValue(postList(project));
  const changeProject = ({target}) => setProject(target.value);

  return (
    <div>
        <select onChange={changeProject}>
        <option value="">Select Project</option>
        <option value="facebook/react">React</option>
        <option value="facebookexperimental/Recoil">Recoil</option>
      </select>
      star: {starCount}
    </div>
  );
}
export default Post;
