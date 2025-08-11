import React from 'react';
import {Button as ButtonLibPaper} from 'react-native-paper';

import Colors from '../../assets/colors';

interface IButton {
  label: string;
  loading: boolean;
  disabled: boolean;
  onPress: () => void;
  variant: 'outlined' | 'contained';
}

const Button = ({
  label,
  onPress,
  variant,
  loading,
  disabled,
  ...props
}: IButton) => {
  return (
    <ButtonLibPaper
      {...props}
      mode={variant}
      loading={loading}
      onPress={onPress}
      disabled={disabled}
      buttonColor={variant === 'contained' ? Colors.white : 'transparent'}
      textColor={variant === 'contained' ? Colors.black : Colors.white}>
      {!loading ? label : ''}
    </ButtonLibPaper>
  );
};

export default Button;
