import React from 'react';
import { connect } from 'react-redux';
import CodeBlock from '../components/common/code-block';
import HeroHeading from '../components/common/hero-heading';
import Tabs from '../components/tabs/tabs';
import Panel from '../components/common/panel';
import Footer from '../components/common/footer';

function App ({
    children,
    state,
    location
}) {
    return (
        <section style={style.wrapper}>

            <HeroHeading
                title="EuroCup Tourney"
                subtitle="Built on React JS"
            />

            <section style={style.container}>

                { /* Render router example */ }
                <Panel
                    faIcon="link"
                    style={style.panel}
                    title="Click away dearies" >
                    <Tabs activePath={location.pathname} >
                        { children }
                    </Tabs>
                </Panel>

                { /* Render Redux state */ }
                <Panel
                    faIcon="tree"
                    style={style.panel}
                    title="Redux State" >
                    <CodeBlock code={state} />
                </Panel>


            </section>

        </section>
    )
}

const style = {
    wrapper: {
        width: '100%'
    },
    container: {
        width: '100%',
        minWidth: 450,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    column: {
        display: 'flex',
        flexDirection: 'column'
    },
    panel: {
        // width: 800
    }
};

export default connect(
    (state) => ({ state })
)(App);
