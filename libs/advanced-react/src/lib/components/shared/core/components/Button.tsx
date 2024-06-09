import { FC } from 'react';

export interface ButtonProps {
  As: string;
  size: string;
  label?: string;
  style?: Record<string, string>;
  href?: string
}

const Button: FC<ButtonProps> = ({
  As = 'Button',
  label = 'Button',
  style,
  ...rest
}) => {
  return (
    <div>
    <Button style={{ backgroundColor: 'rgba(0, 122, 204, 1)', color: 'white', ...style }} {...rest}>
      {label}
    </Button>
    </div>
  );
};

export default Button;
