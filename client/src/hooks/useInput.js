import React, { useState } from 'react'

function useInput(initialValue) {
   const [value, setValue] = useState(initialValue);
   const valueOnChange = (e) => setValue(e.target.value)

   return [value, valueOnChange]
}

export {
   useInput
}