import { Button, ButtonProps } from 'antd';
import { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

type CustomButtonType = 'primary' | 'secondary' | 'danger';

type OmitTypeButtonProps = Omit<ButtonProps, 'type'>;

interface CustomButtonProps extends OmitTypeButtonProps {
  type?: CustomButtonType;
  icon?: ReactElement;
  iconPosition?: 'start' | 'end';
  children?: ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  type = 'secondary',
  icon,
  iconPosition = 'start',
  children,
  ...props
}) => {
  const buttonType =
    type === 'primary' ? 'primary' : type === 'danger' ? 'danger' : 'default';
  return (
    <StyledButton
      buttonType={buttonType}
      icon={icon}
      iconPosition={iconPosition}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

interface StyledButtonProps {
  buttonType?: CustomButtonType | 'default';
}

const StyledButton = styled(Button)<StyledButtonProps>(({ buttonType }) => {
  const isPrimary = buttonType === 'primary';
  const isDanger = buttonType === 'danger';

  return {
    backgroundColor: isPrimary ? '#171717' : isDanger ? '#e11d48' : '#14b8a6',
    color: '#FFFFFF',
    borderRadius: '6px',
    border: isPrimary
      ? '2px solid #171717'
      : isDanger
        ? '2px solid #e11d48'
        : '1px solid #D0D5DD',
    padding: `6px 12px`,
    fontSize: 14,
    fontWeight: 600,
    boxShadow: '0px 1px 2px 0px #1018280D',
    gap: '4px',
  };
});

export default CustomButton;
