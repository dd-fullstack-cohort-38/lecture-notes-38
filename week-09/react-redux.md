## Redux with Express misquote code walkthrough
- Redux is separate from React
    - React uses `frontend/src/ui`
    - Redux uses `frontend/src/store`

### Set up our codebase to use Redux store
- Create a `frontend/src/store/misquote.js` file
  ```js
  import {createSlice} from '@reduxjs/toolkit'
  import {httpConfig} from "../utils/httpConfig"

  // Define our reducer and action.
  const misquoteSlice = createSlice({
    name: "misquote",
    initialState: [],
    reducers: {
        getAllMisquotes: (misquotes, action) => {
            return action.payload
        },
    },
  })

  // Make our actions callable as function getAllMisquotes. 
  export const {getAllMisquotes} = misquoteSlice.actions

  // We use export default here so that if something imports this file, they will get it by default
  export default misquoteSlice.reducer
  ```
- Create `frontend/src/utils/httpConfig.js`
  ```js
  import axios from "axios";

  export const httpConfig = axios.create();
  
  httpConfig.interceptors.response.use(function ({data, headers}) {
    if (data.status === 200) {
      return data.data !== null
        ? {message: null, data: data.data, status: 200, type: " alert alert-success", headers: {...headers}}
        : {message: data.message, status: 200, type: " alert alert-success", data: null, headers: {...headers}};
    }
    return {message: data.message, status: data.status, type: "alert alert-danger", data: null, headers: {...headers}}
    
  }, function (error) {
    // Do something with response error
    console.log(error);
    return Promise.reject(error);
  });
    
  httpConfig.interceptors.request.use(
    (config) => {
      
      // Attach our authorization via JWT token.  
      const authorization = window.localStorage.getItem("authorization")
      if (authorization) {
        config.headers['authorization'] = authorization
      }
      return config
    }, (error) => {
      // Do something with response error
      console.log(error);
      return Promise.reject(error);
    }
  )
  ```
    - axios is like improved `fetch()`
        - we can modify returned request
- Add line to .gitignore to ignore the next file we are going to create
    - `*/setupProxy.js`
- Create `frontend/src/setupProxy.js`
  ```js
  const { createProxyMiddleware } = require('http-proxy-middleware');

  module.exports = function(app) {
    app.use(createProxyMiddleware('/apis', {
      logLevel: 'debug',
      //Change this to your backend, e.g. http://123.432.653.21:8080
      target: "http://gkephart.uss-hopper.site:8080",
      changeOrigin: true,
      secure: true,
    }));
  };
  ```
    - Change the backend to match your dev server's backend
    - **Make sure you correctly have this in your .gitignore so that you don't commit this**
        - If you don't, your team members will connect to your backend instead of their own
- Test what you've done so far
    - Run `npm run start` in your terminal
    - Visit `localhost:3000/apis/misquote` and you will see your data from your backend

### Adapt our Redux info to a component
- Add an export to our `misquote.js` file
    - Add this code below your `{getAllMisquotes}` export and above your `export default`
  ```js
  // Create an export to allow async calls to our action
  export const fetchAllMisquotes = () => async dispatch => {
    const {data} = await httpConfig(`/apis/misquote/`)
    dispatch(getAllMisquotes(data))
  }
  ```
    - using `=> callback =>` syntax is called [currying](https://javascript.info/currying-partials)
        - allows us to chain functions in succession
        - passes arguments down the chain from function to function
- Update `frontend/src/store/index.js`
  ```js
  import misquotes from "./misquote"
  import {combineReducers, configureStore} from "@reduxjs/toolkit";
  
  const reducer =  combineReducers({misquotes})
  
  export const store = configureStore({reducer})
  ```
- Add `frontend/src/ui/App.js`
    - This is typical App.js with Redux imported and the store wrapping our components.
```jsx
  // Import basic front-end tools.
  import React from "react";
  import 'bootstrap/dist/css/bootstrap.css';
  import {BrowserRouter, Route, Routes} from "react-router-dom";
  import "../index.css";

  // Import icons we use in our components.
  import {library} from '@fortawesome/fontawesome-svg-core'
  import {
    faEnvelope,
    faPencilAlt,
    faSignInAlt,
    faSortDown,
    faUserCircle,
    faDog
  } from "@fortawesome/free-solid-svg-icons";
  import {faKey} from "@fortawesome/free-solid-svg-icons/faKey";
  
  // Import our custom components
  import {NavBar} from "./shared/components/NavBar";
  import {Posts} from "./posts/Posts";
  import {AboutUs} from "./AboutUs";
  import {Home} from "./Home";
  import {FourOhFour} from "./FourOhFour";

  // Import react-redux so we can use the store.
  import {Provider} from "react-redux";
  
  library.add(faPencilAlt, faUserCircle, faSortDown, faEnvelope, faSignInAlt, faKey, faDog );
  
   // Add store to our export so that we can pass values. 
  export function  App(store)  {
	return(
    <Provider store={store}>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<FourOhFour />} />
      </Routes>
    </BrowserRouter>
  </Provider>
  )
};

```
- Create a new `frontend/src/ui/posts` directory
- Move `./frontend/src/ui/Posts.js` to `./frontend/src/ui/posts/Posts.js`
- Add our data to our frontend component in `frontend/src/ui/posts/Posts.js`
    - Add imports
      ```js
      import { fetchAllMisquotes } from '../../store/misquote'
      import { useDispatch, useSelector } from 'react-redux'
      ```
    - In the Posts Component dispatch fetchAllMisquotes thunk in useEffect and grab misquotes from redux using useSelector
      ```js
      export const Posts = () => {
        
        // Tell this component that it needs to watch for items that live outside of this component.
        // This is how we make sure this component looks for our data from Redux's call to the backend.
        const dispatch = useDispatch()
        const initialEffects = () => {
          dispatch(fetchAllMisquotes())
        }
        React.useEffect(initialEffects, [dispatch])
  
        // Render our misquotes constant - before we have our data, render the skeleton.
        // After we have our data, render the full object with our data.
        const misquotes = useSelector((state) => state.misquotes ? state.misquotes : [])
      ```
    - If you did this correctly, when you visit localhost:3000/posts and look at your console, you'll see two logs - one from before you got your data, one afterwards.

- Create a new `frontend/src/ui/posts/PostCard.js` component
```jsx
import React from 'react'
import { Card, Col } from 'react-bootstrap'

export const PostCard = ({misquote}) => {
  console.log(misquote)
  return(
    <Col>
      <Card className=" h-100 card text-center">
        <div className="card-body">
          <Card.Title>{misquote.misquoteAttribution}</Card.Title>
          <Card.Text >
            {misquote.misquoteContent}  
            <small className="text-muted">{misquote.misquoteSubmitter}</small>
          </Card.Text>
        </div>
      </Card>
    </Col>
  )
}
```

  - Replace markup for static card in `./frontend/src/posts/Posts.js` with a map function that creates as many PostCard components as objects in the array returned by `const misquotes = useSelector((state) => state.misquotes ? state.misquotes : [])`

    ```jsx
    <Row className=" py-3 row-cols-1 row-cols-md-3 g-4">
      {misquotes.map(misquote => <PostCard misquote={misquote} key={misquote.id}/>)}
    </Row>
    ```

## Recommended Reading
- [What Is Redux: A Designer's Guide - Smashing Magazine](https://www.smashingmagazine.com/2018/07/redux-designers-guide/)
