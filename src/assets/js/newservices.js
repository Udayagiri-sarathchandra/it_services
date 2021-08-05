import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import ApplicationDesigning from '../js/distructing/ApplicationDesigning'
import ApplicationDevelopment from '../js/distructing/ApplicationDevelopment'
import MobileApps from '../js/distructing/MobileApp'
export default function destrucing() {
    return (<BrowserRouter>

        <div className="p-5 container">

            <div className="row">

                <div className="col-lg-3">
                    <ul className="list-group">
                        <li className="list-group-item">
                            <Link to="/destrucing/designing">Application Designings</Link>
                        </li>
                        <li className="list-group-item">
                            <Link to="/destrucing/development">Application Development</Link>
                        </li>
                        <li className="list-group-item">
                            <Link to="/destrucing/apps">Mobile Apps </Link>
                        </li>
                    </ul>
                </div>

                <div className="col-lg-9">
                    <Switch>
                        <Route exact path="/destrucing" component={ApplicationDesigning} />
                        <Route path="/destrucing/designing" component={ApplicationDesigning} />
                        <Route path="/destrucing/development" component={ApplicationDevelopment} />
                        <Route path="/destrucing/apps" component={MobileApps} />
                    </Switch>
                </div>

            </div>

        </div>
    </BrowserRouter>)
}