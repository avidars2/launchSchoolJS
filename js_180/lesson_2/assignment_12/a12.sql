--#2
-- INSERT INTO films (title, "year", genre, director, duration)
-- VALUES
-- ('Wayne''s World',	1992,	'comedy',	'Penelope Spheeris',	95),
-- ('Bourne Identity',	2002,	'espionage',	'Doug Liman',	118)
-- ;

--#3
-- SELECT DISTINCT genre FROM films
-- WHERE title IS NOT NULL;

--#4
-- SELECT genre FROM films GROUP BY genre;

--#5
-- SELECT round(avg(duration)) FROM films;

--#6
-- SELECT genre, round(avg(duration)) as average_duration FROM films GROUP BY genre;

--#7
-- SELECT round("year", -1) as decade, round(avg(duration)) as average_duration 
-- FROM films 
-- GROUP BY decade
-- ORDER BY decade ASC;

--#8
-- SELECT * FROM films WHERE director LIKE 'John%';

--#9
-- SELECT genre, count(genre) 
-- FROM films 
-- GROUP BY genre
-- ORDER BY count DESC;

--#10
-- SELECT (("year" / 10) * 10) as decade, genre, string_agg(title, ', ') as films
-- FROM films
-- GROUP BY decade, genre
-- ORDER BY decade, genre ASC;

--#11
SELECT genre, sum(duration) as total_duration FROM films
GROUP BY genre
ORDER BY total_duration, genre ASC;