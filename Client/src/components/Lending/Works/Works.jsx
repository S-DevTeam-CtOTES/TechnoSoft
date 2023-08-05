import React, { useState } from "react";
import Tabs from "./Tabs/Tabs";

import AccardionItem from "./AccardionItem/AccardionItem";
import "./Works.scss";
import { data } from "./data/data";

const Works = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className="Works" id="Works">
      <div className="container">
        <div className="Works__wrapper">
          <div className="Works__wrapper-title title">ВЫПОЛНЕННЫЕ РАБОТЫ</div>

          <div className="Works__wrapper-accardion">
            {data.map((item, i) => {
              return (
                <AccardionItem
                  key={i}
                  data={item}
                  index={i}
                  toggle={toggle}
                  selected={selected}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
