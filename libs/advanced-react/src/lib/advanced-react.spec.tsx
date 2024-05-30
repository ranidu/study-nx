import { render } from '@testing-library/react';

import AdvancedReact from './advanced-react';

describe('AdvancedReact', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AdvancedReact />);
    expect(baseElement).toBeTruthy();
  });
});
