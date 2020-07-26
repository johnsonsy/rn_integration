import React from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import App from './src/App';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
