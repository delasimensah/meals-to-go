import { styled } from "nativewind";
import { FC } from "react";
import { View, TextInputProps, ViewProps } from "react-native";
import { Searchbar } from "react-native-paper";

type SearchProps = {
  value?: string;
  placeholder?: string;
  inputStyle?: TextInputProps["style"];
  searchStyle?: ViewProps["style"];
};

const Search: FC<SearchProps> = ({ inputStyle, searchStyle }) => {
  return (
    <View className="p-2">
      <Searchbar
        placeholder="Search for a location"
        value=""
        mode="view"
        showDivider={false}
        inputStyle={inputStyle}
        style={searchStyle}
      />
    </View>
  );
};

export default styled(Search, {
  props: {
    inputStyle: true,
    searchStyle: true,
  },
});
