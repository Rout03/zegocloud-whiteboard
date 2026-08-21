import React, { useEffect, useState } from "react";
import { ZegoSuperBoardManager } from "zego-superboard-web";
import { ZegoExpressEngine } from "zego-express-engine-webrtc";
import Tools from "./Tools";

const App = () => {
  const appID = 1340820834;
  const userID = "kausik";
  const roomID = "5642";
  const userName = "kausik";

  const [currentTool, setCurrentTool] = useState(null);

  const token =
    "04AAAAAGqIU7MADDo7pJ9znNg1ztvdZQCwpiJXFhW6teWS+7O+Zwl6bd6EatRrgoWq8RSnfP+DAqFOSESkA1N6kWFx43ZlzvaCHtRj/WAD2piY1Llml+0bARfPdTosQlWdCZCB9BgFWdic+8FRHteR6vwUQHxo0sSscaAoYK2PzuqOTbgiKWjqeMBp/WawE7wZDs0ZUwPGth6RRjxJ97vjgmRUDXkINREyFlQZv/WMJ7nb7coJg1X5Az8MvlHM+ymWogpasciesLoB";

  const server =
    "wss://webliveroom1340820834-api.coolzcloud.com/ws";

  const zg = new ZegoExpressEngine(appID, server);

  const zegoSuperBoard = ZegoSuperBoardManager.getInstance();

  const initBoard = async () => {
    await zegoSuperBoard.init(zg, {
      parentDomID: "parentDomID",
      appID,
      userID,
      token,
    });

    await zg.loginRoom(
      roomID,
      token,
      {
        userID,
        userName,
      },
      {
        userUpdate: true,
      }
    );

    setCurrentTool(zegoSuperBoard.getToolType());

    await zegoSuperBoard.createWhiteboardView({
      name: "Virtual Board",
      perPageWidth: 1600,
      perPageHeight: 900,
      pageCount: 1,
    });
  };

  useEffect(() => {
    initBoard();
  }, []);

  return (
    <div className="w-full h-[100dvh] bg-black overflow-hidden relative">
      
      {/* Whiteboard */}
      <div
        id="parentDomID"
        className="w-full h-full"
      ></div>

      {/* Tools */}
      <Tools
        currentTool={currentTool}
        onClick={(tool) => {
          zegoSuperBoard.setToolType(tool.type);
          setCurrentTool(tool.type);
        }}
      />

    </div>
  );
};

export default App;