import { useState } from "react";
import "./section.css";
import Color from "color";
export default function Section({ number, name, colors }) {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [unClicked, setUnClicked] = useState(true);
  const [active, setActive] = useState(false);
  const description =
    "$79.50 Experience the perfect blend of fresh ,juicy berries in every sip! our " +
    name +
    " is packed with natural vitamins.";
  let classis = "";
  return (
    <div
      className={
        "section section" +
        number +
        (!unClicked ? " unactive" : "") +
        (clicked && unClicked ? " active" : "")
      }
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => !(clicked && unClicked) && setHovered(false)}
      style={{
        background: hovered
          ? `radial-gradient(circle, ${Color(colors)
              .lighten(0.8)
              .hex()} 5%, ${colors} 50%)`
          : undefined,
        left: `${(number - 1) * 25}%`,
      }}
    >
      {clicked && unClicked && (
        <div className="tophead">
          <button className="buttons Product">Product</button>
          <button className="buttons contact">contact</button>
        </div>
      )}
      {clicked && unClicked && <span className="coolback">{name}</span>}
      {clicked && unClicked && <hr className="coolline" />}
      {clicked && unClicked && (
        <button
          className="returning"
          onClick={() => {
            setUnClicked(false);
            setHovered(false);
            setActive(false);
            setTimeout(() => {
              setClicked(false);
              setUnClicked(true);
            }, 1000);
          }}
        >
          Back
        </button>
      )}
      {hovered && (
        <img
          className={"image-styling" + (clicked ? " fade-in" : "")}
          src={"/" + colors + ".jpg"}
          alt={name}
        />
      )}
      <span
        className={
          (hovered ? "hovered" : "part1") + (clicked ? " coolappear" : "")
        }
      >
        {"0" + number}
      </span>
      <span
        className={
          "part2 " + (hovered ? "hovered" : "") + (clicked ? " coolappear" : "")
        }
      >
        {name}
      </span>
      <span
        className={
          "part3 " + (hovered ? "hovered" : "") + (clicked ? " coolappear" : "")
        }
      >
        {"Guavia Favour   " + (clicked && active ? description : "")}
      </span>
      <button
        className={
          "view " +
          (hovered ? "hovered " : " ") +
          (clicked && unClicked ? "fadation " : "")
        }
        onClick={() => {
          setClicked(true);
          setHovered(true);
          setActive(true);
          setUnClicked(true);
          console.log(clicked, unClicked);
        }}
      >
        View more
        <span className={"arrow" + (hovered ? " hoveredarrow" : "")}>
          {">"}
        </span>
      </button>
      {clicked && <span className="Price">$79.50</span>}
      {clicked &&
        active &&
        [1, 2.5, 5].map((index) => {
          return (
            <button
              key={index}
              className={
                "order-size custom" + Math.round(index) + " " + classis
              }
              style={{ filter: active ? "1" : "0" }}
              onClick={() => {
                classis = "inverstion";
              }}
            >
              {100 * index}
            </button>
          );
        })}
    </div>
  );
}
