import React from "react";

import Brusher from "./Brusher.js";
import GithubCorner from "react-github-corner";

export default function App() {
  return (
    <>
      <GithubCorner
        href="https://github.com/MasonWang025/react-brusher"
        size="100"
      />
      <div className="container-fluid m-0 p-0">
        <div className="row no-gutters">
          <div className="col bg">
            <Brusher
              options={{
                image: "img/abstract.jpg", // Path of the image to be used as a brush
                brushStyle: "square", // Brush style (round, square, butt)
                keepCleared: true,
                brushSize: 25,
                brushBlur: 50,
              }}
            >
              Hover over any square
            </Brusher>
          </div>
          <div className="col bg">
            <Brusher
              options={{
                image: "img/abstract2.jpg", // Path of the image to be used as a brush
                brushStyle: "round", // Brush style (round, square, butt)
              }}
            >
              Hover over any square
            </Brusher>
          </div>
          <div className="col bg">
            <Brusher
              options={{
                image: "img/abstract3.jpg", // Path of the image to be used as a brush
                brushStyle: "round", // Brush style (round, square, butt)
                keepCleared: true,
                brushSize: 100,
                brushBlur: 20,
              }}
            >
              Hover over any square
            </Brusher>
          </div>
        </div>
        <div className="row no-gutters">
          <div className="col bg">
            <Brusher
              options={{
                image: "img/abstract4.jpg", // Path of the image to be used as a brush
                brushStyle: "round", // Brush style (round, square, butt)
                brushBlur: 0,
                brushSize: 20,
                keepCleared: true,
              }}
            >
              Hover over any square
            </Brusher>
          </div>
          <div className="col bg">
            <Brusher
              options={{
                image: "img/abstract5.jpg", // Path of the image to be used as a brush
                brushStyle: "round", // Brush style (round, square, butt)
              }}
            >
              Hover over any square
            </Brusher>
          </div>
          <div className="col bg">
            <Brusher
              options={{
                image: "img/abstract6.jpg", // Path of the image to be used as a brush
                brushStyle: "square", // Brush style (round, square, butt)
                brushBlur: 10,
              }}
            >
              Hover over any square
            </Brusher>
          </div>
        </div>
      </div>
    </>
  );
}
