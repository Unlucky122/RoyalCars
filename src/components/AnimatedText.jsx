import { AnimatedSpan, Position, TextContainer } from "./AnimatedText.styled";

const produceSpans = (name) => {
  return name.split("").map((letter, index) => (
    <AnimatedSpan index={index} letter={letter} aria-hidden="true" key={index}>
      {letter}
    </AnimatedSpan>
  ));
};

const AnimatedText = () => {
  return (
    <TextContainer>
      <Position>
        <div
          className="text first text-white"
          aria-label="Looking for a new car?"
        >
          {produceSpans("Looking for a new car?")}
        </div>
        <div className="text second" aria-label="We can help you!">
          {produceSpans("We can help you!")}
        </div>
      </Position>
    </TextContainer>
  );
};

export default AnimatedText;
