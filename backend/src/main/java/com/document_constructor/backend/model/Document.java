package com.document_constructor.backend.model;

import com.document_constructor.backend.interfaces.Element;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
//
//public class Document {
//
//    private List<Template> templates;
//
//    public Document() {
//        this.templates = new ArrayList<>();
//    }
//
//    public void addTemplate(Template template) {
//        templates.add(template);
//    }
//
//    public String generateDocument() {
//        return templates.stream().map(Template::getStructure).collect(Collectors.joining());
//    }
//}
public class Document {
    private List<Element> elements;

    public Document() {
        this.elements = new ArrayList<>();
    }
    public void addElement(Element element) {
        elements.add(element);
    }

    public String generateDocument() {
        return elements.stream().map(Element::getStructure).collect(Collectors.joining());
    }
}