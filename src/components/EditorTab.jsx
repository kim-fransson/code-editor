/* eslint-disable react/prop-types */
import { motion } from "motion/react";
import { Tab } from "react-aria-components";

function EditorTab({ id, icon: Icon, label }) {
  return (
    <Tab
      id={id}
      className="selected:text-white/87 selected:bg-purple-500 relative flex 
      cursor-pointer items-center
      gap-2 px-5 text-lg font-semibold text-white/60 outline-none 
      focus-visible:outline-2 focus-visible:-outline-offset-8 focus-visible:outline-solid"
    >
      {({ isSelected }) => (
        <>
          <Icon className="size-5" />
          {label}
          {isSelected && (
            <motion.span
              layoutId="selection-indicator"
              className="absolute h-1 bottom-0 left-0 right-0 bg-white/87"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
        </>
      )}
    </Tab>
  );
}

export default EditorTab;
