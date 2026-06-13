export default class ApiLogger {

    static request(
        method: string,
        url: string
    ) {
        console.log(`[REQUEST] ${method} ${url}`);
    }

    static response(
        status: number
    ) {
        console.log(`[RESPONSE] ${status}`);
    }

}