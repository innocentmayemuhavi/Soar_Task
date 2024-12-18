import styled from "styled-components";

const StyledOverlay = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backdrop-filter: blur(10px);
  z-index: 111;
`;

const Overlay = ({
  children,
  onClicked,
}: {
  children: React.ReactNode;
  onClicked: () => void;
}) => {
  return <StyledOverlay onClick={() => onClicked()}>{children}</StyledOverlay>;
};

export default Overlay;
