import { FC } from 'react';
import { isObject, entries, map } from 'lodash';

const RecursiveComponent: FC<any> = ({ data }) => {
  if (!isObject(data)) {
    return data;
  }

  const subValues = entries(data);

  return (
    <ul>
      {map(subValues, ([key, value]) => {
        return (
          <li key={key}>
            {key}:
            <RecursiveComponent key={key} data={value} />
          </li>
        );
      })}
    </ul>
  );
};

export default RecursiveComponent;
