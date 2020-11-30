//https://developer.spotify.com/documentation/web-playback-sdk/

export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientid = "5f78c8d74387405fa9ea0e4ae2860bb7";

const scope = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
];


export const GetTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split("&")
        .reduce((initial, item) => {
            let parts = item.split("=");
            initial[parts[0]]=decodeURIComponent(parts[1]);

            return initial;
        }, {} );
} 

export const loginUrl = `${authEndpoint}?client_id=${clientid}&redirect_uri=${redirectUri}&scope=${scope.join("%20")}&response_type=token&show_dialog=true`;