import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { setCountDefault, setSaveFalse } from '../actions';
import { RootState } from '../reducers';

interface AdminProps extends RouteComponentProps<any> {
    save: boolean;
    defaultCount: number;
    setSaveFalseAction: typeof setSaveFalse;
    setCountDefaultAction: typeof setCountDefault;
}

interface AdminState {
    defaultCount: string;
}

const Container = styled.div`
    padding: 20px;
    border: 1px solid lightblue;
`;

const DefaultCountInput = styled.input`
    margin-left: 10px;
`;

class Admin extends React.Component<AdminProps, AdminState> {
    constructor(props: AdminProps) {
        super(props);

        this.state = {
            defaultCount: props.defaultCount.toString(),
        };

        this.save = this.save.bind(this);
        this.handleDefaultCountOnSave = this.handleDefaultCountOnSave.bind(
            this
        );
    }

    public componentDidMount() {
        const { setSaveFalseAction } = this.props;

        setSaveFalse();
    }

    public componentDidUpdate() {
        const { save } = this.props;
        if (save) {
            this.save();
        }
    }

    public save() {
        const { setCountDefaultAction, history } = this.props;
        const { defaultCount } = this.state;

        setCountDefault(parseInt(defaultCount, 10));
        history.push('/');
    }

    public render() {
        const { defaultCount } = this.state;
        return (
            <Container>
                Default Count Value:
                <DefaultCountInput
                    type="number"
                    value={defaultCount}
                    onChange={this.handleDefaultCountOnSave}
                />
            </Container>
        );
    }

    private handleDefaultCountOnSave(
        event: React.ChangeEvent<HTMLInputElement>
    ) {
        this.setState({
            defaultCount: event.target.value,
        });
    }
}

export default withRouter(
    connect(
        (state: RootState) => ({
            defaultCount: state.defaultCount,
            save: state.save,
        }),
        {
            setCountDefaultAction: setCountDefault,
            setSaveFalseAction: setSaveFalse,
        }
    )(Admin)
);
