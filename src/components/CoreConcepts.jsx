import React from "react";
import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";

const CoreConcepts = () => {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((item) => (
          <CoreConcept key={item.title} {...item} />
        ))}

        {/* <CoreConcept {...CORE_CONCEPTS[0]} />.
  {/* Example how this code could be shorter */}
        {/* <CoreConcept
    title={CORE_CONCEPTS[1].title}
    description={CORE_CONCEPTS[1].description}. .
    image={CORE_CONCEPTS[1].image}
  /> */}
        {/* <CoreConcept
    title={CORE_CONCEPTS[2].title}
    description={CORE_CONCEPTS[2].description}
    image={CORE_CONCEPTS[2].image}
  /> */}
        {/* <CoreConcept
    title={CORE_CONCEPTS[3].title}
    description={CORE_CONCEPTS[3].description}
    image={CORE_CONCEPTS[3].image}
  /> */}
      </ul>
    </section>
  );
};

export default CoreConcepts;
