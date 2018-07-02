import React from 'react'
import { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Hello } from './components/Hello';
import { Button, Card, Toast, WhiteSpace } from 'antd-mobile-rn';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const startLevel = 1;

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Card full>
          <Card.Header title="Welcome to React Native!">
          </Card.Header>
          <Card.Body>
            <Text style={styles.instructions}>
              To get started, edit App.tsx
            </Text>
            <Text style={styles.instructions}>
              {instructions}
            </Text>
            <WhiteSpace />
            <Button type='primary' onClick={showToast}>
              Ant Design
            </Button>
            <WhiteSpace />
            <Hello name='Tommy' enthusiasmLevel={startLevel} />
            <WhiteSpace />
          </Card.Body>
          <Card.Footer content="footer content" extra="footer extra content" />
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: 30,
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#1890ff',
    marginBottom: 5,
  },
});

function showToast() {
  Toast.info('This is a toast tips !!!');
}
