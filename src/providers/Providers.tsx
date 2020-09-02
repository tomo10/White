import * as React from 'react';
import { Routes } from './../navigation';
import { AuthProvider } from './AuthProvider';

export default () => {
  return (
  <AuthProvider>
    <Routes />
  </AuthProvider>
  )  
}