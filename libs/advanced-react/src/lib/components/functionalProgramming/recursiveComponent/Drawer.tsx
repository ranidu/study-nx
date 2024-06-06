import { chain, get } from 'lodash';
import { useGetResource } from '../../shared';
import RecursiveComponent from './RecursiveComponent';

const Drawer = () => {
  const resp = useGetResource({ url: 'users/1' });

  return (
    <div>
      <ul>  
      {chain(resp)
        .keys()
        .map((key, index) => <li key={`${index}-${key}`}>{key}: <RecursiveComponent data={get(resp, key)} /></li>)
        .value()}
        </ul>
    </div>
  );
};

export default Drawer;
