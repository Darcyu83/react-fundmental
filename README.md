# React Inputs and each Values Control.

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
