import {useEffect} from 'react';
import {FirebaseAnalytics} from '../../utils';
import {labels} from '../../labels';

export interface IUseGenericError {
  flow: string;
  label?: string;
  screenName: string;
  errorMessage: string;
  onTryAgain: () => void;
}

const useGenericError = ({
  flow,
  screenName,
  onTryAgain,
  errorMessage,
  label = labels.components.genericError.button,
}: IUseGenericError) => {
  useEffect(() => {
    FirebaseAnalytics.saveEventException({
      flow,
      screenName,
      description: errorMessage,
    });
  }, []);

  const handleOnTryAgain = () => {
    FirebaseAnalytics.saveSelectContent({
      flow,
      screenName,
      contentType: label,
    });

    onTryAgain();
  };

  return {
    handleOnTryAgain,
  };
};

export default useGenericError;
