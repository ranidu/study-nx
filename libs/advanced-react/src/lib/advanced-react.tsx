import styles from './advanced-react.module.css';
import { App } from './components/hooks'
import { Drawer, SmallButton } from './components/functionalProgramming'
import { Button } from './components/shared'

/* eslint-disable-next-line */
export interface AdvancedReactProps {}

export function AdvancedReact(props: AdvancedReactProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AdvancedReact!</h1>
      <Drawer />
      <SmallButton label='click ME!'  />
      <Button As='Button' size='M' />
      <Button As='a' size='M' href='https://www.google.com' />
    </div>
  );
}

export default AdvancedReact;
