import styled from 'styled-components';
import { Stack } from '@chakra-ui/react';
const SwappingSquare = styled.div`
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  * {
    box-sizing: border-box;
  }
  .square {
    height: calc(${props => props.size}px * 0.25 / 1.3);
    width: calc(${props => props.size}px * 0.25 / 1.3);
    animation-duration: ${props => props.animationDuration}ms;
    border: calc(${props => props.size}px * 0.04 / 1.3) solid
      ${props => props.color};
    margin-right: auto;
    margin-left: auto;
    position: absolute;
    animation-iteration-count: infinite;
  }
  .square:nth-child(1) {
    animation-name: swapping-squares-animation-child-1;
    animation-delay: ${props => props.animationDuration * 0.5}ms;
  }
  .square:nth-child(2) {
    animation-name: swapping-squares-animation-child-2;
    animation-delay: 0ms;
  }
  .square:nth-child(3) {
    animation-name: swapping-squares-animation-child-3;
    animation-delay: ${props => props.animationDuration * 0.5}ms;
  }
  .square:nth-child(4) {
    animation-name: swapping-squares-animation-child-4;
    animation-delay: 0ms;
  }
  @keyframes swapping-squares-animation-child-1 {
    50% {
      transform: translate(150%, 150%) scale(2, 2);
    }
  }
  @keyframes swapping-squares-animation-child-2 {
    50% {
      transform: translate(-150%, 150%) scale(2, 2);
    }
  }
  @keyframes swapping-squares-animation-child-3 {
    50% {
      transform: translate(-150%, -150%) scale(2, 2);
    }
  }
  @keyframes swapping-squares-animation-child-4 {
    50% {
      transform: translate(150%, -150%) scale(2, 2);
    }
  }
`;

function generateSpinners(num) {
  return Array.from({ length: num }).map((val, index) => (
    <div key={index} className="square" />
  ));
}

const LoadingAnim = ({
  size = 50,
  color = 'teal',
  animationDuration = 1000,
  className = '',
  style,
  ...props
}) => (
  <SwappingSquare
    size={size}
    color={color}
    animationDuration={animationDuration}
    className={`swapping-squares-spinner${className ? ' ' + className : ''}`}
    style={style}
    {...props}>
    {generateSpinners(4)}
  </SwappingSquare>
);

export default function Loading() {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      width="100vw"
      spacing={4}
      position="fixed"
      top="0"
      left="0"
      zIndex="9999"
      overflow="hidden"
      textTransform="uppercase"
      letterSpacing="0.1em"
      padding="0 1em"
      pointerEvents="none"
      userSelect="none"
      opacity="0.8"
      transition="opacity 0.3s ease-in-out">
      <LoadingAnim />
    </Stack>
  );
}
