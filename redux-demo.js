const redux = require('redux');

//Reducer
const counterReducer = (state = {counter: 0},action) => {
    if(action.type == 'increment'){
        return {
            counter:state.counter + 1
        }
    }
    if(action.type == 'decrement'){
        return {
            counter:state.counter - 1
        }
    }
    return state;
};

//Store
const store = redux.createStore(counterReducer);

//Subscriber
const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
};

//Subscribe the subscriber function
store.subscribe(counterSubscriber);

//dispatch an action
store.dispatch({type:"increment"});
store.dispatch({type:"decrement"});