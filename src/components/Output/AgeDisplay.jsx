import { useSpring, animated } from "@react-spring/web";

const AgeDisplay = ({ label, value }) => {
  const isValueZero = value === 0;
  const props = useSpring({ number: value, from: { number: 0 } });

  return (
    <h2>
      {isValueZero ? (
        <span className="text-purple">--</span>
      ) : (
        <animated.span className="text-purple">
          {props.number.to((n) => Math.floor(n))}
        </animated.span>
      )}{" "}
      {label}
    </h2>
  );
};

export default AgeDisplay;
