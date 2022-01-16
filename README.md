# React Inputs and each Values Control.

## Control states in a way by keeping immutable principles.

1. Create / register new item : return []

   setDataCreated(
   currState:[] => ([...currState, {new Object}])
   )

2. Read / Get specific data
   setSpecificData(
   currState:[] => currState.filter(itm => itm.id===id)
   )

3. Update / Modify item values

   setDataUpdated(
   currState:[] =>
   currState.map(itm =>
   itm.id === id? {...itm, value : newvalue }: itm)
   )

4. Delete item
   setDataUpdated(currState =>
   currState.filter(itm => itm.id !== id)
   )

## useMomo

usage :
useMemo(func , [variables]);

## useReducer

usage :
const [state, dispatch] = useReducer(reducer, initialState)

const state = {value : 0 }
const action = {type: 'INCREMENT' , payload : 0};

function reducer(state, action){
switch(action.type){

case "INCREMENT" :
return {value : state.value + 1}

}
return nextState;
}

dispatch(action) to invoke reducer
