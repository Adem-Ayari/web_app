import { useNavigate } from "react-router-dom";
import Section from "./components/section";
import "./components/section.css";

const sections = [
  { id: 1, name: "Green Smoothie", color: "green" },
  { id: 2, name: "Berry Smoothie", color: "purple" },
  { id: 3, name: "Orange Smoothie", color: "orange" },
  { id: 4, name: "Strawberry Smoothie", color: "pink" },
];

export default function App() {
  const navigate = useNavigate();
  return (
    <div className="app-wrapper">
      <span className="wavyname">Smooooothieeee</span>
      <div
        className="userstuff"
        onClick={() => {
          navigate("/account");
        }}
      >
        <img
          src="./OIP4.jpg"
          alt=""
          style={{
            width: "2.5rem",
            height: "2.5rem",
            paddingTop: "1rem",
            borderRadius: "50%",
            cursor: "pointer",
          }}
        />
      </div>
      <div className="sections-wrapper">
        {sections.map((section) => (
          <Section
            key={section.id}
            number={section.id}
            name={section.name}
            colors={section.color}
          />
        ))}
      </div>
    </div>
  );
}
