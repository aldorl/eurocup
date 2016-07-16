import React from 'react';
import TabMenu from './tab-menu'
import TabContent from './tab-content';

export default function Tabs ({
    activePath,
    children
}) {
    return (
        <section>

            { /* Render the link menu */ }
            <TabMenu
                activePath={activePath}
                items={{
                    leaderboard   : '/',
                    matches   : '/matches'
                }}
            />

            { /* Render the active route */ }
            <TabContent>
                { children }
            </TabContent>

        </section>
    )
}
