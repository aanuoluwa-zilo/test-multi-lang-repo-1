function validateData(data) {
    return typeof data === 'object' && data !== null;
}

function formatResponse(data) {
    return {
        success: true,
        data: data,
        timestamp: new Date().toISOString()
    };
}

module.exports = { validateData, formatResponse };