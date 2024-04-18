import React from "react";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-gray-700 border-b-2 border-green-500 dark:text-white"
    : "text-gray-500";

  return (
    <button onClick={selectTab}>
      <p
        className={`mr-3 font-semibold hover:text-gray-700 dark:hover:text-white ${buttonClasses}`}
      >
        {children}
      </p>
    </button>
  );
};

export default TabButton;
