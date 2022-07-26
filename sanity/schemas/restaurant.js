export default {
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {  name:"name",
       type:"string",
       title:"Restaurant name",
       validation:(Rule)=>Rule.required(),
    },
    {
       name:"short_description",
       type:"string",
       title:"short description",
       validation:(Rule)=>Rule.max(200),
    },
    {
      name:"image",
      type:"image",
      title:"Image of the Restaurant",
    },
    {
      name:"lat",
      type:"number",
      title:"latitude of the Restaurant",
    },
    {
      name:"long",
      type:"number",
      title:"longitude of the Restaurant",
    },
    {
      name:"address",
      type:"string",
      title:"Restaurant address",
      validation:(Rule)=>Rule.required(),
    },
    {
      name:"rating",
      type:"number",
      title:"Enter a number from 1 to 5",
      validation:(Rule)=>Rule.required().min(1).max(5).error("Please enter a value between 1 and 5"),
    },
    {
      name:"type",
      title:"Category",
      validation:(Rule)=>Rule.required(),
      type:"reference",
      to:[{type:"category"}],
    },
    {
      name:"dishes",
      type:"array",
      title:"Dishes",
      of:[{type:"reference",to:[{type:"dish"}]}]
    }
  ],

}
