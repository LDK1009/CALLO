import { IconPropsType } from "@/types/icon.type";
import styled from "styled-components";

const Pentagon = ({ fill, stroke, strokeWidth }: IconPropsType) => {
  return (
    <Svg
      width="32"
      height="31"
      viewBox="0 0 32 31"
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.2939 1.59549L16 1.38197L15.7061 1.59549L1.44026 11.9602L1.14637 12.1738L1.25862 12.5193L6.70769 29.2898L6.81995 29.6353H7.18322H24.8168H25.1801L25.2923 29.2898L30.7414 12.5193L30.8536 12.1738L30.5597 11.9602L16.2939 1.59549Z"
      />
    </Svg>
  );
};

export default Pentagon;


const Svg = styled.svg`
  stroke: ${(props) => `var(${props.stroke})`};
`;
