export const fetchFeedback =  async () => {
    const response = await fetch(`http://localhost:5001/feedback`);
    const data = await response.json();
    return data;
}

export const addFeedback = async (newFeedback) => {
    const response = await fetch(`http://localhost:5001/feedback`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newFeedback)
    });
    const data = await response.json();
    return data;
}