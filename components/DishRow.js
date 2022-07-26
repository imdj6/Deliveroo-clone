import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { urlFor } from "../sanity";

const DishRow = ({ id, name, description, price, image }) => {
  return (
    <TouchableOpacity className="bg-white border p-4 border-gray-200 ">
      <View className="flex-row">
        <View className="flex-1 pr-2">
          <Text className="text-lg mb-1">{name}</Text>
          <Text className="text-gray-400">{description}</Text>
           <Text className="text-gray-400 mt-2">
           rs 100
          </Text> 
            <View className='mt-5'>
             <Text>hello</Text>     
            </View>
        </View>

        <View>
          <Image
            style={{
              borderWidth: 1,
              borderColor: "#F3F3F4",
            }}
            source={{
              uri: urlFor(image).url(),
            }}
            className="h-20 w-20 bg-slate-300 p-4 "
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DishRow;
