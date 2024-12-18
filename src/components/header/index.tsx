import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getHeaderTitle, useWindowWidth } from "../../utils";
import DesktopHeader from "./desktop";
import MobileHeader from "./mobile";

const Header = () => {
  const location = useLocation();
  const [title, setTitle] = useState("Overview");
  useEffect(() => {
    setTitle(getHeaderTitle(location.pathname));
  }, [location]);

  return useWindowWidth() >= 768 ? (
    <DesktopHeader title={title} />
  ) : (
    <MobileHeader title={title} />
  );
};

export default Header;
