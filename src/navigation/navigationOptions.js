import {homeIcon, savedIcon} from '../assets';
import {HomePage, NewsReadPage, SavedNews} from '../pages';
import {HOME, MAIN, NEWS_READ_PAGE, SAVED_NEWS} from '../utils/constants';
import {TabNavigation} from './TabNavigation';
import {IconButton} from '../components/buttons/IconButton';

export const SCREENS = [
  {name: MAIN, component: TabNavigation},
  {name: NEWS_READ_PAGE, component: NewsReadPage},
];

export const TAB_SCREENS = [
  {name: HOME, component: HomePage},
  {name: SAVED_NEWS, component: SavedNews},
];

export const tabScreenOptions = (tabProps, colors) => ({
  headerShown: false,
  tabBarShowLabel: false,
  tabBarStyle: {
    height: 80,
  },
  tabBarActiveTintColor: colors.primary,
  tabBarInactiveTintColor: 'gray',
  tabBarIcon: props => (
    <IconButton
      iconSize={24}
      tintColor={props.color}
      source={tabProps.route.name === HOME ? homeIcon : savedIcon}
      text={tabProps.route.name}
      onPress={() => onPressTabIconHandler(tabProps)}
      textStyle={{color: props.color, width: '100%'}}
    />
  ),
});

const onPressTabIconHandler = tabProps => {
  if (!tabProps.navigation.isFocused()) {
    tabProps.navigation.navigate(tabProps.route.name);
  }
};
