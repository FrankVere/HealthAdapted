import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <ButtonStyled
      className="buttonstyle-hover click"
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      Log Out
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button`
  margin-top: 7px;
`;

export default LogoutButton;
