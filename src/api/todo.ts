export class TodoApi {
    url: string = 'https://jsonplaceholder.typicode.com/todos/1'

    // constructor(url: string){
    // }

    public async getTodo() {
        const response = await fetch(this.url)
        const result = await response.json()
        return result
    }
    // Todo
    // public async sendTodo() {
    //  
    // }

}
