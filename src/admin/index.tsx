import * as React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { setCountDefault, setSaveFalse } from "../actions";
import { RootState } from "../reducers";

interface AdminProps extends RouteComponentProps<any> {
  save: boolean;
  defaultCount: number;
  setSaveFalse: typeof setSaveFalse;
  setCountDefault: typeof setCountDefault;
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
      defaultCount: props.defaultCount.toString()
    };

    this.save = this.save.bind(this);
  }

  componentDidMount() {
    const { setSaveFalse } = this.props;

    setSaveFalse();
  }

  componentDidUpdate() {
    const { save } = this.props;
    if (save) this.save();
  }

  save() {
    const { setCountDefault, history } = this.props;
    const { defaultCount } = this.state;

    setCountDefault(parseInt(defaultCount, 10));
    history.push("/");
  }

  render() {
    const { defaultCount } = this.state;
    return (
      <Container>
        Default Count Value:
        <DefaultCountInput
          type="number"
          value={defaultCount}
          onChange={event => {
            this.setState({
              defaultCount: event.target.value
            });
          }}
        />
      </Container>
    );
  }
}

export default withRouter(
  connect(
    (state: RootState) => ({
      save: state.save,
      defaultCount: state.defaultCount
    }),
    { setCountDefault, setSaveFalse }
  )(Admin)
);
