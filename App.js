import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StreamChat } from 'stream-chat';

export default class App extends React.Component {

  render() {
  const client = new StreamChat("qk4nn7rpcn75");
  client.setUser({
    id: "jon-snow",
    name: "Jon Snow",
    image: "https://bit.ly/2u9Vc0r",
  }, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiam9uLXNub3ciLCJpYXQiOjE1NTQyMDIzMDZ9._fJDlLFHTelSi7U-3xk5E4eaAO3YwcKqj7brafjULs0");
    return (
      <View style={styles.container}>
        <Text>Chat is initialized, awesome!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
