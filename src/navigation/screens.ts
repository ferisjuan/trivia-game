import { createStackNavigator } from '@react-navigation/stack'
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  HOME: undefined;
  QUIZ_MODAL: undefined;
  RESULTS: undefined;
};

export const Stack = createStackNavigator<RootStackParamList>()

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList
>;

export type NavigationProps = {
  navigation: ProfileScreenNavigationProp;
};
