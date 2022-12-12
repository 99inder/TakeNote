export const fetchLocal = () => {
    const authToken = localStorage.getItem('authToken') !== 'undefined' ? localStorage.getItem('authToken') : localStorage.clear();
    const userInfo = {
        'authToken': authToken
    };
    return userInfo;
}