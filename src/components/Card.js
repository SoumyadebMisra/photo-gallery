import React from "react";

const Card = ({ image }) => {
  const tagArr = image.tags.split(",");
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={image.webformatURL} alt="cat" />
      <div className="px-6 py-4">
        <div className="font-bold text-sky-500 text-lg mb-2">
          Photo by {image.user}
        </div>
        <ul>
          <li>
            <strong>Views : {image.views}</strong>
          </li>
          <li>
            <strong>Downloads : {image.downloads}</strong>
          </li>
          <li>
            <strong>Likes : {image.likes}</strong>
          </li>
        </ul>
      </div>

      <div className="px-6 py-4">
        {tagArr.map((tag,index) => {
          return (
            <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 my-1">
              {tag}
            </span>
          );
        })}
      </div>
    </div>
  );
};
export default Card;
