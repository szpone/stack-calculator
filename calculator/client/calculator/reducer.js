

export function push(num) {
    return {
        type: 'PUSH',
        num,
    }
}

export function add() {
    return {
        type: 'ADD',
    }
}

export function mul() {
    return {
        type: 'MUL',
    }
}


export function reducer(state = [], action) {
    state = state.slice();
    switch(action.type) {
        case 'PUSH':
            state.push(action.num);
            return state;
        case 'ADD': {
            const a = state.pop();
            const b = state.pop();
            state.push(a + b);
            return state;
        }
        case 'MUL': {
            const a = state.pop();
            const b = state.pop();
            state.push(a * b);
            return state;
        }
        default:
            return state;
    }
}
