import { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalContext';
import { Preloader } from '../Components/Preloader/Preloader';

export const usePreloader = () => {
  const { loading } = useContext(GlobalContext);
  return loading && <Preloader />;
};
