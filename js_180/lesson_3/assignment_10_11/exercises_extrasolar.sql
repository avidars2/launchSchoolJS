--#1
-- CREATE TABLE stars (
--   id serial PRIMARY KEY,
--   name varchar(25) UNIQUE NOT NULL,
--   distance INT NOT NULL CHECK (distance > 0),
--   spectral_type char(1),
--   companions INT NOT NULL CHECK (companions >= 0)
-- );

-- CREATE TABLE planets (
--   id serial PRIMARY KEY,
--   designation char(1) UNIQUE,
--   mass INT
-- );

--#2
-- ALTER TABLE planets
-- ADD COLUMN star_id INT NOT NULL REFERENCES stars(id);

--#3
-- ALTER TABLE stars
-- ALTER COLUMN name
-- TYPE varchar(50);

--#4
-- ALTER TABLE stars
-- ALTER COLUMN distance
-- TYPE numeric;

--#5
-- ALTER TABLE stars
-- ALTER COLUMN spectral_type
-- SET NOT NULL;

-- ALTER TABLE stars
-- ADD CONSTRAINT valid_spectral_type
-- CHECK (spectral_type  IN ('O', 'B', 'A', 'F', 'G', 'K', 'M'));

--#6
-- ALTER TABLE stars
-- DROP CONSTRAINT valid_spectral_type;

-- CREATE TYPE spectral_types AS ENUM ('O', 'B', 'A', 'F', 'G', 'K', 'M');
-- ALTER TABLE stars
-- ALTER COLUMN spectral_type
-- TYPE spectral_types
-- USING spectral_type::spectral_types;

--#7
-- ALTER TABLE planets
-- ALTER COLUMN mass
-- TYPE numeric,

-- ALTER COLUMN mass
-- SET NOT NULL,

-- ADD CONSTRAINT positive_mass
-- CHECK (mass > 0),

-- ALTER COLUMN designation
-- SET NOT NULL;

--#8
-- ALTER TABLE planets
-- ADD COLUMN semi_major_axis NUMERIC NOT NULL;

--#9
-- CREATE TABLE moons (
--   id SERIAL PRIMARY KEY,
--   designation INT NOT NULL,
--   semi_major_axis NUMERIC CHECK (semi_major_axis > 0),
--   mass NUMERIC CHECK (mass > 0),
--   planet_id INTEGER REFERENCES planets(id)
-- );

-- ALTER TABLE moons
-- ALTER COLUMN planet_id
-- SET NOT NULL,
-- ADD CHECK (designation > 0);