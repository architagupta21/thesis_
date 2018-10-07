import * as React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { increaseCount, decreaseCount, resetCount } from "../actions";
import { RootState } from "../reducers";

interface IncreaseCountButtonProps {
  increaseCount: typeof increaseCount;
}
interface DecreaseCountButton {
  decreaseCount: typeof decreaseCount;
}
interface ResetCountButton {
  resetCount: typeof resetCount;
}

interface CounterComponent {
  count: number;
  increaseCount: typeof increaseCount;
  decreaseCount: typeof decreaseCount;
  resetCount: typeof resetCount;
}

const CounterComponentContainer = styled.div`
  margin-top: 20px;
`;

interface CountContainerProps {
  isNegative: boolean;
}
const CountContainer = styled.div`
  margin: 10px;
  font-size: 25px;
  color: ${(props: CountContainerProps) => (props.isNegative ? "red" : "blue")};
`;

const IncreaseCountButton = ({ increaseCount }: IncreaseCountButtonProps) => {
  const increaseVal = 6;
  return (
    <button
      type="button"
      onClick={() => {
        increaseCount(increaseVal);
      }}
    >
      Increase by {increaseVal}
    </button>
  );
};

const DecreaseCountButton = ({ decreaseCount }: DecreaseCountButton) => {
  const decreaseVal = 3;
  return (
    <button
      type="button"
      onClick={() => {
        decreaseCount(decreaseVal);
      }}
    >
      Decrease by {decreaseVal}
    </button>
  );
};

const ResetCountButton = ({ resetCount }: ResetCountButton) => (
  <button
    type="button"
    onClick={() => {
      resetCount();
    }}
  >
    Reset Count
  </button>
);

const CounterComponent = (props: CounterComponent) => {
  const { count, increaseCount, decreaseCount, resetCount } = props;
  return (
    <CounterComponentContainer>
      <IncreaseCountButton increaseCount={increaseCount} />
      <DecreaseCountButton decreaseCount={decreaseCount} />
      <ResetCountButton resetCount={resetCount} />
      <CountContainer isNegative={count < 0}>{count}</CountContainer>
    </CounterComponentContainer>
  );
};

export default connect(
  (state: RootState) => ({
    count: state.count
  }),
  { increaseCount, decreaseCount, resetCount }
)(CounterComponent);
