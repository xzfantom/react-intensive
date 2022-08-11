import { useState } from 'react';

const useToggler = () => {
  const [toggler, defaultSetter] = useState(false);
  const setToggler = () => defaultSetter((toggler) => !toggler);
  return [toggler, setToggler];
};

export default useToggler;
