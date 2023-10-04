import api from './index'
import {Document} from "../interfaces/Document";

class DocumentService {


    static async createDocument(document: Document): Promise<Document> {
        return api
            .post(`/api/disciplines/${document.disciplineId}/documents`, document)
            .then((response) => response.data)
    }

    static async addHeader(document: Document): Promise<Document> {
        return api
            .post(`/api/disciplines/${document.disciplineId}/documents/${document.id}`, document)
            .then((response) => response.data)
    }

    static async findDocumentById(disciplineId: number, id: number): Promise<Document> {
        return api
            .get(`/api/disciplines/${disciplineId}/documents/${id}`)
            .then((response) => response.data)
    }

}

export default DocumentService;