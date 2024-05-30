import styles from './advanced-react.module.css';

/* eslint-disable-next-line */
export interface AdvancedReactProps {}

export function AdvancedReact(props: AdvancedReactProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AdvancedReact!</h1>
    </div>
  );
}

export default AdvancedReact;
