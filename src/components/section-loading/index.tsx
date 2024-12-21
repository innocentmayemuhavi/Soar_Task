import SyncLoader from "react-spinners/SyncLoader";
import { StyledLoading } from "../../constants/constants";

const SectionLoader = () => {
  return (
    <StyledLoading>
      <SyncLoader />
    </StyledLoading>
  );
};

export default SectionLoader;
