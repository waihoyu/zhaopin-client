import React from 'react'
import  ReactDOM from 'react-dom'
import  {Button} from 'antd-mobile'
import {Provider} from 'react-redux'
import store from './redux/store'
/*入口 JS
*/
import {HashRouter, Switch, Route} from 'react-router-dom'
import Login from './containers/login/login'
import Register from './containers/register/register'
import Main from './containers/main/main'
ReactDOM.render((
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route path='/login' component={Login}/>
                <Route path='/register' component={Register}/>
                <Route component={Main}/>
            </Switch>
        </HashRouter>
    </Provider>
), document.getElementById('root'))
