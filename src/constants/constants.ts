import {
  QuickTransferType,
  TabsType,
} from "../models";
import livia from "../assets/icons/livia.svg";
import randy from "../assets/icons/randy.svg";
import workman from "../assets/icons/workman.svg";
import styled from "styled-components";
const tabs: TabsType[] = [
  {
    id: 1,
    name: "Edit Profile",
    icon: "edit",
    isDisabled: false,
  },
  {
    id: 2,
    name: "Preferences",
    icon: "preferences",
    isDisabled: true,
  },
  {
    id: 3,
    name: "Security",
    icon: "security",
    isDisabled: true,
  },
];

const quickTransfer: QuickTransferType[] = [
  {
    name: "Livia Bator",
    image: livia,
    role: "CEO",
  },
  {
    name: "Randy Press",
    image: randy,
    role: "Director",
  },
  {
    name: "Workman",
    image: workman,
    role: "Designer",
  },
];

const StyledLoading = styled.div`
  background-color: var(--white);
  height: 250px;
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 25px;
  width: 100%;
  min-width: 350px;
  @media (max-width: 1250px) {
    width: 100%;
    max-width: 100%;
  }
`;
export { tabs, quickTransfer, StyledLoading };
