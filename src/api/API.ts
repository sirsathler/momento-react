import axios from "axios";

export class API {
    static async get(endpoint: string, options: {}) {
        try {
            const response = await axios.get(endpoint, {headers: options})
            if (response) { return response.data }
        }
        catch (err) {
            throw new Error(err)
        }
    }
}