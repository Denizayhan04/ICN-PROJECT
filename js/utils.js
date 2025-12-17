export function isValidJSON(text) {
    if (!text) return true; 
    try {
        JSON.parse(text);
        return true;
    } catch (error) {
        return false;
    }
}


export function formatJSON(data) {
    return JSON.stringify(data, null, 4); 
}