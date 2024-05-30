// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { AdvancedReact } from '@study-nx/advanced-react'

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div>
      <NxWelcome title="study-nx" />
      <AdvancedReact />
    </div>
  );
}

export default App;
