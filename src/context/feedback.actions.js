export const fetchFeedback =  async () => {
    const response = await fetch(`http://localhost:5001/feedback`);
    const data = await response.json();
    return data;
}