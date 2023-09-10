package com.document_constructor.backend.service;

import com.document_constructor.backend.interfaces.Footer;
import com.document_constructor.backend.model.Document;
import com.document_constructor.backend.model.HeaderImpl;
import com.document_constructor.backend.model.FooterImpl;
import com.document_constructor.backend.model.TableImpl;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class DocumentService {

//    public String savedAuthor;
//    public String savedTitle;
//    public String savedDate;

    // HashMap to store the saved header information
//    private Map<String, String> savedHeaderInfo = new HashMap<>();

    public static void main(String[] args) {
        DocumentService documentService = new DocumentService();
        System.out.println(documentService.generateDocument());
    }

    public String generateDocument() {
        // Create instance of the custom header with saved information
        HeaderImpl header = new HeaderImpl("This is the header");
        TableImpl table = new TableImpl("This is table");
        FooterImpl footer = new FooterImpl("This is footer");
        // Create the document with the custom header
        Document document = new Document();

        // Add items to the document
        document.addElement(header);
        document.addElement(table);
        document.addElement(footer);

        // Generate and return the document
        return document.generateDocument();
    }

}
