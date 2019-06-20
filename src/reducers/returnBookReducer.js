///src/redux/reducers.js
export default store;

const defaultState={
    inputValue:'',
    list:[1,2]
}

export default(state=defaultState,action)=>{
    if(action.type==='change_input_value'){
        const newState=JSON.parse(JSON.stringify(state))
        newState.inputValue=action.inputValue;
        return newState;
    }
    if(action.type==='send_message'){
        const newState=JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue);
        newState.inputValue='';
        return newState;
    }
    if(action.type==='delete_message'){
        const newState=Object.assign({},state);
        newState.list.splice(action.index,1);
        return newState;
    }
    return state;
}
