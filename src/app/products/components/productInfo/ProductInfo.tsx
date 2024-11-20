"use client";

import React, { useState } from "react";
import Counter from "../../../../components/counter/Counter";

const heading = "font-bold capitalize";
const colorList = ["Blue", "Silver", "Red", "Green"];

const ProductInfo = () => {
  const [colorValue, setColorValue] = useState(colorList[0]);
  const [itemQuantity, setItemQuantity] = useState(1);

  return (
    <div className="flex-1 flex flex-col gap-2">
      <p>
        <span className={`${heading}`}>Product name:</span> Apple iPhone 13
        512GB Single Sim
      </p>
      <p>
        <span className={`${heading}`}>Brand:</span> Apple
      </p>
      <p>
        <span className={`${heading}`}>Price:</span> $900
      </p>
      <p>
        <span className={`${heading}`}>Category:</span> Phone
      </p>
      <p>
        <span className={`${heading}`}>Color: </span> {colorValue}
      </p>
      <p>
        <span className={`${heading}`}>Select Color: </span>
        {colorList.map((color) => (
          <button
            key={color}
            onClick={() => setColorValue(color)}
            className="mx-1 px-2 py-1 rounded-md bg-secondary-500 transition-all 
            duration-300 hover:bg-secondary-400"
          >
            {color}
          </button>
        ))}
      </p>
      <div>
        <h2 className={`${heading}`}>About this item</h2>
        <p>
          The iPhone 13’s brighter display, longer battery life, and powerful
          cameras make it the best iPhone for the money. The new iPhone’s
          display is brighter than its predecessors. The battery life is longer.
          And Apple has improved an already
        </p>
      </div>
      <Counter itemQuantity={itemQuantity} setItemQuantity={setItemQuantity} />
    </div>
  );
};

export default ProductInfo;
