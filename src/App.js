import React, { useState, useEffect } from "react";
import axios from "axios";
import { getGrid } from "./utils/APIRoutes";

import LogicPanel from "./components/LogicPanel";
const App = () => {
  const [robotPosition, setRobotPosition] = useState({ x: 0, y: 0 });
  const [grid, setGrid] = useState({ rows: 5, cols: 5 });
  const [redSquarePosition, setRedSquarePosition] = useState({ x: 4, y: 4 });

  useEffect(() => {
    // Fetch initial grid state
    getGridState();
  }, []);

  const getGridState = async () => {
    try {
      const response = await axios.get(getGrid);
      const { robotPosition, redSquarePosition, grid } = response.data;
      setGrid(grid);
      setRobotPosition(robotPosition);
      setRedSquarePosition(redSquarePosition);
    } catch (error) {
      console.error("Error fetching grid state:", error);
    }
  };

  console.log(grid);
  return (
    <>
      <div className="mx-12 my-4">
        <div className="text-center text-3xl"></div>
        <div>
          <div className="grid">
            {Array.from({ length: grid.rows }, (_, row) => (
              <div key={row} className="row">
                {Array.from({ length: grid.cols }, (_, col) => {
                  const cellClass = `cell ${
                    row === robotPosition.y && col === robotPosition.x
                      ? "robot"
                      : ""
                  } ${
                    row === redSquarePosition.y && col === redSquarePosition.x
                      ? "red-square"
                      : ""
                  }`;
                  return (
                    <div key={`${row}-${col}`} className={cellClass}></div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
      <LogicPanel setRobotPosition={setRobotPosition} />
    </>
  );
};

export default App;
