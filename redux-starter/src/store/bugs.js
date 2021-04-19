import { createSlice } from "@reduxjs/toolkit";
let lastID = 0
const slice = createSlice({
  name: "bugs",
  initialState: [],
  reducers: {
    bugAdded: (bugs, action) => {
      bugs.push({
        id: ++lastID,
        description: action.payload.description,
        resloved: false,
      });
    },
    bugResolved: (bugs, action) => {
        
            const index = bugs.findIndex(bug => bug.id === action.payload.id)
            bugs[index].resloved = true

       
    }
  },
});
export const {bugAdded, bugResolved } = slice.actions
export default slice.reducer



// let lastID = 0;

// export default function reducer(state = [], action) {
//   switch (actions.type) {
//     case bugAdded.type:
//       return [
//         ...state,
//         {
//           id: ++lastID,
//           description: action.payload.description,
//           resloved: false,
//         },
//       ];

//     // case actions.BUG_REMOVED:
//     //     return state.filter(bug => bug.id !== action.payload.id);

//     case actions.type:
//       return state.map((bug) =>
//         bug.id !== action.payload.id ? bug : { ...bug, resloved: true }
//       );

//     default:
//       return state;
//   }
// }
