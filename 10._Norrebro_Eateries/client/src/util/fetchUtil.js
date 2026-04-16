export async function fetchGet(endpoint) {
    try {
        const response = await fetch(`http://localhost:8080/api${endpoint}`, {
            credentials: 'include'
        });
        const result = response.json();
        return result;
    } catch (error) {
        console.log(error);
    }
}

export async function fetchPost(endpoint) {
    const response = await fetchGet(`http://localhost:8080/${endpoint}`), {

}
