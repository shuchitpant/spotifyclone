export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //Remove after developing the app
    // token: null,
    // token: 'BQDeIh96B6E4sk2Dx_RMWACK6SIeINdLffIpECKqjbYXfxQEt30j36edSQW2gkAKztQrt5cuBZTTq7Si6ODtX5R6po-RL0exOgUfn62-IDmlSekOXpQJN9rVD6vpDaS8krlqodWqXohSNchYyUIn1D9_iQZhWCbhnlQp2P75_6EPpUV7',
};

const reducer = (state, action) => {
    console.log(action);

    //ACTION --> type, [payload]
    switch(action.type) {
        case 'SET_USER' : 
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN' :
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,

            }
        
        default : 
            return state;
    }

}

export default reducer;