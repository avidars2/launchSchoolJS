-- CREATE TABLE expenses (
--   id SERIAL PRIMARY KEY,
--   amount NUMERIC(6, 2) NOT NULL,
--   memo TEXT NOT NULL,
--   created_on date NOT NULL
-- )

-- ALTER TABLE expenses
-- ADD CHECK (amount > 0.00);

-- INSERT INTO expenses (amount, memo, created_on) VALUES (14.56, 'Pencils', NOW());
-- INSERT INTO expenses (amount, memo, created_on) VALUES (3.29, 'Coffee', NOW());
-- INSERT INTO expenses (amount, memo, created_on) VALUES (49.99, 'Text Editor', NOW());