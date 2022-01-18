# React fundmental tutorial

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

## Make a hook , useInputs

## Context API

0. structure of data : [ {}, {} , {} ]

1. create a state of users

type T_User = {
id: number;
username : string;
email : string;
}

type T_Users = T_User[];

export const UserStateContext = createContext<T_Users | undefined>(undefined);

2. create a state of user dispatch

type T_Action =
{ type : "CREACT_USER" , user: T_User},
{ type : "DELETE_USER" , id: number},
{ type : "MODIFY_USER" , user: T_User},
}

type T_UserDispatch = Dispatch<T_Action>;
const UserDispatchContext = createContext<T_UserDispatch | undefined>(undefined);
