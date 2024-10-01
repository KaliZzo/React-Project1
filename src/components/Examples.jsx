import React from "react";
import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";

const Examples = () => {
  const [selectedTopic, setSelectedTopic] = useState();
  let tabContent = "please click a button";
  function handleSelect(selectedButton) {
    //selectedButton =>'components, 'jsx,props,state
    setSelectedTopic(selectedButton.toLowerCase());
  }

  let tabContents = <p>Please selet Topic.</p>;
  if (selectedTopic) {
    tabContents = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          isSelected={selectedTopic === "components"}
          onSelect={() => handleSelect("Components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "jsx"}
          onSelect={() => handleSelect("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "props"}
          onSelect={() => handleSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "state"}
          onSelect={() => handleSelect("state")}
        >
          State
        </TabButton>
      </menu>
      {tabContents}
    </section>
  );
};

export default Examples;
