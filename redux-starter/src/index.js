import configureStore from "./store/configureStore"



import * as actions from "./store/bugs"
import {projectAdded} from "./store/project"
const store = configureStore()

store.dispatch(actions.bugAdded({description: "Bug 1"}))
// store.dispatch(bugAdded("Bug 2"))
// store.dispatch(bugAdded("Bug 3"))
// store.dispatch(bugAdded("Bug 4"))
store.dispatch(actions.bugResolved({id: 1}))

store.dispatch(projectAdded({name: "Brown"}))


const unsubscribe = store.subscribe(()=> {
    console.log("Store changed!", store.getState())
})




// unsubscribe();


// import store from './customStore'
// import * as actions from "./actions"
// store.subscribe(() => {
//     console.log("changed")
// })
// store.dispatch(actions.bugAdded("Bug adsfasdfa1"))

// console.log(store.getState())
