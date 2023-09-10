package com.document_constructor.backend.model;

import com.document_constructor.backend.interfaces.Footer;

public class FooterImpl implements Footer {
    private String footerText;

    public FooterImpl(String footerText) {
        this.footerText = footerText;
    }

    @Override
    public String getStructure() {
        return footerText;
    }
}
