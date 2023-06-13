import React from "react";
import axios from "axios";
import { reset, moveRobot } from "../utils/APIRoutes";
import { DragDropContainer, DropTarget } from "react-drag-drop-container";
function LogicPanel({ setRobotPosition }) {
  const handleMove = async (direction) => {
    try {
      const response = await axios.post(moveRobot, {
        direction,
      });
      const { position } = response.data;
      console.log(response.data);
      setRobotPosition(position);
    } catch (error) {
      console.error("Error moving the robot:", error);
    }
  };

  const handleReset = async () => {
    try {
      const response = await axios.post(reset);
      const { position } = response.data;
      setRobotPosition(position);
    } catch (error) {
      console.error("Error resetting the robot:", error);
    }
  };

  const handlePlay = async () => {
    try {
      const directions = [
        "down",
        "right",
        "left",
        "right",
        "up",
        "down",
        "right",
        "right",
        "down",
        "right",
      ]; // Sample directions from the logic panel

      for (const direction of directions) {
        await handleMove(direction);
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay between each move (1 second in this example)
      }
    } catch (error) {
      console.error("Error executing directions:", error);
    }
  };

  const handleDrop = (event) => {
    const itemId = event.dragData.itemId;
    console.log("Item dropped:", itemId);
  };

  return (
    <div className="border-2 mb-4 p-10 mr-12 ml-12 bg-slate-100 border-slate-400 rounded-lg">
      <div className="text-2xl text-center py">
        <h2 className="text-xl font-bold pb-4">Logic Panel</h2>
        <DropTarget onHit={handleDrop}>
          <div className="flex gap-4 justify-center p-2">
            <div className="border bg-slate-300 px-2 w-10 h-10 pb-1 rounded-lg hover:bg-slate-400 transition-all ease-in-out duration-200"></div>
            <div className="border bg-slate-300 px-2 w-10 h-10 pb-1 rounded-lg hover:bg-slate-400 transition-all ease-in-out duration-200"></div>
            <div className="border bg-slate-300 px-2 w-10 h-10 pb-1 rounded-lg hover:bg-slate-400 transition-all ease-in-out duration-200"></div>
            <div className="border bg-slate-300 px-2 w-10 h-10 pb-1 rounded-lg hover:bg-slate-400 transition-all ease-in-out duration-200"></div>
            <div className="border bg-slate-300 px-2 w-10 h-10 pb-1 rounded-lg hover:bg-slate-400 transition-all ease-in-out duration-200"></div>
            <div className="border bg-slate-300 px-2 w-10 h-10 pb-1 rounded-lg hover:bg-slate-400 transition-all ease-in-out duration-200"></div>
            <div className="border bg-slate-300 px-2 w-10 h-10 pb-1 rounded-lg hover:bg-slate-400 transition-all ease-in-out duration-200"></div>
            <div className="border bg-slate-300 px-2 w-10 h-10 pb-1 rounded-lg hover:bg-slate-400 transition-all ease-in-out duration-200"></div>
            <div className="border bg-slate-300 px-2 w-10 h-10 pb-1 rounded-lg hover:bg-slate-400 transition-all ease-in-out duration-200"></div>
            <div className="border bg-slate-300 px-2 w-10 h-10 pb-1 rounded-lg hover:bg-slate-400 transition-all ease-in-out duration-200"></div>
            <div className="border bg-slate-300 px-2 w-10 h-10 pb-1 rounded-lg hover:bg-slate-400 transition-all ease-in-out duration-200"></div>
            <div className="border bg-slate-300 px-2 w-10 h-10 pb-1 rounded-lg hover:bg-slate-400 transition-all ease-in-out duration-200"></div>
            <div className="border bg-slate-300 px-2 w-10 h-10 pb-1 rounded-lg hover:bg-slate-400 transition-all ease-in-out duration-200"></div>
            <div className="border bg-slate-300 px-2 w-10 h-10 pb-1 rounded-lg hover:bg-slate-400 transition-all ease-in-out duration-200"></div>
          </div>

          {/* begins the arrows */}
          <>
            <div className="flex gap-4 justify-center p-2">
              <DragDropContainer dragData={"left"} dragClone>
                <div
                  className="border bg-slate-200 px-2 pb-1 rounded-lg hover:bg-slate-300 transition-all ease-in-out duration-200"
                  draggable
                >
                  &#8592;
                </div>
              </DragDropContainer>
              <DragDropContainer dragClone>
                <div
                  className="border bg-slate-200 px-3 pb-1 rounded-lg hover:bg-slate-300 transition-all ease-in-out duration-200"
                  draggable
                >
                  &#8593;
                </div>
              </DragDropContainer>
              <DragDropContainer dragClone>
                <div
                  className="border bg-slate-200 px-3 pb-1 rounded-lg hover:bg-slate-300 transition-all ease-in-out duration-200"
                  draggable
                >
                  &#8595;
                </div>
              </DragDropContainer>
              <DragDropContainer dragClone>
                <div
                  className="border bg-slate-200 px-2 pb-1 rounded-lg hover:bg-slate-300 transition-all ease-in-out duration-200"
                  draggable
                >
                  &#8594;
                </div>
              </DragDropContainer>
            </div>
          </>
        </DropTarget>
      </div>
      <div className="flex justify-around">
        <button
          className="text-lg font-semibold bg-pink-300 px-3 py-2 rounded-lg border-1 border-slate-500 hover:bg-pink-500 hover:text-white transition-all ease-in-out duration-200"
          onClick={handlePlay}
        >
          Play
        </button>
        <button
          className="text-lg font-semibold bg-pink-300 px-3 py-2 rounded-lg border-1 border-slate-500 hover:bg-pink-500 hover:text-white transition-all ease-in-out duration-200"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default LogicPanel;
