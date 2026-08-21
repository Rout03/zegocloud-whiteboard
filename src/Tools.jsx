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
        fixed
        z-[100]
        bg-white
        shadow-xl

        /* Mobile */
        bottom-3
        left-1/2
        -translate-x-1/2
        w-[95%]
        h-auto
        rounded-2xl
        flex
        flex-row
        items-center
        justify-start
        px-2
        py-2
        gap-2
        overflow-x-auto

        /* Tablet + Desktop */
        md:top-5
        md:bottom-auto
        md:left-5
        md:translate-x-0
        md:w-[70px]
        md:h-[90vh]
        md:rounded-3xl
        md:flex-col
        md:items-center
        md:justify-start
        md:px-0
        md:py-6
        md:gap-4
        md:overflow-x-visible
        md:overflow-y-auto
      "
    >
      {tools.map((item, index) => {
        const Icon = item.tool;

        const isSelected = currentTool === item.type;

        return (
          <div
            key={index}
            onClick={() => onClick(item)}
            title={item.name}
            className={`
              flex-shrink-0
              w-10
              h-10
              md:w-12
              md:h-12

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
          >
            <Icon
              className="text-xl md:text-2xl"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Tools;