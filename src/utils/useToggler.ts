import { useState } from 'react';

const useToggler = (): readonly [boolean, () => void] => {
  const [toggler, defaultSetter] = useState(false);
  const setToggler = () => defaultSetter((toggler) => !toggler);
  return [toggler, setToggler] as const;
};

export default useToggler;
