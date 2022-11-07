import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

export default function SongPreview({navigation, route}) {
    const url = route.params.url;
    console.log('url', url)
    return (
                <WebView
                    source={{
                        uri: url
                    }}
                    style={{marginTop: 0}}
                />
            );
}