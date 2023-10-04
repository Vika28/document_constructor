import api from './index'
import {TemplateType} from "../interfaces/TemplateType";
import {Template} from "../interfaces/Template";

class TemplatesService {
    static async findAllTemplates(templateType: TemplateType): Promise<Template[]> {
        return api
            .get(`/api/templates/${templateType}`)
            .then((response) => response.data)
    }
}

export default TemplatesService;