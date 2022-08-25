import React from 'react';
import { useTranslation } from 'react-i18next';
import { Logo } from '../components/Logo';
import { Button, Centered, Column, Text } from '../components/ui';
import { Colors } from '../components/ui/styleUtils';
import { RootRouteProps } from '../routes';
import { useWelcomeScreen } from './WelcomeScreenController';

export const WelcomeScreen: React.FC<RootRouteProps> = (props) => {
  const { t } = useTranslation('WelcomeScreen');
  const controller = useWelcomeScreen(props);

  return (
    <Column fill padding="32 32 0" backgroundColor={Colors.White}>
      <Centered fill>
        <Logo height={182} />
        <Text margin="16 0 0 0">{t('title')}</Text>
      </Centered>
      <Button
        margin="0 0 32"
        title={controller.isSettingUp ? t('getStarted') : t('unlockApp')}
        onPress={controller.unlockPage}
      />
    </Column>
  );
};
