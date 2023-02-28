import React, { useState } from "react";

function ColorChange() {
    const [color, setColor] = useState<string>('black');

    function handlePickColor() {
        const newColor = get_rand_color()
        setColor(newColor);
    }

    return (
      <div>
        <div onClick={handlePickColor}
            style={{
            backgroundColor: color,
            height: "100px",
            width: "100px",
            borderRadius: "10%",
          }}
        ></div>
      </div>
    )
  }

export default ColorChange;

function get_rand_color()
{
    let rgb = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
    while(rgb.length < 6) {
        rgb = "0" + rgb;
    }
    return "#" + rgb;
}