import React, { useContext } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { AppStack, AuthStack } from './index';
import { AuthContext } from '../providers/AuthProvider';
import SInfo from 'react-native-sensitive-info';

export default () => {
  const { user } = useContext(AuthContext);
  
  React.useEffect(() => {
    const bootstrapAsync = async () => {
      try {
        console.log('Routes useEffect')
        const gettingToken = await SInfo.getItem("token", {});
      } catch (e) {
        console.log(e)
      }
    }
    bootstrapAsync();
  }, []);

  return (
    <NavigationContainer>
      {user ? <AppStack/> : <AuthStack/>}
    </NavigationContainer>
  )
}
