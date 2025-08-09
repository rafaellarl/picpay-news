import React from 'react';
import {Button as ButtonLibPaper} from 'react-native-paper';

interface IButton {
  label: string;
  loading: boolean;
  disabled: boolean;
  onPress: () => void;
  variant: 'outlined' | 'contained';
}

const Button = ({
  variant,
  loading,
  disabled,
  onPress,
  label,
  ...props
}: IButton) => {
  return (
    <ButtonLibPaper
      {...props}
      mode={variant}
      loading={loading}
      onPress={onPress}
      disabled={disabled}
      buttonColor={variant === 'contained' ? '#FFFFFF' : 'transparent'}
      textColor={variant === 'contained' ? '#111111' : '#FFFFFF'}>
      {!loading ? label : ''}
    </ButtonLibPaper>
  );
};

export default Button;
