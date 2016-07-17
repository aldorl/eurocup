export const INITIAL_STATE = {
    // winning: {
    //     matchesPlayes: 0,
    //     winner: ''
    // },
    filterText: '',
    display: {
        selection: '',
        matches: []
    },
    ranking: [
        {team: 'germany',       points: 0},
        {team: 'spain',         points: 0},
        {team: 'switzerland',   points: 0},
        {team: 'russia',        points: 0},
        {team: 'belgium',       points: 0},
        {team: 'italy',         points: 0},
        {team: 'france',        points: 0},
        {team: 'england',       points: 0},
    ],
    teams: {
        germany: {
            name: 'Germany', wins: 0, losses: 0, draws: 0, points: 0,
            logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e3/DFBEagle.svg/293px-DFBEagle.svg.png'
        },
        spain: {
            name: 'Spain', wins: 0, losses: 0, draws: 0, points: 0,
            logo: 'https://upload.wikimedia.org/wikipedia/en/3/31/Spain_National_Football_Team_badge.png'
        },
        switzerland: {
            name: 'Switzerland', wins: 0, losses: 0, draws: 0, points: 0,
            logo: 'https://upload.wikimedia.org/wikipedia/de/thumb/5/53/SFV_Logo.svg/500px-SFV_Logo.svg.png'
        },
        russia: {
            name: 'Russia', wins: 0, losses: 0, draws: 0, points: 0,
            logo: 'https://upload.wikimedia.org/wikipedia/en/7/77/Russian_Football_Union.png'
        },
        belgium: {
            name: 'Belgium', wins: 0, losses: 0, draws: 0, points: 0,
            logo: 'https://upload.wikimedia.org/wikipedia/en/f/f5/Belgium_urbsfa.png'
        },
        italy: {
            name: 'Italy', wins: 0, losses: 0, draws: 0, points: 0,
            logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/97/FIGC_logo.svg/356px-FIGC_logo.svg.png'
        },
        france: {
            name: 'France', wins: 0, losses: 0, draws: 0, points: 0,
            logo: 'https://upload.wikimedia.org/wikipedia/fr/6/67/Logo_F%C3%A9d%C3%A9ration_Fran%C3%A7aise_de_Football.svg'
        },
        england: {
            name: 'England', wins: 0, losses: 0, draws: 0, points: 0,
            logo: 'https://upload.wikimedia.org/wikipedia/en/3/38/England_crest_2009.svg'
        }
    },
    matches: [
        {
            matchNumber: 1, status: 'pending', teamScores: {
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
        },
        {
            matchNumber: 5, status: 'pending', teamScores: {
                germany: 0, spain: 0
            }
        },
        {
            matchNumber: 6, status: 'pending', teamScores: {
                switzerland: 0, belgium: 0
            }
        },
        {
            matchNumber: 7, status: 'pending', teamScores: {
                russia: 0, italy: 0
            }
        },
        {
            matchNumber: 8, status: 'pending', teamScores: {
                england: 0, france: 0
            }
        },
        {
            matchNumber: 9, status: 'pending', teamScores: {
                germany: 0, switzerland: 0
            }
        },
        {
            matchNumber: 10, status: 'pending', teamScores: {
                russia: 0, spain: 0
            }
        },
        {
            matchNumber: 11, status: 'pending', teamScores: {
                england: 0, belgium: 0
            }
        },
        {
            matchNumber: 12, status: 'pending', teamScores: {
                france: 0, italy: 0
            }
        }

    ]
};
