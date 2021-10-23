import React from 'react'
import MainBody from './components/MainBody';

const ToyList = ()=> {

    const data = 
    [
      {
        id: "1",
        toyName: "He-Man",
        toyLine: "Masters of the Universe",
        faction: "Good",
        maxForAge: 8,
      },
      {
        id: "2",
        toyName: "Skeletor",
        toyLine: "Masters of the Universe",
        faction: "Evil",
        maxForAge: 8,
      },
      {
        id: "3",
        toyName: "Optimus Prime",
        toyLine: "Tranformers",
        faction: "Good",
        maxForAge: 8,
      },
    ]
    ;
    return (
       <MainBody
               id={<Text>Hello{data.id}</Text>}
               toyName={<Text>{data.toyName}</Text>}
               toyLine={<Text>{data.toyLine}</Text>}
               faction={<Text>{data.faction}</Text>}
                maxForAge={<Text>{data.maxForAge}</Text>}
               /> 
    )
};

export default ToyList
