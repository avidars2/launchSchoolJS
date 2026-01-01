-- #1
-- ALTER TABLE films
-- ALTER COLUMN title
-- SET NOT NULL;

-- ALTER TABLE films
-- ALTER COLUMN "year"
-- SET NOT NULL;

-- ALTER TABLE films
-- ALTER COLUMN genre
-- SET NOT NULL;

-- ALTER TABLE films
-- ALTER COLUMN director
-- SET NOT NULL;

-- ALTER TABLE films
-- ALTER COLUMN duration
-- SET NOT NULL;

--#4
-- ALTER TABLE films
-- ADD CONSTRAINT title_unique
-- UNIQUE (title)

--The above constraint shows up via \d films:
--Indexes:
--    "title_unique" UNIQUE CONSTRAINT, btree (title)

--#6 
-- ALTER TABLE films
-- DROP CONSTRAINT title_unique;

--#7
-- ALTER TABLE films
-- ADD CONSTRAINT title_length
-- CHECK (length(title) >= 1);

--#8
-- INSERT INTO films (title, year, genre, director, duration) VALUES ('', 19
-- 82, 'bop', 'adam', 50);
-- ERROR:  new row for relation "films" violates check constraint "title_length"
-- DETAIL:  Failing row contains (, 1982, bop, adam, 50).

--#9
--"constraint name" CHECK (condition)

--#10
-- ALTER TABLE films
-- DROP CONSTRAINT title_length;

--#11
-- ALTER TABLE films
-- ADD CONSTRAINT year_within_centuries
-- CHECK (year >= 1900 AND year <= 2100);

--#13
-- ALTER TABLE films
-- DROP CONSTRAINT director_length;

-- ALTER TABLE films 
-- ADD CONSTRAINT director_name
-- CHECK (length(director) >= 3 AND position(' ' in director) > 0);

--15
-- UPDATE films 
-- SET director = 'Johnny' 
-- WHERE title = 'Die Hard';

--16
--Method #1 Set a type
-- ALTER TABLE films
-- ALTER COLUMN title
-- TYPE varchar(255);

--Method #2 - Check constraint
-- ALTER TABLE films
-- ADD CONSTRAINT boop
-- CHECK (title <> 'sandy');

--Method #3 - Not Null constraint
-- ALTER TABLE films
-- ADD CONSTRAINT no_null
-- CHECK (title IS NOT NULL);

