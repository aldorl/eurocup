export const INITIAL_STATE = {
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
            matchNumber: 1, roundNumber: 1, status: 'pending', teamScores: {
                germany: 0, belgium: 0
            }
        },
        {
            matchNumber: 2, status: 'pending', teamScores: {
                spain: 0, italy: 0
            }
        },
        {
            matchNumber: 3, status: 'pending', teamScores: {
                switzerland: 0, france: 0
            }
        },
        {
            matchNumber: 4, status: 'pending', teamScores: {
                russia: 0, england: 0
            }
        }
    ]
};
