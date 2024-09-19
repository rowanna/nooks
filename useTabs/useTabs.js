import { useState } from "react";

export default useTabs = (initTab, allTabs) => {
    if (!allTabs || !Array.isArray(allTabs)) return;
    const [curIndex, setCurIndex] = useState(initTab);
    // const onClick = (e) => {
    //   setCurIndex((exIndex) => e.target.dataset.index);
    // };
    return {
      curItem: allTabs[curIndex],
      // onClick,
      changeItem: setCurIndex,
    };
  };





