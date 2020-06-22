const KEY = '9360baaf';

export default async function fetchMovieDetails(id) {
    try {
        const response = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=${KEY}`);
        const results = await response.json();
        return results;
    } catch (err) {
        return alert('Error retrieving movie information.');
    }
}