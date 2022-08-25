import React from 'react';
import { Button, Column, Text, Centered } from '../../components/ui';
import { VcItem } from '../../components/VcItem';
import { Icon } from 'react-native-elements';
import { Colors } from '../../components/ui/styleUtils';
import { RefreshControl } from 'react-native';
import { useMyVcsTab } from './MyVcsTabController';
import { HomeScreenTabProps } from './HomeScreen';
import { AddVcModal } from './MyVcs/AddVcModal';
import { DownloadingVcModal } from './MyVcs/DownloadingVcModal';
import { OnboardingOverlay } from './OnboardingOverlay';
import { useTranslation } from 'react-i18next';

export const MyVcsTab: React.FC<HomeScreenTabProps> = (props) => {
  const { t } = useTranslation('MyVcsTab');
  const controller = useMyVcsTab(props);

  return (
    <React.Fragment>
      <Column fill style={{ display: props.isVisible ? 'flex' : 'none' }}>
        <Column fill pY={32} pX={24}>
          {controller.vcKeys.length > 0 && (
            <React.Fragment>
              <Column
                scroll
                refreshControl={
                  <RefreshControl
                    refreshing={controller.isRefreshingVcs}
                    onRefresh={controller.REFRESH}
                  />
                }>
                {controller.vcKeys.map((vcKey) => (
                  <VcItem
                    key={vcKey}
                    vcKey={vcKey}
                    margin="0 2 8 2"
                    onPress={controller.VIEW_VC}
                  />
                ))}
              </Column>
              <Column elevation={2} margin="0 2">
                <Button
                  type="clear"
                  disabled={controller.isRefreshingVcs}
                  title={t('addVcButton', {
                    vcLabel: controller.vcLabel.singular,
                  })}
                  onPress={controller.ADD_VC}
                />
              </Column>
            </React.Fragment>
          )}
          {controller.vcKeys.length === 0 && (
            <React.Fragment>
              <Centered fill>
                <Text weight="semibold" margin="0 0 8 0">
                  {t('generateVc', { vcLabel: controller.vcLabel.plural })}
                </Text>
                <Text color={Colors.Grey} align="center">
                  {t('generateVcDescription', {
                    vcLabel: controller.vcLabel.singular,
                  })}
                </Text>
                <Icon
                  name="arrow-downward"
                  containerStyle={{ marginTop: 20 }}
                  color={Colors.Orange}
                />
              </Centered>
              <Button
                disabled={controller.isRefreshingVcs}
                title={t('addVcButton', {
                  vcLabel: controller.vcLabel.singular,
                })}
                onPress={controller.ADD_VC}
              />
            </React.Fragment>
          )}
        </Column>
      </Column>

      {controller.AddVcModalService && (
        <AddVcModal service={controller.AddVcModalService} />
      )}
      {controller.isRequestSuccessful && (
        <DownloadingVcModal
          isVisible={controller.isRequestSuccessful}
          onDismiss={controller.DISMISS}
        />
      )}

      <OnboardingOverlay
        isVisible={controller.isOnboarding}
        onDone={controller.ONBOARDING_DONE}
        onAddVc={controller.ADD_VC}
      />
    </React.Fragment>
  );
};
