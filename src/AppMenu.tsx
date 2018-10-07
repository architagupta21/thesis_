import * as React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter, Link } from "react-router-dom";
import { setSaveTrue } from "./actions";

interface AdminPageOptionsProps extends RouteComponentProps<any> {
  setSaveTrue: typeof setSaveTrue;
}

interface AppMenuProps extends RouteComponentProps<any> {
  setSaveTrue: typeof setSaveTrue;
}

const Container = styled.div`
  padding: 20px;
  text-align: right;
`;

const AdminPageOptionsContainer = styled.div``;

const AdminPageOptions = (props: AdminPageOptionsProps) => {
  const { setSaveTrue, history } = props;
  return (
    <AdminPageOptionsContainer>
      <button
        type="button"
        onClick={() => {
          history.push("/");
        }}
      >
        Cancel
      </button>
      <button
        type="button"
        onClick={() => {
          setSaveTrue();
        }}
      >
        Save
      </button>
    </AdminPageOptionsContainer>
  );
};

const AppMenu = (props: AppMenuProps) => {
  const { location } = props;

  return (
    <Container>
      {location.pathname === "/edit" ? (
        <AdminPageOptions {...props} />
      ) : (
        <Link to="/edit">
          <button type="button">Edit LTI App</button>
        </Link>
      )}
    </Container>
  );
};

export default withRouter(
  connect(
    () => ({
      // mapStateToProps
    }),
    { setSaveTrue }
  )(AppMenu)
);
