import { Collection, TabList, TabPanel, Tabs } from "react-aria-components";
import ChangeViewButton from "./components/ChangeViewButton";
import HTMLIcon from "./assets/icons/html-icon.svg?react";
import CSSIcon from "./assets/icons/css-icon.svg?react";
import JSIcon from "./assets/icons/js-icon.svg?react";
import EditorTab from "./components/EditorTab";
import { useState } from "react";

const tabs = [
  { id: "html", label: "HTML", icon: HTMLIcon },
  { id: "css", label: "CSS", icon: CSSIcon },
  { id: "js", label: "JS", icon: JSIcon },
];

function App() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="font-display min-h-dvh bg-purple-900">
      <Tabs selectedKey={activeTab} onSelectionChange={setActiveTab}>
        <div className="flex justify-between bg-purple-700">
          <TabList items={tabs} aria-label="Editor" className="flex">
            {(item) => (
              <EditorTab id={item.id} icon={item.icon} label={item.label} />
            )}
          </TabList>
          <ChangeViewButton />
        </div>
        <Collection items={tabs}>
          {(item) => <TabPanel>{item.content}</TabPanel>}
        </Collection>
      </Tabs>
    </div>
  );
}

export default App;
