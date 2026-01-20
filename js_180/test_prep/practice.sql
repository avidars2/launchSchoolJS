-- CREATE TABLE birds (
--   id serial PRIMARY KEY,
--   name varchar(25),
--   age INT,
--   species varchar(15)
-- )

-- INSERT INTO birds (name, age, species)
-- VALUES
-- ('Charlie', 3, 'Finch'),
-- ('Allie', 5, 'Owl'),
-- ('Jennifer', 3, 'Magpie'),
-- ('Jamie', 4, 'Owl'),
-- ('Roy', 8, 'Crow');

-- SELECT * FROM birds
-- WHERE (age < 5);

-- UPDATE birds
-- SET species = 'Raven'
-- WHERE species = 'Crow';

-- UPDATE birds
-- SET species = 'Owl'
-- WHERE id = 4;

-- DELETE FROM birds
-- WHERE (species = 'Finch'
-- AND
-- age = 3);

-- ALTER TABLE birds
-- ADD CONSTRAINT no_neg_age
-- CHECK (age > 0);

-- INSERT INTO birds
-- VALUES
-- (10, 'Meep', -5, 'Owl');

-- DROP TABLE birds;

-- DROP DATABASE practicedb;