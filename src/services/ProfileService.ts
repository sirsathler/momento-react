import { API } from "../api/API";
import { Collage } from "../classes/Collage";
import { MomentoUser } from "../classes/MomentoUser";

export class ProfileService {
    static async fetchUserProfile(userId: string, token: String) {
        const endpoint = `https://63fd0a098ef914c555a48067.mockapi.io/user`
        const response = await API.get(endpoint, {
            headers: { 'Authorization': token }
        })

        return response
    }

    static async fetchUserProfileMocked(userId: string, token: string): Promise<MomentoUser> {
        let user: MomentoUser;
        if (userId === "thenoah") {
            user = new MomentoUser(
                "598301572325310474",
                "Maatheus",
                "dougcastelano@gmail.com",
                "thenoah",
                "Noah",
                "Carridge",
                "https://cdn.discordapp.com/attachments/1073706433750761562/1073997069322293309/file.jpg",
                "nerdy",
                new Collage(
                    "https://cdn.discordapp.com/attachments/1073706433750761562/1073997069322293309/file.jpg",
                    "https://cdn.discordapp.com/attachments/1073706433750761562/1073997069322293309/file.jpg",
                    "https://cdn.discordapp.com/attachments/1073706433750761562/1073997069322293309/file.jpg",
                    "https://cdn.discordapp.com/attachments/1073706433750761562/1073997069322293309/file.jpg",
                    "https://cdn.discordapp.com/attachments/1073706433750761562/1073997069322293309/file.jpg",
                    "https://cdn.discordapp.com/attachments/1073706433750761562/1073997069322293309/file.jpg",
                )
            )
            return user
        }
    }
}