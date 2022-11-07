import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, SafeAreaView, Text, Pressable, Image, FlatList } from "react-native";
import { useSpotifyAuth } from "./utils";
import { Images, Themes } from "./assets/Themes";
import MusicItem from "./MusicList";
import SongScreen from "./MusicItem";
import SongPreview from "./MusicPreview";

const Stack = createStackNavigator();

const renderMusicItem = ({ item }, navigation) => {
  return(
  // FlatList data={tracks}
  // again, use flatlist, this is just for demo. Also make two seperate files for list and auth for clarity
  <MusicItem
    artistName={item.artists[0].name}
    albumName={item.album.name}
    songName={item.name}
    albumImage={item.album.images[2].url}
    songTime={item.duration_ms}
    externalUrl = {item.external_urls.spotify}
    navigation = {navigation}
    previewUrl = {item.preview_url}
  />
)};

function HomeScreen({ navigation }) {
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth();
  const AuthButton = ({authFunction}) => {
    // use pressable, button just for demo
    return (
    <Pressable style = {styles.button} title="Auth" onPress={authFunction}>
      <Image source = {Images.spotify} style = {styles.image}/>
      <Text style = {styles.buttonText}>CONNECT WITH SPOTIFY</Text> 
    </Pressable>
    );
  }
  

  

  let contentDisplayed

  if (token) {
    // render FlatList
    contentDisplayed = (
    <FlatList
     data={tracks}
     renderItem={(item) => renderMusicItem(item, navigation)}
     keyExtractor={(item) => item.id}
    />
    )
  }
  else {
    // render Authentication
    contentDisplayed = <AuthButton authFunction={getSpotifyAuth}/>
  }

  return (
    <SafeAreaView style={styles.container}>
      {contentDisplayed}
    </SafeAreaView>
  );
}


export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Song" component={SongScreen} options={{headerStyle: {backgroundColor: Themes.colors.background}, headerTitleStyle: {color: Themes.colors.spotify}}}/>
        <Stack.Screen name="Preview" component={SongPreview} options={{headerStyle: {backgroundColor: Themes.colors.background}, headerTitleStyle: {color: Themes.colors.spotify}}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  button: {
    backgroundColor: Themes.colors.spotify,
    borderRadius: 99999,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    color: Themes.colors.white,
    fontWeight: "bold",
    marginLeft: 10,
  },
  image: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
});
