export const saveToStorage = function(keyName, object) {
    localStorage.setItem(keyName, JSON.stringify(object));
}

export const getFromStorage = function(keyName) {
    if (localStorage.getItem(keyName) !== null) {
        return JSON.parse(localStorage.getItem(keyName));
    } else return [];
}