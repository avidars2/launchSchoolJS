CREATE TABLE employees (
    first_name character varying(100),
    last_name character varying(100),
    department character varying(100),
    vacation_remaining integer
);

INSERT INTO employees VALUES ('Leonardo', 'Ferreira', 'finance', 14);
INSERT INTO employees VALUES ('Sara', 'Mikaelsen', 'operations', 14);
INSERT INTO employees VALUES ('Lian', 'Ma', 'marketing', 13);

ALTER TABLE employees ALTER COLUMN vacation_remaining SET NOT NULL;

ALTER TABLE employees ALTER COLUMN vacation_remaining SET DEFAULT 0;

INSERT INTO employees (first_name, last_name) VALUES ('Haiden', 'Smith');