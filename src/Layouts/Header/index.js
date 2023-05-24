import "./Header.scss";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  MdClear,
  RiSearchLine,
} from "../../icon";
import Button from "../../components/Button/Button";
import { useRef, useState } from "react";
import { useLocation } from "react-router-dom";

function Header() {
  const [searchValue, setSearchValue] = useState("");
  const [activeButtonBack, setActiveButtonBack] = useState(false);
  const [activeButtonForward, setActiveButtonForward] = useState(false);
  const refInput = useRef();
  const location = useLocation();
  let pathName = location.pathname;

  const handleButtonBack = () => {
    if (window.history.state.idx > 0) {
      window.history.back();
      setActiveButtonBack(true);
    } else {
      setActiveButtonBack(false);
    }
    setActiveButtonForward(true);
  };

  const handleButtonForward = () => {
    if (window.history.state.idx + 3 === window.history.length) {
      setActiveButtonForward(false);
    } else {
      window.history.forward();
    }
    setActiveButtonBack(true);
  };

  const handleSearchVale = (e) => {
    setSearchValue(e.target.value);
  };

  const handleButtonDeleteValue = () => {
    setSearchValue("");
    refInput.current.focus();
  };

  return (
    <div className="container-header">
      <div className="header-bar">
        <button
          className={`button-bar back-button ${
            activeButtonBack ? "active" : ""
          }`}
          onClick={handleButtonBack}
        >
          <IoIosArrowBack />
        </button>
        <button
          className={`button-bar forward-button ${
            activeButtonForward ? "active" : ""
          }`}
          onClick={handleButtonForward}
        >
          <IoIosArrowForward />
        </button>
        {pathName === "/search" && (
          <div className="container-search">
            <button className="button-search">
              <RiSearchLine />
            </button>
            <input
              type="text"
              placeholder="Bạn muốn nghe gì?"
              value={searchValue}
              ref={refInput}
              onChange={handleSearchVale}
            />
            {searchValue && (
              <button
                className="button-clear"
                onClick={handleButtonDeleteValue}
              >
                <MdClear />
              </button>
            )}
          </div>
        )}
      </div>

      <div className="button-header">
        <Button className="buttonNormal">
          <span>Đăng ký</span>
        </Button>
        <Button className="buttonNormal buttonPrimary">
          <span>Đăng nhập</span>
        </Button>
      </div>
    </div>
  );
}

export default Header;
