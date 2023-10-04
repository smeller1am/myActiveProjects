'use client';

import React, { FC, useState } from 'react';
import {
  FavoriteContent,
  FavoriteContentWithProvider,
} from '@/app-pages/profile/ui/profileContent/FavoriteContent';
import { HistoryContent } from '@/app-pages/profile/ui/profileContent/HistoryContent';
import { ProfileContentWithProvider } from '@/app-pages/profile/ui/profileContent/ProfileContent';
import { ProfileTabs } from '@/app-pages/profile/ui/profileTabs/ProfileTabs';
import { WrapperWithProvider } from '@/shared/modal';

export enum ProfileEntities {
  Profile,
  Favorite,
  History,
}
export const ProfilePage: FC = () => {
  const [ActiveCategory, SetActiveCategory] = useState<ProfileEntities>(
    ProfileEntities.Profile,
  );
  return (
    <div className="container">
      <WrapperWithProvider />
      <div className="wrapper"></div>
      <div className="containerPage containerPage--gap">
        <div className="containerPage__item firstItem">
          <div className="titleMain titleProfile">
            <h1 className="titleMain__title">Профиль</h1>
          </div>
          <ProfileTabs
            changeCategoryIndex={SetActiveCategory}
            activeCategory={ActiveCategory}
          />
        </div>
        <div className="containerPage__item secondItem">
          {ActiveCategory === ProfileEntities.Profile && (
            <ProfileContentWithProvider />
          )}
          {ActiveCategory === ProfileEntities.Favorite && (
            <FavoriteContentWithProvider />
          )}
          {ActiveCategory === ProfileEntities.History && <HistoryContent />}
          <div className="likeInfo__gradient"></div>
        </div>
      </div>
    </div>
  );
};
