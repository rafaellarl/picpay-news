import {useState} from 'react';

import FirebaseAnalytics from '../../../../utils/FirebaseAnalytics';

const useCard = (id: number) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleNewsCardFavorite = () => {
    setIsFavorite(!isFavorite);
    FirebaseAnalytics.saveSelectContent({
      flow: 'news',
      screenName: 'news-feed',
      contentType: `card-${id}`,
    });
  };

  return {
    isFavorite,
    handleNewsCardFavorite,
  };
};

export default useCard;
