CREATE TABLE IF NOT EXISTS discipline (
                                          id BIGINT GENERATED ALWAYS AS IDENTITY,
                                          name VARCHAR(255),
    primary key (id)
    );

CREATE TABLE IF NOT EXISTS documents (
                                         id BIGINT GENERATED ALWAYS AS IDENTITY,
                                         name VARCHAR(32) NOT NULL,
    content VARCHAR(255),
    type VARCHAR(255),
    discipline_id BIGINT NOT NULL ,
    PRIMARY KEY (id),

    CONSTRAINT fk_discipline
    FOREIGN KEY (discipline_id)
    REFERENCES discipline(id)
    );

