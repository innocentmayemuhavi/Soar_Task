import styled from "styled-components";

const StyledRoundedButton = styled.div<{
  showBg?: boolean;
  backgroundColor?: string;
  hasShadow?: boolean;
  shadowColor?: string;
}>`
  background-color: ${(props) =>
    props.showBg
      ? props.backgroundColor
        ? props.backgroundColor
        : "var(--bg-main)"
      : "transparent"};
  border-radius: 50%;
  padding: 7px;
  display: flex;
  height: 22px;
  width: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.hasShadow ? `0px 2px 5px ${props.shadowColor}` : "none"};
  img {
    width: 20px;
  }

  &:hover {
    background-color: ${(props) =>
      props.showBg ? "var(--bg-main)" : "var(--bg-light)"};
  }
`;

const RoundedIconButton = ({
  icon,
  onClick,
  showBg,
  backgroundColor,
  hasShadow,
  shadowColor,
}: {
  icon: any;
  onClick: () => void;
  showBg?: boolean;
  backgroundColor?: string;
  hasShadow?: boolean;
  shadowColor?: string;
}) => {
  return (
    <StyledRoundedButton
      onClick={onClick}
      showBg={showBg}
      backgroundColor={backgroundColor}
      hasShadow={hasShadow}
      shadowColor={shadowColor}
    >
      <img src={icon} />
    </StyledRoundedButton>
  );
};

const StyledTextButton = styled.div`
  color: var(--text-primary);
  cursor: pointer;
  font-size: 17px;
  font-weight: 600;
  &:hover {
    text-decoration: underline;
  }
`;

const TextButton = ({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
  showBg?: boolean;
}) => {
  return <StyledTextButton onClick={onClick}>{text}</StyledTextButton>;
};

const StyledMainButton = styled.button<{
  backgroundColor?: string;
  color?: string;
  isDisabled?: boolean;
}>`
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "var(--black)"};
  color: ${(props) => (props.color ? props.color : "var(--white)")};
  padding: 10px 20px;
  border: none;
  cursor: ${(props) => (props.isDisabled ? "not-allowed" : "pointer")};
  border-radius: 15px;
  font-weight: 500;
  width: 190px;

  &:hover {
    border: 2px solid var(--blue);
  }

  &:disabled {
    background-color: var(--gray);
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    width: 100%;
    border-radius: 9px;
  }
`;

const MainButton = ({
  children,
  onClick,
  isDisabled,
}: {
  children: React.ReactNode;
  onClick: () => void;
  isDisabled?: boolean;
}) => {
  return (
    <StyledMainButton onClick={onClick} isDisabled={isDisabled}>
      {children}
    </StyledMainButton>
  );
};

export default RoundedIconButton;
export { TextButton, MainButton };
