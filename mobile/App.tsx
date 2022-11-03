import { NativeBaseProvider, StatusBar } from 'native-base';
import { SignIn } from './src/screens/SignIn';
import { THEME } from './src/styles/theme';
import { Loading } from './src/components/Loading';

import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto';

export default function App() {
  const fonts = { Roboto_400Regular, Roboto_500Medium, Roboto_700Bold };
  const [fontsLoaded] = useFonts(fonts);

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      {!fontsLoaded ? <Loading /> : <SignIn />}
    </NativeBaseProvider>
  );
}
