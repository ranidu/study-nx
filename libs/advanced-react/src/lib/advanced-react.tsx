import styles from './advanced-react.module.css';
import { App } from './components/hooks'
import { Drawer } from './components/recursiveComponent'

/* eslint-disable-next-line */
export interface AdvancedReactProps {}

export function AdvancedReact(props: AdvancedReactProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AdvancedReact!</h1>
      <Drawer />
    </div>
  );
}

export default AdvancedReact;
