import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

class UsersPage extends React.Component {
    state = {
        user: this.props.user,
        id: this.props.match.params.id,
    }

    // componentDidUpdate(prevProps) {
    //     // Typical usage (don't forget to compare props):
    //     if (this.props.userID !== prevProps.userID) {
    //         this.fetchData(this.props.userID);
    //     }
    // }

    componentDidMount (prevProps) {
        const { params } = this.props.match
        const { Actions } = this.props;
        // /users/userName 이 아닌 다른 router에서 왔을 경우 prevProps가 없기 때문에 최초의 userName을 쓴다.
        if (!prevProps) {
            Actions.fetchUser(params.id);
        }
    }

    static getDerivedStateFromProps (props, state) {
        // /users/userName에서 userName만 바뀌면 userName의 전 후 바뀜을 비교하여 action을 새로 던진다.
        if (props.match.params.id !== state.id) {
            const { params } = props.match
            const { Actions } = props;
            Actions.fetchUser(params.id);
            return {
                id: props.match.params.id,
            }
        }
        return null;
    }

    render() {
        const { params } = this.props.match
        const { user } = this.props
        return (
            <div>
                <span>{JSON.stringify(user)}</span>
            </div>
        )
    }
}

export default connect(
    state => ({
        user: state.user,
    }),
    dispatch => ({
        Actions: bindActionCreators(actions, dispatch)
    })
)(UsersPage);
