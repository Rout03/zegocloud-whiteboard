import React from "react";
import { FaPen, FaSlash } from "react-icons/fa6";
import { MdOutlineTextFields } from "react-icons/md";
import { RiRectangleLine } from "react-icons/ri";
import { IoEllipseOutline } from "react-icons/io5";
import { GrSelect } from "react-icons/gr";
import { GiLaserBurst } from "react-icons/gi";
import { LuEraser } from "react-icons/lu";
import { HiOutlineCursorClick } from "react-icons/hi";

const Tools = ({ currentTool, onClick }) => {
  const tools = [
    {
      name: "Pen",
      tool: FaPen,
      type: 1,
    },
    {
      name: "Text",
      tool: MdOutlineTextFields,
      type: 2,
    },
    {
      name: "Line",
      tool: FaSlash,
      type: 4,
    },
    {
      name: "Rectangle",
      tool: RiRectangleLine,
      type: 8,
    },
    {
      name: "Ellipse",
      tool: IoEllipseOutline,
      type: 16,
    },
    {
      name: "Selector",
      tool: GrSelect,
      type: 32,
    },
    {
      name: "Eraser",
      tool: LuEraser,
      type: 64,
    },
    {
      name: "Laser",
      tool: GiLaserBurst,
      type: 128,
    },
    {
      name: "Click",
      tool: HiOutlineCursorClick,
      type: 256,
    },
  ];

  return (
    <div
      className="
        w-[80px]
        h-[90vh]
        bg-white
        rounded-3xl
        shadow-xl
        absolute
        top-5
        left-5
        flex
        flex-col
        items-center
        py-6
        gap-4
        z-[100]
      "
    >
      {tools.map((item, index) => {
        const Icon = item.tool;

        const isSelected = currentTool === item.type;

        return (
          <div
            key={index}
            onClick={() => onClick(item)}
            className={`
              w-12
              h-12
              flex
              items-center
              justify-center
              cursor-pointer
              rounded-xl
              ${
                isSelected
                  ? "bg-blue-100"
                  : "hover:bg-gray-100"
              }
            `}
            title={item.name}
          >
            <Icon size={24} />
          </div>
        );
      })}
    </div>
  );
};

export default Tools;