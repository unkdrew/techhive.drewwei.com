import 'assets/scss/main.scss'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Menu from 'components/Menu'
import React from 'react'

class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isMenuVisible: false,
            loading: 'is-loading'
        }
        this.handleToggleMenu = this.handleToggleMenu.bind(this)
    }

    componentDidMount () {
        this.timeoutId = setTimeout(() => {
            this.setState({loading: ''});
        }, 100);
    }

    componentWillUnmount () {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
    }

    handleToggleMenu() {
        this.setState({
            isMenuVisible: !this.state.isMenuVisible
        })
    }

    render() {
        const { children } = this.props

        return (
            <div className={`body ${this.state.loading} ${this.state.isMenuVisible ? 'is-menu-visible' : ''}`}>
                <div id="wrapper">
                    <Header onToggleMenu={this.handleToggleMenu} />
                    {children}
                    <Footer />
                </div>
                <Menu onToggleMenu={this.handleToggleMenu} />
            </div>
        )
    }
}

export default Layout
