import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { push, add, mul } from '../calculator/reducer';

class CalculatorComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { num: '' };
    }

    render() {
        const {stack, onPush, onAdd, onMul} = this.props;
        return (
            <div>
                <ul>
                    {stack.map((num, i) => <li key={i}>{num}</li>)}
                </ul>
                <input type="text" value={this.state.num} onChange={
                    event => this.setState({num: event.target.value})}/>
                <button onClick={() => {
                    onPush(parseInt(this.state.num, 10));
                    this.setState({num: ''});
                }}>push</button>
                <button onClick={onAdd}>+</button>
                <button onClick={onMul}>*</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        stack: state,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onPush(num) {
            dispatch(push(num));
        },
        onAdd() {
            dispatch(add());
        },
        onMul() {
            dispatch(mul());
        },
    }
}

const Calculator = connect(
  mapStateToProps,
  mapDispatchToProps
)(CalculatorComponent);

export default Calculator;
