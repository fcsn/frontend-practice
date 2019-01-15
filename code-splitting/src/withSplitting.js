import React, { Component } from 'react';

const withSplitting = getComponent => {
    class WithSplitting extends Component {
        static Splitted = null;
        static preload () {
            // preload 가 호출되면 위 static Splitted가 설정되고
            getComponent().then(({ default: Splitted }) => {
                WithSplitting.Splitted = Splitted;
            });
        }
        state = {
        // 컴포넌트가 생성되는 시점에서 static Splitted 를 사용하게 되므로 null 이나 컴포넌트를 사용하게됨
        Splitted: WithSplitting.Splitted
        };

        constructor (props) {
            super(props);
            getComponent().then(({default: Splitted}) => {
                this.setState({
                    Splitted
                });
            });
        }
        render () {
            const { Splitted } = this.state;
            if (!Splitted) {
                return null;
            }
            return <Splitted {...this.props}/>;
        }
    }
    return WithSplitting;
};

export default withSplitting;
