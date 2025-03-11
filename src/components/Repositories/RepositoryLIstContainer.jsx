import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import RepositoryItem from "./RepositoryItem";
import PickerSelect from "./PickerSelect";
import { Searchbar } from "react-native-paper";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

class RepositoryListContainer extends React.Component {
  renderItem = ({ item }) => <RepositoryItem item={item} />;

  renderHeader = () => {
    const { selectedOrder, setSelectedOrder, searchQuery, handleSearch } =
      this.props;

    return (
      <>
        <Searchbar
          placeholder="Search"
          onChangeText={handleSearch}
          value={searchQuery}
        />
        <PickerSelect
          selectedOrder={selectedOrder}
          setSelectedOrder={setSelectedOrder}
        />
      </>
    );
  };
  render() {
    const { repositories } = this.props;

    const repositoryNodes =
      repositories && repositories.edges
        ? repositories.edges.map((edge) => edge.node)
        : [];

    return (
      <FlatList
        testID="RepositoryListContainer"
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={this.renderItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={this.renderHeader}
      />
    );
  }
}

export default RepositoryListContainer;
