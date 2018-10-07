import * as React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { setSaveTrue } from './actions';

interface AdminPageOptionsProps extends RouteComponentProps<any> {
    setSaveTrueAction: typeof setSaveTrue;
}

interface AppMenuProps extends RouteComponentProps<any> {
    setSaveTrueAction: typeof setSaveTrue;
}

const Container = styled.div`
    padding: 20px;
    text-align: right;
`;

const AdminPageOptionsContainer = styled.div``;

const AdminPageOptions = (props: AdminPageOptionsProps) => {
    const { setSaveTrueAction, history } = props;

    const HandleOnCancel = () => {
        history.push('/');
    };

    const HandleOnSave = () => {
        setSaveTrueAction();
    };

    return (
        <AdminPageOptionsContainer>
            <button type="button" onClick={HandleOnCancel}>
                Cancel
            </button>
            <button type="button" onClick={HandleOnSave}>
                Save
            </button>
        </AdminPageOptionsContainer>
    );
};

const AppMenu = (props: AppMenuProps) => {
    const { location } = props;

    return (
        <Container>
            {location.pathname === '/edit' ? (
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
        { setSaveTrueAction: setSaveTrue }
    )(AppMenu)
);
