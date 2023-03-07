import { DiscordUser } from "../classes/DiscordUser";
import { API } from "./API";

export class MomentoAPI extends API {
    static async getPlayerMomentosProfiles(tokenType: string, accessToken: string): Promise<[]> {
        const endpoint = ''
        const config = { "Authorization": `${tokenType} ${accessToken}` }

    
        return []
    }
}