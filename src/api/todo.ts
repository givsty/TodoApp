const config = {
    url: 'https://jsonplaceholder.typicode.com/todos'
}

export const getTodo = async () => {
    const response = await fetch(config.url)
    const result = await response.json()
    return result
}
