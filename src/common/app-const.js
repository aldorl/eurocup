export const INITIAL_STATE = {
    model: {
        fooEntity: {},
        barEntity: {}
    },
    counter: 0,
    teams: {
        germany: {
            name: 'Germany', wins: 0, loses: 0, draws: 0, points: 0
        },
        spain: {
            name: 'Spain', wins: 0, loses: 0, draws: 0, points: 0
        },
        switzerland: {
            name: 'Switzerland', wins: 0, loses: 0, draws: 0, points: 0
        },
        russia: {
            name: 'Russia', wins: 0, loses: 0, draws: 0, points: 0
        },
        belgium: {
            name: 'Belgium', wins: 0, loses: 0, draws: 0, points: 0
        },
        italy: {
            name: 'Italy', wins: 0, loses: 0, draws: 0, points: 0
        },
        france: {
            name: 'France', wins: 0, loses: 0, draws: 0, points: 0
        },
        england: {
            name: 'England', wins: 0, loses: 0, draws: 0, points: 0
        }
    },
    matches: [
        {
            matchNumber: 1, roundNumber: 1, status: 'notPlayed', teamScores: {
                germany: null, belgium: null
            }
        },
        {
            matchNumber: 2, status: 'notPlayed', teamScores: {
                spain: null, italy: null
            }
        },
        {
            matchNumber: 3, status: 'notPlayed', teamScores: {
                switzerland: null, france: null
            }
        },
        {
            matchNumber: 4, status: 'notPlayed', teamScores: {
                russia: null, england: null
            }
        }
    ]
};
