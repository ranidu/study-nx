import styles from './advanced-react.module.css';
import { App } from './components/hooks'
import { Drawer, SmallButton } from './components/functionalProgramming'

/* eslint-disable-next-line */
export interface AdvancedReactProps {}

export function AdvancedReact(props: AdvancedReactProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AdvancedReact!</h1>
      <Drawer />
      <SmallButton label='click ME!'  />
    </div>
  );
}

export default AdvancedReact;
