import styled from "styled-components";
import pencil from "../../assets/icons/pencil.svg";
import { useRef } from "react";

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
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 2;

    input {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      opacity: 0; /* Make input invisible */
      cursor: pointer;
      z-index: 1; /* Input is beneath the button */
    }

    img {
      height: 10px;
      z-index: 3;
    }
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
  onEdit?: (e: any) => void;
}) => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  return (
    <StyledAvatar size={size} hasEdit={hasEdit}>
      <img src={image} alt="profile" />
      {hasEdit && (
        <button
          onClick={() => inputFileRef.current && inputFileRef.current.click()}
        >
          <input
            type="file"
            accept="image/*"
            onChange={onEdit}
            ref={inputFileRef}
          />
          <img src={pencil} alt="edit" />
        </button>
      )}
    </StyledAvatar>
  );
};

export default ProfileAvatar;
