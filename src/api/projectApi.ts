import API_URL from "./config";
import ApiService from "./apiService";
class projectApiService extends ApiService {
    constructor() {
        super()
    }
    private async getprojectLanguage(projectId: number) {
        return this.axiosCall<any>({ method: 'get', url: `projects/${projectId}/languages` })
    }
    private async getProjectDescription(projectId: number) {
        return this.axiosCall<any>({ method: 'get', url: `projects/${projectId}` })
    }
    async getProject(projectId: number) {
        let project, language;
        project = await this.getProjectDescription(projectId)
        language = await this.getprojectLanguage(projectId)
        return [project, language]
    }
}

export interface Project {
    data: ProjectData
    language: any
}

interface ProjectData {
    name: string
    description: string
    web_url: string
    last_activity_at: string
}
export const projectAPI = new projectApiService()

