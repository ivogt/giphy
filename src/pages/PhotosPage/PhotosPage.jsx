import React, { Component } from "react";
import { ImagesSubscriber, useImagesStore } from "./stores/Images";
import PhotoCard from "./components/PhotoCard";
import "./PhotoCardq.scss";
const Home = props => {
  const [images,actions] = useImagesStore();
  return (
    <div>
      <div className="hero">
        <h1 className="title">Giphy Photo Stream</h1>
        <p className="description" />
        <ImagesSubscriber>
          {images => {
            console.log(images);
            return images.map(PhotoCard);
          }}
        </ImagesSubscriber>
      </div>
    </div>
  );
};

export default Home;
