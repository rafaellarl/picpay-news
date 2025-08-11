import {useState} from 'react';

import {FirebaseAnalytics} from '../../../../utils';
import {ANALYTICS_SCREENS, FLOW} from '../../constants';

const useCard = (id: number) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleNewsCardFavorite = () => {
    setIsFavorite(!isFavorite);
    FirebaseAnalytics.saveSelectContent({
      flow: FLOW,
      screenName: ANALYTICS_SCREENS.newsFeed.name,
      contentType: `${ANALYTICS_SCREENS.newsFeed.contentTypes.favoriteIcon}${id}`,
    });
  };

  return {
    isFavorite,
    handleNewsCardFavorite,
  };
};

export default useCard;
