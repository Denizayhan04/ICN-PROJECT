
import { sendRequest } from './api.js'; 
import { isValidJSON } from './utils.js';
import * as UI from './ui.js';

const sessionHistory = []; //it get reset every restarting


UI.sendBtn.addEventListener('click', async () => {
    
    const { url, method, body } = UI.getInputValues();

    if (!url) {
        UI.showAlert("Please enter a URL!");
        return;
    }

    if (method !== 'GET' && method !== 'DELETE' && !isValidJSON(body)) {
        UI.showAlert("Invalid JSON format!");
        return;
    }

    UI.showLoader();

    const requestBody = (body && method !== 'GET') ? body : null;
    

    const result = await sendRequest(url, method, requestBody);


    UI.renderResponse(result);


    sessionHistory.push({
        time: new Date().toLocaleString(),
        url: url,
        method: method,
        status: result.status,
        response: result.data
    });
});


UI.downloadBtn.addEventListener('click', () => {
    
    if (sessionHistory.length === 0) {
        alert("No history to download yet!");
        return;
    }


    const dataStr = JSON.stringify(sessionHistory, null, 4);


    const blob = new Blob([dataStr], { type: 'application/json' });
    

    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'query_history.json'; 
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});