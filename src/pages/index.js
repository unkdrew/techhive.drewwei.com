import pic01 from 'assets/images/pic01.jpg'
import pic02 from 'assets/images/pic02.jpg'
import pic03 from 'assets/images/pic03.jpg'
import Banner from 'components/Banner'
import Layout from 'components/layout'
import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Dreezy's Tech Hive"
                    meta={
                        [
                            { name: 'description', content: 'Drew Wei\'s Personal Blog' },
                            { name: 'keywords', content: 'blog, coding, guides' },
                        ]
                    }
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Gadgets</h3>
                                <p>Ipsum dolor sit amet</p>
                            </header>
                            <Link to="/gadgets" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Guides</h3>
                                <p>Coding, etc.</p>
                            </header>
                            <Link to="/guides" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Smart Home</h3>
                                <p>Lorem etiam nullam</p>
                            </header>
                            <Link to="/smart-home" className="link primary"></Link>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Massa libero</h2>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>
                            <ul className="actions">
                                <li><Link to="/landing" className="button next">Get Started</Link></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex
