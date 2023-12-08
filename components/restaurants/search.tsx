import { styled } from "nativewind";
import { FC, useState } from "react";
import { View, TextInputProps, ViewProps } from "react-native";
import { Searchbar } from "react-native-paper";

import { useLocationStore } from "@/hooks/use-location-store";

type SearchProps = {
  value?: string;
  placeholder?: string;
  inputStyle?: TextInputProps["style"];
  searchStyle?: ViewProps["style"];
};

const Search: FC<SearchProps> = ({ inputStyle, searchStyle }) => {
  const { keyword, setKeyword, setLocLoading } = useLocationStore();

  const [searchKeyword, setSearchKeyword] = useState(keyword);

  const handleSearch = () => {
    setLocLoading(true);
    setKeyword(searchKeyword);
  };

  return (
    <View className="p-2">
      <Searchbar
        placeholder="Search for a location"
        value={searchKeyword}
        mode="view"
        showDivider={false}
        inputStyle={inputStyle}
        style={searchStyle}
        onSubmitEditing={handleSearch}
        onChangeText={(text) => setSearchKeyword(text)}
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
