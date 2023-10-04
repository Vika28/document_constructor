CREATE TABLE IF NOT EXISTS users
(
    id       BIGINT GENERATED ALWAYS AS IDENTITY,
    email    VARCHAR(32) NOT NULL,
    password VARCHAR(64) NOT NULL,
    role     VARCHAR(32) NOT NULL,
    username VARCHAR(32) NOT NULL,
    primary key (id)
);

CREATE TABLE IF NOT EXISTS disciplines
(
    id      BIGINT GENERATED ALWAYS AS IDENTITY,
    name    VARCHAR(255),
    primary key (id),
    user_id BIGINT NOT NULL,

    CONSTRAINT fk_user
        FOREIGN KEY (user_id)
            REFERENCES users (id)
);

CREATE TABLE IF NOT EXISTS documents
(
    id              BIGINT GENERATED ALWAYS AS IDENTITY,
    name            VARCHAR(32) NOT NULL,
    content         VARCHAR(255),
    type            VARCHAR(255),
    discipline_type VARCHAR(255),
    discipline_id   BIGINT      NOT NULL,
    PRIMARY KEY (id),

    CONSTRAINT fk_discipline
        FOREIGN KEY (discipline_id)
            REFERENCES disciplines (id)
);

CREATE TABLE IF NOT EXISTS templates
(
    id            BIGINT GENERATED ALWAYS AS IDENTITY,
    content       VARCHAR(1000) NOT NULL,
    template_type VARCHAR(255)  NOT NULL
);



