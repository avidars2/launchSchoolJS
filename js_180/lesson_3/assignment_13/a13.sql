--#1
-- CREATE TABLE directors_films (
--   id SERIAL PRIMARY KEY,
--   directors_id INT NOT NULL REFERENCES directors(id),
--   films_id INT NOT NULL REFERENCES films(id)
-- );

-- ALTER TABLE directors_films
-- DROP CONSTRAINT directors_films_directors_id_fkey;

-- ALTER TABLE directors_films
-- DROP CONSTRAINT directors_films_films_id_fkey;

-- ALTER TABLE directors_films
-- ADD CONSTRAINT dfd_id_fkey
-- FOREIGN KEY (directors_id)
-- REFERENCES directors(id)
-- ON DELETE CASCADE;

-- ALTER TABLE directors_films
-- ADD CONSTRAINT dff_id_fkey
-- FOREIGN KEY (films_id)
-- REFERENCES films(id)
-- ON DELETE CASCADE;

-- ALTER TABLE directors_films
-- ADD UNIQUE(directors_id, films_id);

--#3
-- INSERT INTO directors_films (directors_id, films_id)
-- VALUES 
-- (1, 1), (2, 2), (3, 3), (4, 4),
-- (5, 5), (6, 6), (3, 7), (7, 8),
-- (8, 9), (5, 10);

--#4
-- ALTER TABLE films
-- DROP COLUMN director_id;

--#5
-- SELECT f.title, d.name FROM FILMS as f
-- INNER JOIN directors_films as df
-- ON f.id = df.films_id
-- INNER JOIN directors as d
-- ON d.id = df.directors_id
-- ORDER BY f.title ASC;

--#6
-- INSERT INTO films
-- (title, "year", genre, duration)
-- VALUES
-- ('Fargo', 1996, 'comedy',	98),	
-- ('No Country for Old Men',	2007,	'western',	122),	
-- ('Sin City',	2005,	'crime',	124),	
-- ('Spy Kids',	2001,	'scifi',	88);

-- INSERT INTO directors
-- (name) VALUES
-- ('Joel Coen'),
-- ('Ethan Coen'),
-- ('Frank Miller'),
-- ('Robert Rodriguez');

-- INSERT INTO directors_films
-- (directors_id, films_id)
-- VALUES (9,11), (9,12), (10,12),
-- (11,13), (12,13), (12,14);

--#7
SELECT d.name as director, count(f.id) as films 
FROM directors as d
LEFT JOIN directors_films as df
ON d.id = df.directors_id
INNER JOIN films as f
ON f.id = df.films_id
GROUP BY director
ORDER BY films DESC, director ASC;