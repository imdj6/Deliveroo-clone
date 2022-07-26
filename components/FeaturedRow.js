import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaruntCard from "./RestaruntCard";
import sanityClient from "../sanity";

const FeaturedRow = ({ id, title, description }) => {

  const [restaurants,setRestaurants]=useState([]);
  

  useEffect(() => {
    sanityClient.fetch(
      `
  *[_type=="featured" && _id==$id]{
    ...,
    restaurants[]->{
      ...,
      dishes[]->,
      type->{
        name
      }
    },
  }[0]`,
      { id: id }
    ).then(data=>{
      setRestaurants(data?.restaurants);
    });
  }, [id]);

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CC08" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* RestaruntCard */}
         
         {
          restaurants?.map(restaurant=>{
            return( <RestaruntCard
              key={restaurant._id}
              id={restaurant._id}
              imgUrl={restaurant.image}
              title={restaurant.name}
              genre={restaurant.type?.name}
              rating={restaurant.rating}
              address={restaurant.address}
              short_description={restaurant.short_description}
              dishes={restaurant.dishes}
              long={restaurant.long}
              lat={restaurant.lat}
            />);
          })
         }
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
