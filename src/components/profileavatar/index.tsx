import styled from "styled-components";
import { MainButton } from "../buttons";
import pencil from "../../assets/icons/pencil.svg";
const StyledAvatar = styled.div<{
  size: string;
  hasEdit: boolean;
  onEdit?: () => void;
}>`
  height: ${(props) =>
    props.size === "small"
      ? "20px"
      : props.size === "medium"
      ? "40px"
      : "60px"};
  width: ${(props) =>
    props.size === "small"
      ? "20px"
      : props.size === "medium"
      ? "40px"
      : "60px"};
  position: relative;

  border-radius: 50%;
  cursor: pointer;

  img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
  }
  button {
    background-color: var(--black);
    border: none;
    border-radius: 50%;
    position: absolute;
    height: 20px;
    width: 20px;
    bottom: 0;
    right: 0;
  }
`;

const ProfileAvatar = ({
  image,
  hasEdit,
  size,
  onEdit,
}: {
  image: string;
  hasEdit: boolean;
  size: string;
  onEdit?: () => void;
}) => {
  return (
    <StyledAvatar size={size} hasEdit={hasEdit}>
      <img src={image} alt="profile" />
      {hasEdit && (
        <button>
          <img src={pencil} alt="edit" />
        </button>
      )}
      <div></div>
    </StyledAvatar>
  );
};

export default ProfileAvatar;
