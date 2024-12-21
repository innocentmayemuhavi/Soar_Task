import styled from "styled-components";
import SideBar from "../components/sidebar";
import Header from "../components/header";
import { useWindowWidth } from "../utils";
import Overlay from "../components/overlay";
import { useContext } from "react";
import { CoreContext } from "../context";
import { LineLoader } from "../components/lineloader";

const StyledLayout = styled.section`
  background-color: #f5f5f5;

  .layout {
    display: flex;
    position: relative;
  }
  .layout-content {
    padding: 0px;
    flex: 1;
    height: 100vh;
    overflow-y: auto;
    position: relative;
  }

  /* Media queries */
  @media (min-width: 768px) {
    .show-mobile {
      display: none;
    }
    .show-desktop {
      display: flex;
    }
  }

  @media (max-width: 767px) {
    .show-mobile {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 20px;
      padding: 30px;
      text-align: center;
      height: 100vh;
    }
    .layout-content {
      background-color: var(--white);
    }

    .show-desktop {
      display: none;
    }
  }
`;

const Layout = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { showSideBar, setShowSideBar } = useContext(CoreContext);

  return (
    <>
      <StyledLayout>
        <section className={`layout  `}>
          <SideBar />

          {showSideBar && useWindowWidth() <= 767 && (
            <Overlay
              onClicked={() => {
                setShowSideBar(false);
              }}
            >
              <SideBar />
            </Overlay>
          )}
          <section className="layout-content">
            <Header />
            {children}
          </section>
        </section>
      </StyledLayout>
    </>
  );
};

export default Layout;
