import styled from "styled-components";

const PageStyled = styled.div`
  padding: 88px 156px 0;
`;

function PageWrapper(props) {
  return <PageStyled>{props.children}</PageStyled>;
}

export default PageWrapper;
