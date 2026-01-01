-- #3
-- CREATE TABLE temperatures (
--   "date" date NOT NULL,
--   low INT NOT NULL,
--   high INT NOT NULL
-- )

-- #4
-- INSERT INTO temperatures 
-- VALUES 
--  ('2016-03-01', 34 , 43),
--  ('2016-03-02', 32 , 44),
--  ('2016-03-03', 31 , 47),
--  ('2016-03-04', 33 , 42),
--  ('2016-03-05', 39 , 46),
--  ('2016-03-06', 32 , 43),
--  ('2016-03-07', 29 , 32),
--  ('2016-03-08', 23 , 31),
--  ('2016-03-09', 17 , 28)
--  ;

-- #5
-- SELECT "date", (round((low + high) / 2, 1)) FROM temperatures
-- WHERE ("date" >= '2016-03-02'
-- AND
-- "date" <= '2016-03-08')
-- ;
-- --Alternate WHERE clause: WHERE date BETWEEN '2016-03-02' AND '2016-03-08';

-- #6
-- ALTER TABLE temperatures
-- ADD COLUMN rainfall INT NOT NULL DEFAULT 0;

-- #7
-- Every degree the average temp goes above 35
-- rainfall += 1

-- So for each value of (round((low + high) / 2, 1)) - 35 as avgtemp
-- Where avgtemp > 35
-- 35 - avgtemp = rainfall in mm

-- UPDATE temperatures 
-- SET rainfall = ((round((low + high) / 2, 1)) - 35)
-- WHERE ((round((low + high) / 2, 1)) - 35) > 0;

-- #8
--  1 * 0.0393701 === inch equivalent

-- ALTER TABLE temperatures
-- ALTER COLUMN rainfall
-- TYPE numeric(6, 3);

-- UPDATE temperatures
-- SET rainfall = rainfall * 0.0393701
-- WHERE rainfall > 0;

-- #9
-- ALTER TABLE temperatures 
-- RENAME TO weather;

