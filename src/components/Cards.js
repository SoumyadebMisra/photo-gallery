import React from "react";
import Card from "./Card";

const Cards = ({ pics,isLoading }) => {
  return (
    <div className="container mx-auto">
        {!isLoading && pics.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32 text-sky-600">Image Not Found</h1>}
      <div className="grid grid-cols-3 gap-4">
        {pics.map((pic) => {
          return <Card key={pic.id} image={pic} />;
        })}
      </div>
    </div>
  );
};

export default Cards;
