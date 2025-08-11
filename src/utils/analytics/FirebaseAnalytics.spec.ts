import FirebaseAnalytics from './FirebaseAnalytics';

const mockLogEvent = jest.fn();

jest.mock('@react-native-firebase/analytics', () => () => ({
  logEvent: mockLogEvent,
}));

describe('Firebase Analytics', () => {
  afterEach(() => jest.clearAllMocks());

  it('saveScreenView', () => {
    const flow = 'flow';
    const screenName = 'screen-name';

    FirebaseAnalytics.saveScreenView({flow, screenName});
    expect(mockLogEvent).toHaveBeenCalledWith('screen_view', {
      flow,
      screen_name: screenName,
    });
  });

  it('saveSelectContent', () => {
    const flow = 'flow';
    const screenName = 'screen-name';
    const contentType = 'button-test';

    FirebaseAnalytics.saveSelectContent({flow, screenName, contentType});
    expect(mockLogEvent).toHaveBeenCalledWith('select_content', {
      flow,
      screen_name: screenName,
      content_type: contentType,
    });
  });

  it('saveEventException', () => {
    const flow = 'flow';
    const screenName = 'screen-name';
    const description = 'error-message';

    FirebaseAnalytics.saveEventException({flow, screenName, description});
    expect(mockLogEvent).toHaveBeenCalledWith('exception', {
      flow,
      description,
      fatal: false,
      screen_name: screenName,
    });
  });

  it('saveEventSuccess', () => {
    const flow = 'flow';
    const screenName = 'screen-name';
    const description = 'success-message';

    FirebaseAnalytics.saveEventSuccess({flow, screenName, description});
    expect(mockLogEvent).toHaveBeenCalledWith('success', {
      flow,
      description,
      screen_name: screenName,
    });
  });
});
