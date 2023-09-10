package com.document_constructor.backend.model;

import com.document_constructor.backend.interfaces.Header;
import java.util.HashMap;
import java.util.Map;

public class HeaderImpl implements Header {
    private String headerText;

    public HeaderImpl(String headerText) {
        this.headerText = headerText;
    }

    @Override
    public String getStructure() {
        return headerText;
    }
}
