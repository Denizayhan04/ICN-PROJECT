export async function sendRequest(url, method, body = null) {
    
    const options = {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        }
    };

    if (method !== 'GET' && method !== 'DELETE' && body) {
        options.body = body;
    }

    const startTime = performance.now();

    try {
        const response = await fetch(url, options);
        
        const contentType = response.headers.get("content-type");
        let data;
        
        if (contentType && contentType.includes("application/json")) {
            data = await response.json();
        } else {
            data = await response.text();
        }

        const endTime = performance.now();

        return {
            success: true,
            status: response.status,
            data: data,
            duration: (endTime - startTime).toFixed(2)
        };

    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}