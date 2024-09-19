import { useTabs } from "./useInput";

const content = [
    {
      tab: "Section 1",
      content: "section1의 콘텐츠",
    },
    {
      tab: "Section 2",
      content: "section2의 콘텐츠",
    },
  ];
  
const App = () => {
    const { curItem, changeItem } = useTabs(0, content);
    return (
      <div className="App">
        {content.map((section, index) => (
          <button onClick={() => changeItem(index)} data-index={index}>
            {section.tab}
          </button>
        ))}
        <br />
        {curItem.content}
      </div>
    );
};
export default App;