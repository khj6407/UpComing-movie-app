import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CommonBtn from "./components/CommonBtns";
import { movies } from "./api/movies.js";

class App extends React.Component {
  state = {
    viewUpComing: null,
    loading: false
  };

  componentDidMount = async () => {
    let upComing;

    try {
      upComing = await movies.getUpComing();
    } catch (error) {
      alert("영화 데이터 없음");
    } finally {
      upComing = upComing.data.results;

      this.setState({
        viewUpComing: upComing,
        loading: true
      });
    }
  };

  render() {
    const { viewUpComing, loading } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.btnArea}>
          <CommonBtn>UpComing</CommonBtn>
        </View>

        {loading ? (
          viewUpComing.map(movie => (
            <View key={movie.id} style={styles.txt}>
              <Text>{movie.title}</Text>
            </View>
          ))
        ) : (
          <Text>loading...</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 60
  },
  btnArea: {
    flexDirection: "row",
    borderBottomWidth: 2,
    borderBottomColor: "#6F1E51",
    paddingBottom: 10
  },
  txt: {
    fontSize: 19,
    marginTop: 10
  }
});

export default App;
