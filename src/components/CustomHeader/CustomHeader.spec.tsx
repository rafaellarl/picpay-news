import {useNavigation} from '@react-navigation/native';
import {fireEvent, render, screen} from '@testing-library/react-native';

import CustomHeader from './CustomHeader.index';

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

const mockedUseNavigation = useNavigation as jest.Mock;
const propsMock = {
  title: 'Título header',
  showBackButton: false,
};

describe('CustomHeader', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockedUseNavigation.mockReturnValue({
      goBack: jest.fn(),
    });
  });

  describe('Render correctly', () => {
    it('Should render whit all elements', () => {
      const {getByText, getByTestId} = render(
        <CustomHeader title={propsMock.title} showBackButton />,
      );

      getByText('Título header');
      getByTestId('test-id-header-back-button');
    });

    it('Should render whitout title', () => {
      const {getByTestId} = render(<CustomHeader showBackButton />);

      getByTestId('test-id-header-back-button');
      expect(getByTestId('test-id-header-title').props.title).toBeFalsy();
    });

    it('Should render whitout backbutton', () => {
      const {getByText, queryByTestId} = render(
        <CustomHeader
          title={propsMock.title}
          showBackButton={propsMock.showBackButton}
        />,
      );

      getByText('Título header');
      expect(queryByTestId('test-id-header-back-button')).toBeNull();
    });
  });

  describe('Handle back button actions', () => {
    it('Should direct the user to the previous screen', () => {
      const {goBack} = mockedUseNavigation();
      const {getByTestId} = render(<CustomHeader showBackButton />);

      fireEvent.press(getByTestId('test-id-header-back-button'));
      expect(goBack).toHaveBeenCalledTimes(1);
    });
  });
});
