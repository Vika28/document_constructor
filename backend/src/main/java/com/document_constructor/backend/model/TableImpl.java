package com.document_constructor.backend.model;

import com.document_constructor.backend.interfaces.Table;

public class TableImpl implements Table {
    private String tableContent;

    public TableImpl(String tableContent) {
        this.tableContent = tableContent;
    }

    @Override
    public String getStructure() {
        return tableContent;
    }
}
