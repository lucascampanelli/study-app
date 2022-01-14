import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Routes from './src/routes'
import { Fragment } from 'react/cjs/react.development';

export default function App() {
  return (
    <Fragment>
      <StatusBar hidden={true}/>
      <Routes />
    </Fragment>
  );
}
