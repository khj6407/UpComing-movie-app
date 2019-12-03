import React from "react";

import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

class CommonBtn extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.txt}>{this.props.children}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    width: width / 3,
    borderWidth: 3,
    borderRadius: 20,
    backgroundColor: "#B53471",
    borderColor: "#b71540",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    padding: 6,
    shadowColor: "#000",

    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.55,
    shadowRadius: 3.84,
    elevation: 5
  },
  txt: {
    color: "white",
    fontWeight: "bold"
  }
});

export default CommonBtn;
