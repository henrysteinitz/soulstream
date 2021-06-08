import { Component } from 'React'
import { BrowserRouter as Router, Link, Route } from 'react-router'

export class Tabs extends Component {
    render() {
        const { tabs } = this.props
        const { title, pages } = tabs 
        return (
            <div className="tabs-container">
                <Router>
                { pages.map((page, i) => (
                    <div>
                        <Link to={title[i]} />
                        <Route key={i}>
                            { page }
                        </Route>
                    </div> )
                }
                </Router>
            </div>
        )
    }
}
