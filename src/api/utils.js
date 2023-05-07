export function getApiUrl() {
    const {hostname} = window.location;
    if(hostname === "localhost") {
        return "http://localhost:3001/"
    }
    return "https://chat-freely.onrender.com/"
}