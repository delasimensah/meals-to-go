import React from "react";
import { Searchbar } from "react-native-paper";
import { FlatList } from "react-native";
import styled from "styled-components/native";

// context
import { useRestaurantsContext } from "../../../../services/restaurants/restaurants.context";

// components
import SafeArea from "../../../components/utility/safe-area.component";
import RestaurantInfoCard from "../components/restaurant-info-card/restaurant.info-card.component";
import Spacer from "../../../components/spacer/space.component";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export default () => {
  // restaurants state
  const { restaurants } = useRestaurantsContext();

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>

      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard restaurant={item} />
          </Spacer>
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeArea>
  );
};
