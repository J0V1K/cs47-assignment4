import { StyleSheet, Text, View, Image, Pressable} from 'react-native';
import { Themes } from "./assets/Themes";
import { millisToMinutesAndSeconds } from "./utils";
import Ionicons from '@expo/vector-icons/Ionicons';


export default function ScreenList({ artistName, albumName, songName, albumImage, songTime, externalUrl, previewUrl, navigation }) {
    return (
        <Pressable 
        style={styles.item} 
        onPress={() => navigation.navigate('Song', {
            url: externalUrl
            })
        }
        >
            <View style={styles.songIndex}>
            <Pressable 
            style={styles.item} 
            onPress={() => navigation.navigate('Preview', {
                url: previewUrl
                })
            }
            >
                    <Ionicons name="play-circle" size={30} color={Themes.colors.spotify} />
                </Pressable>
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
        </Pressable>
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
        resizeMode: 'contain',
    },
    songTitle: {
        width: 100,
        alignContent: "center",
        padding: 10,

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