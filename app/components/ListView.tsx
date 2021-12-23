import React from "react"
import Props from "prop-types"
import { FlatList, View, SectionList} from "react-native"


class ListView extends React.Component {
 
  render() {
    return (
        <FlatList
          {...this.props}
          keyExtractor={this.props.keyExtractor }
          data={this.props.items}
          renderItem={this.props.renderItem}
          style={this.props.style}
          numColumns={this.props.numColumns}
          ListFooterComponent={this.props.ListFooterComponent}
          ListHeaderComponent={this.props.ListHeaderComponent}
        />

    )
  }
}
export {ListView};