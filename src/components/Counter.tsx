import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { decreaseCount, increaseCount, resetCount } from '../actions';
import { RootState } from '../reducers';

interface IncreaseCountButtonProps {
    increaseCountAction: typeof increaseCount;
}
interface DecreaseCountButton {
    decreaseCountAction: typeof decreaseCount;
}
interface ResetCountButton {
    resetCountAction: typeof resetCount;
}

interface CounterComponent {
    count: number;
    increaseCountAction: typeof increaseCount;
    decreaseCountAction: typeof decreaseCount;
    resetCountAction: typeof resetCount;
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
    color: ${(props: CountContainerProps) =>
        props.isNegative ? 'red' : 'blue'};
`;

const IncreaseCountButton = ({
    increaseCountAction,
}: IncreaseCountButtonProps) => {
    const increaseVal = 6;
    const HandleIncreaseButtonOnClick = () => {
        increaseCountAction(increaseVal);
    };
    return (
        <button type="button" onClick={HandleIncreaseButtonOnClick}>
            Increase by {increaseVal}
        </button>
    );
};

const DecreaseCountButton = ({ decreaseCountAction }: DecreaseCountButton) => {
    const decreaseVal = 3;
    const HandleDecreaseCountButtonOnClick = () => {
        decreaseCountAction(decreaseVal);
    };
    return (
        <button type="button" onClick={HandleDecreaseCountButtonOnClick}>
            Decrease by {decreaseVal}
        </button>
    );
};

const ResetCountButton = ({ resetCountAction }: ResetCountButton) => {
    const HandleResetCountButtonOnClick = () => {
        resetCountAction();
    };
    return (
        <button type="button" onClick={HandleResetCountButtonOnClick}>
            Reset Count
        </button>
    );
};

const CounterComponent = (props: CounterComponent) => {
    const {
        count,
        increaseCountAction,
        decreaseCountAction,
        resetCountAction,
    } = props;
    return (
        <CounterComponentContainer>
            <IncreaseCountButton increaseCountAction={increaseCountAction} />
            <DecreaseCountButton decreaseCountAction={decreaseCountAction} />
            <ResetCountButton resetCountAction={resetCountAction} />
            <CountContainer isNegative={count < 0}>{count}</CountContainer>
        </CounterComponentContainer>
    );
};

export default connect(
    (state: RootState) => ({
        count: state.count,
    }),
    {
        decreaseCountAction: decreaseCount,
        increaseCountAction: increaseCount,
        resetCountAction: resetCount,
    }
)(CounterComponent);
