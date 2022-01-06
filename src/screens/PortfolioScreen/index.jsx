import React, { Suspense } from "react";
import { View, Text } from "react-native";
import { FlatList } from "react-native-web";
import PortfolioAssetsList from "./components/portfolioAssetsList";

const PortfolioScreen = () => {
  return (
    <View>
      <Suspense
        fallback={<Text style={{ color: "#fff" }}>Loading...Wait a sec</Text>}
      >
        <PortfolioAssetsList />
      </Suspense>
    </View>
  );
};

export default PortfolioScreen;
