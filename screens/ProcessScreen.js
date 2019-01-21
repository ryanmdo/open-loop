import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native'; // So this requires importing all the required things from react-native
import { ExpoLinksView } from '@expo/samples';

export default class ProcessScreen extends React.Component {
  static navigationOptions = {
    title: 'Inbox',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
          <View>
            <Text>SHOULD BE PROCESS</Text>
          </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
