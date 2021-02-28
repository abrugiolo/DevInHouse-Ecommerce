import styled from "styled-components";

const Cents = styled.span`
  font-size: 14px;
  line-height: 24px;
`;
const Int = styled.span`
  font-size: 32px;
  line-height: 24px;
`;

function Price({ value }) {
  const [int, cents] = value?.toFixed(2)?.split(".");
  return (
    <div>
      <Int>{int}</Int>
      <Cents>,{cents}</Cents>
    </div>
  );
}

export default Price;
