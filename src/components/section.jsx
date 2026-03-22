import { useState } from "react";
import "./section.css";
import Color from "color";

export default function Section({ number, name, colors }) {
  const [hovered, setHovered]     = useState(false);
  const [clicked, setClicked]     = useState(false);
  const [unClicked, setUnClicked] = useState(true);
  const [active, setActive]       = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);

  const isExpanded = clicked && unClicked;

  const description =
    "$79.50 Experience the perfect blend of fresh, juicy berries in every sip! Our " +
    name +
    " is packed with natural vitamins.";

  const handleViewMore = () => {
    setClicked(true);
    setHovered(true);
    setActive(true);
    setUnClicked(true);
  };

  const handleBack = () => {
    setUnClicked(false);
    setHovered(false);
    setActive(false);
    setTimeout(() => {
      setClicked(false);
      setUnClicked(true);
      setSelectedSize(null);
    }, 1000);
  };

  return (
    <div
      className={[
        "section",
        "section" + number,
        !unClicked ? "unactive" : "",
        isExpanded  ? "active"   : "",
      ].join(" ").trim()}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => !isExpanded && setHovered(false)}
      style={{
        background: hovered
          ? `radial-gradient(circle, ${Color(colors).lighten(0.8).hex()} 5%, ${colors} 50%)`
          : undefined,
        left: `${(number - 1) * 25}%`,
      }}
    >
      {isExpanded && (
        <div className="tophead">
          <button className="buttons Product">Product</button>
          <button className="buttons contact">Contact</button>
        </div>
      )}

      {isExpanded && <span className="coolback">{name}</span>}
      {isExpanded && <hr className="coolline" />}

      {isExpanded && (
        <button className="returning" onClick={handleBack}>
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

      <span className={(hovered ? "hovered" : "part1") + (clicked ? " coolappear" : "")}>
        {"0" + number}
      </span>

      <span className={"part2" + (hovered ? " hovered" : "") + (clicked ? " coolappear" : "")}>
        {name}
      </span>

      <span className={"part3" + (hovered ? " hovered" : "") + (clicked ? " coolappear" : "")}>
        {"Guava Flavour" + (isExpanded && active ? "  —  " + description : "")}
      </span>

      <button
        className={"view" + (hovered ? " hovered" : "") + (isExpanded ? " fadation" : "")}
        onClick={handleViewMore}
      >
        View more
        <span className={"arrow" + (hovered ? " hoveredarrow" : "")}>{">"}</span>
      </button>

      {clicked && <span className="Price">$79.50</span>}

      {isExpanded &&
        active &&
        [1, 2.5, 5].map((index) => {
          const size = Math.round(index);
          const isSelected = selectedSize === index;
          return (
            <button
              key={index}
              className={"order-size custom" + size + (isSelected ? " invertion" : "")}
              onClick={() => setSelectedSize(index)}
            >
              {100 * index}
            </button>
          );
        })}
    </div>
  );
}