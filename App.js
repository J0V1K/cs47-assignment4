import { StyleSheet, SafeAreaView, Text, Pressable, Image, FlatList } from "react-native";
import { useSpotifyAuth } from "./utils";
import { Images, Themes } from "./assets/Themes";
import MusicItem from "./MusicList";

export default function App() {

  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
  // token: Boolean - authenticated or not
  // tracks: [{}] - tracks
  // getSpotifyAuth - function that logs you in to Spotify. Changes token to true and fills your tracks

  const { token, tracks, getSpotifyAuth } = useSpotifyAuth(); // static line, apart from the destructured variables we got, don't use or touch

  // if taken is true, then render FlatList
  // else, render Authentication button

  const AuthButton = ({authFunction}) => {
    // use pressable, button just for demo
    return (
    <Pressable style = {styles.button} title="Auth" onPress={authFunction}>
      <Image source = {Images.spotify} style = {styles.image}/>
      <Text style = {styles.buttonText}>CONNECT WITH SPOTIFY</Text> 
    </Pressable>
    );
  }
  
  const renderMusicItem = ({ item, index }) => (
    // FlatList data={tracks}
    // again, use flatlist, this is just for demo. Also make two seperate files for list and auth for clarity
    <MusicItem
      artistName={item.artists[0].name}
      albumName={item.album.name}
      songName={item.name}
      albumImage={item.album.images[2].url}
      songTime={item.duration_ms}
      id = {index + 1}
    />
  );

  let contentDisplayed

  if (token) {
    // render FlatList
    contentDisplayed = (
    <FlatList
     data={tracks}
     renderItem={(item) => renderMusicItem(item)}
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
      {/* TODO: Your code goes here */}
      {contentDisplayed}
    </SafeAreaView>
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
