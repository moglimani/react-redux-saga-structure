import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import App from './containers/App';


const Root = ({ store }) => (
  <Provider store={store}>
  <div>
    <Switch>
        <Route path="/" component={App} exact />
        {/* <Route path="/Home" component={App}/>
        <Route path="/Blog" component={Blog}/>
        <Route path="/Bible" component={Bible}/>
        <Route path="/About" component={About}/>
        <Route path="/PrayerRequest" component={PrayerRequest}/>
        <Route path="/Support" component={SupportUs}/>
        <Route path="/ContactUs" component={ContactUs}/> */}
        
    </Switch>
    </div>
  </Provider>
)

export default Root;
