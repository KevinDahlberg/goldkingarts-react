import React, { Component } from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

//components
import Navbar from './components/Navbar'

//views
import Home from './views/Home'

export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pages: [],
            posts: [],
            settings: {
                title: '',
                description: '',
                header_image: '',
            },
            media: []
        }
    }

    /** DB Methods */
    /**
     * @function fetchSettings
     * @return object of page settings
     * @since 1.0
     */
    fetchSettings() {
        const init ={
            method: 'GET'
        }
        fetch('http://wordpress.goldkingarts.com/wp-json/wp-rest-routes/v2/settings/all', init)
            .then((response) => {
                return response.json()
            })
            .then((settings) => {
                this.setState({settings: settings})
                console.log(this.state)
            })
    }

    /**
     * @function fetchPages
     * @return array of pages
     * @since 1.0
     */
    fetchPages() {
        const init = {
            method: 'GET'
        }
        fetch('http://wordpress.goldkingarts.com/wp-json/wp/v2/pages', init)
        .then((response) => {
            return response.json()
        })
        .then((pages) => {
            this.setState({pages: pages})
            console.log(this.state)
        })
    }

    /**
     * @function fetchImages
     * @return array with images
     * @since 1.0
     * 
     * this function pulls in data from the Wordpress REST API.  Future iterations may use sanitized data created with a different
     * route.  Also, this gets the information for all of the images.  There's a possible change that you could make for the backend
     * to provide only the images needed for the front page.
     */
    fetchImages() {
        const init = {
            method: 'GET'
        }
        fetch('http://wordpress.goldkingarts.com/wp-json/wp/v2/media', init)
        .then((response) => {
            return response.json()
        })
        .then((media) => {
            this.setState({media: media})
            console.log(this.state)
        })
    }


    //gets website parts asap
    componentWillMount() {
        this.fetchSettings()
        this.fetchPages()
        this.fetchImages()
    }

    render() {
        //enables state to be passed down as props in routes for react router v4
        const renderMergedProps = (component, ...rest) => {
            const finalProps = Object.assign({}, ...rest);
            return (
            React.createElement(component, finalProps)
            );
        }
        //enables state to be passed down as props in routes for react router v4
        const PropsRoute = ({ component, ...rest }) => {
            return (
            <Route {...rest} render={routeProps => {
                return renderMergedProps(component, routeProps, rest);
            }}/>
            );
        }

        if (this.state.pages.length === 0){
            return (
                <div className="placeholder" />
            )
        } else {
            return (
                <Router>
                    <div className="body">
                        <div className="wrapper">
                            <Navbar settings={this.state.settings} />
                            <Switch>
                                <PropsRoute path='/home' component={Home} {...this.state} />
                                <PropsRoute path='/' component={Home} {...this.state} />
                            </Switch>
                        </div>
                    </div>
                </Router>
            )
        }
    }
}