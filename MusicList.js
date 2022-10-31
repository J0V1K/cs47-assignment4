import { StyleSheet, Text, View, Image, } from 'react-native';
import { Themes } from "./assets/Themes";
import { millisToMinutesAndSeconds } from "./utils";


export default function MusicItem({ artistName, albumName, songName, albumImage, songTime, id }) {
    return (
        <View style={styles.item}>
            <View style={styles.songIndex}>
                <Text style={[styles.grayText]}>{id}</Text>
            </View>
            <Image style={styles.songImage} source={{uri:albumImage}} />
            <View style={styles.songTitle}>
                <Text style={styles.whiteText} numberOfLines={1}>{songName}</Text>
                <Text style={styles.grayText} numberOfLines={1}>{artistName}</Text>
            </View>
            <View style={styles.songAlbum}>
                <Text style={styles.whiteText} numberOfLines={1}>{albumName}</Text>
            </View>
            <View style={styles.songTime}>
                <Text style={styles.whiteText}>{millisToMinutesAndSeconds(songTime)}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: Themes.colors.background,
        padding: 8,
        marginVertical: 8,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
    },
    textSection: {
        flex: 1,
    },
    name: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 10,
        color: Themes.colors.gray,
    },
    info: {
        fontSize: 16,
        borderWidth: 1,
        padding: 4,
        color: Themes.colors.white,
    },
    image: {
        width: 80,
        height: 80,
        margin: 10,
        resizeMode: 'contain'
    },
    songIndex: {
        alignItems: "center",

    },
    songImage: {
        width: 64,
        height: 64,
        margin: 10,
        alignItems: "center",
        resizeMode: 'contain'
    },
    songTitle: {
        width: 100,
        alignContent: "center",

    },
    songAlbum: {
        width: 100,

    },
    songTime: {
       

    },
    grayText: {
        color: Themes.colors.gray,
        alignItems: "center",
    },
    whiteText: {
        fontSize: 16,
        color: Themes.colors.white,
    }
});