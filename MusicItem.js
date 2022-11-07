import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

export default function SongScreen({navigation, route}) {
    const url = route.params.url;
    return (
        <WebView
            source={{
                uri: url
            }}
            style={{marginTop: 0}}
        />
    );
}