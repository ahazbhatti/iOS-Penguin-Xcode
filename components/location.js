import React, { Component } from 'react';
import {  Button } from 'react-native';

const location = props => {
  return (
      <Button title="Get Location" onPress={props.onGetLocation}/>
  );
};

  
export default location;
