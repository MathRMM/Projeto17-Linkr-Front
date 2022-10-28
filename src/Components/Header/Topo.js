import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { getLogOut } from "../../Services/SignIn-SignUp/login";

import { ReactComponent as UpVector } from "../imgs/UpVector.svg";
import { ReactComponent as DownVector } from "../imgs/DownVector.svg";

import styled from "styled-components";
import SearchBar from "../searchBar/Search";
import Context from "../../Context";

export default function Topo() {
  const [open, setOpen] = useState(false);

  const [user] = useContext(Context);

  return (
    <Header>
      <Link to="/timeline">
        <h1>linkr</h1>
      </Link>
      <SearchBar />
      <UserViewer userContext={user}>
        <LogoutMenu
          icon={open ? <DownVector /> : <UpVector />}
          openState={open}
          setOpenState={setOpen}
        >
          <DropDown />
        </LogoutMenu>

        <img src={user.image} onClick={() => setOpen((current) => !current)} />
      </UserViewer>
    </Header>
  );
}

function LogoutMenu({ icon, openState, setOpenState, children }) {
  const open = openState;
  const setOpen = setOpenState;

  return (
    <>
      <a href="#" onClick={() => setOpen((current) => !current)}>
        {icon}
      </a>

      {open && children}
    </>
  );
}

function DropDown() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useContext(Context);

  const navigate = useNavigate();

  function handleLogout() {
    if (loading) return;
    setLoading((current) => true);
    getLogOut(user.token)
      .then((res) => {
        localStorage.removeItem("token");
        setUser((current) => {});
        setLoading((current) => false);
        navigate("/");
        window.location.reload();
        return;
      })
      .catch((e) => {
        localStorage.removeItem("token");
        setUser((current) => {});
        navigate("/");
        window.location.reload();
        console.log(e);
      });
  }

  return (
    <div className="drop-down">
      <span onClick={handleLogout}>Logout</span>
    </div>
  );
}

const UserViewer = styled.header`
  display: relative;
  margin-right: 2rem;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  svg {
    width: 2rem;
    height: 2rem;
    margin-bottom: 1.5rem;
    margin-right: 1.5rem;
  }

  img {
    width: 5.3rem;
    height: 5.3rem;
    border-radius: 2.65rem;
    margin-right: 1.7rem;
    cursor: pointer;
  }

  .drop-down {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 7rem;
    width: 15rem;
    height: 5rem;
    background-color: #151515;
    color: white;
    font-size: 1.8rem;
    font-weight: 400;
    padding: 1rem;
    border-radius: 0 0 10px 10px;
    transition: background 300;
  }

  .drop-down span {
    cursor: pointer;
  }
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;

  width: 100%;
  height: 7.2rem;

  top: 0;
  right: 0;

  background-color: #151515;

  a {
    text-decoration: none;
  }

  h1 {
    font-family: "Passion One";
    font-style: normal;
    font-weight: 700;
    font-size: 4.9rem;

    margin-left: 2.8rem;

    color: #ffffff;
  }
`;
