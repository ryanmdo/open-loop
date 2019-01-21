import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ExpoConfigView } from '@expo/samples';

export default class ProjectsScreen extends React.Component {
  static navigationOptions = {
    title: 'Projects',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return <ScrollView>
      <View>
        <Text>        
          There should be projects here.
        </Text>
      </View>
    </ScrollView>;
  }
}
