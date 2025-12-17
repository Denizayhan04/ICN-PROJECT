import { formatJSON } from './utils.js';

const urlInput = document.getElementById('my-url');
const methodSelect = document.getElementById('my-method');
const jsonInput = document.getElementById('body-text');
const responseOutput = document.getElementById('output-text');
const statusBadge = document.getElementById('status-tag');

export const sendBtn = document.getElementById('btn-send');
export const downloadBtn = document.getElementById('btn-save');

export function getInputValues() {
    return {
        url: urlInput.value,
        method: methodSelect.value,
        body: jsonInput.value.trim()
    };
}

export function showLoader() {
    responseOutput.textContent = "Loading...";
    statusBadge.textContent = "...";
    statusBadge.className = "my-badge"; 
    sendBtn.disabled = true;
}

export function renderResponse(result) {
    sendBtn.disabled = false;

    if (result.success) {
        const isSuccess = result.status >= 200 && result.status < 300;
        statusBadge.className = `my-badge ${isSuccess ? 'ok' : 'fail'}`;
        statusBadge.textContent = `Status: ${result.status} (${result.duration}ms)`;
        responseOutput.textContent = formatJSON(result.data);
    } else {
        statusBadge.className = 'my-badge fail';
        statusBadge.textContent = 'ERROR';
        responseOutput.textContent = `Request failed: ${result.error}`;
    }
}

export function showAlert(message) {
    alert(message);
}