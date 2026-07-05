import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "../Link/link";
import { type PageProps } from "../../shared/types";
import useMediaQuery from "../../hooks/useMediaQuery";
import "./navbar.css";

const Navbar = ({ selectedPage, setSelectedPage }: PageProps) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 600px)");

  const handleSelect = () => {
    setSelectedPage(selectedPage!);
    setIsMenuToggled(!isMenuToggled);
  };

  return (
    <nav>
      <div className="navbar">
        <div className="navbar-container">
          {/* Desktop Navigation */}
          {isAboveMediumScreens && selectedPage ? (
            <div className="nav-links">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              {/* <Link
                page="Our Story"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              /> */}
              <Link
                page="The Details"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              {/* <Link
                page="Registry"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              /> */}
              <Link
                page="FAQS"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="RSVP"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          ) : (
            // Mobile Menu Button
            <div className="menu-button-container">
              <button
                className="menu-button"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="menu-icon" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {!isAboveMediumScreens && selectedPage && (
        <div className={`mobile-menu ${isMenuToggled ? "open" : ""}`}>
          <div className="close-button-container">
            <button onClick={() => setIsMenuToggled(false)}>
              <XMarkIcon className="close-icon" />
            </button>
          </div>

          <div className="mobile-menu-items">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={handleSelect}
            />
            {/* <Link
              page="Our Story"
              selectedPage={selectedPage}
              setSelectedPage={handleSelect}
            /> */}
            <Link
              page="The Details"
              selectedPage={selectedPage}
              setSelectedPage={handleSelect}
            />
            <Link
              page="Registry"
              selectedPage={selectedPage}
              setSelectedPage={handleSelect}
            />
            <Link
              page="FAQS"
              selectedPage={selectedPage}
              setSelectedPage={handleSelect}
            />
            <Link
              page="RSVP"
              selectedPage={selectedPage}
              setSelectedPage={handleSelect}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
