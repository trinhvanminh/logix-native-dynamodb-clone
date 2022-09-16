import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Button, Divider, Menu, Provider } from "react-native-paper";

const CustomHeader = ({ headerStyle }) => {
  const navigation = useNavigation();
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  return (
    <View style={[styles.container, headerStyle]}>
      <TouchableOpacity
        style={{ marginLeft: 16 }}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>

      <Menu
        visible={visible}
        onDismiss={closeMenu}
        style={{ top: 94 }}
        anchor={
          <TouchableOpacity style={{ marginRight: 16 }} onPress={openMenu}>
            <MaterialIcons name="more-horiz" size={24} color="white" />
          </TouchableOpacity>
        }
      >
        <Menu.Item onPress={() => {}} title="Item 1" />
        <Menu.Item onPress={() => {}} title="Item 2" />
        <Divider />
        <Menu.Item onPress={() => {}} title="Item 3" />
      </Menu>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 44,
    height: 60,
  },
});
