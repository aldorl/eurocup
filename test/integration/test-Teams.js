import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import shallowTestUtils from 'react-shallow-testutils';
import expect from 'expect';
import TeamDisplay from '../../src/components/teams/TeamDisplay';
import TeamLogo from '../../src/components/teams/TeamLogo';

describe('Team Display', () => {
    let shallowRenderer = ReactTestUtils.createRenderer();

    const display = {
        selection   : 'germany',
        matches     : [{
            matchNumber: 1, status: 'pending', teamScores: {
                germany: 0, spain: 0
            }
        }]
    };
    const teams = {
        germany: {
            name: 'Germany', wins: 0, losses: 0, draws: 0, points: 0,
            logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e3/DFBEagle.svg/293px-DFBEagle.svg.png'
        },
        spain: {
            name: 'Spain', wins: 0, losses: 0, draws: 0, points: 0,
            logo: 'https://upload.wikimedia.org/wikipedia/en/3/31/Spain_National_Football_Team_badge.png'
        }
    };

    it('should render a row for display', () => {
        shallowRenderer.render(<TeamDisplay display={display} teams={teams} />);
        let renderedElement = shallowRenderer.getRenderOutput();
        expect(renderedElement.props.className).toEqual('row');
    });
});
