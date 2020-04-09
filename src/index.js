import React from 'react';

import Routes from './routes';
import {StatusBar} from 'react-native';

export default function index() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
      <Routes />
    </>
  );
}
