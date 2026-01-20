-- CREATE TYPE spectral AS ENUM ('O', 'B', 'A', 'F', 'G', 'K', 'M');

-- CREATE TABLE stars(
--   id SERIAL PRIMARY KEY,
--   name varchar(25) UNIQUE NOT NULL,
--   distance INT NOT NULL CHECK (distance > 0),
--   spectral_type char(1) CHECK (spectral_type IN ('O', 'B', 'A', 'F', 'G', 'K')),
--   companions INT NOT NULL CHECK (companions >= 0)
-- );

-- CREATE TABLE planets (
--   id serial PRIMARY KEY,
--   designation char(1) CHECK (designation BETWEEN 'a' AND 'z'),
--   mass INT
-- );

-- ALTER TABLE planets
-- ADD COLUMN star_id INT;

-- ALTER TABLE planets
-- ADD FOREIGN KEY (star_id)
-- REFERENCES stars(id);

-- ALTER TABLE stars
-- ALTER COLUMN "name"
-- TYPE varchar(50);

-- ALTER TABLE stars
-- ALTER COLUMN distance
-- TYPE NUMERIC;


-- ALTER TABLE stars
-- DROP CONSTRAINT stars_spectral_type_check;

-- ALTER TABLE stars
-- ALTER COLUMN spectral_type TYPE spectral
--                            USING spectral_type::spectral;

-- ALTER TABLE planets
-- ALTER COLUMN mass
-- TYPE NUMERIC,
-- ALTER COLUMN mass
-- SET NOT NULL,
-- ADD CHECK (mass > 0.0),
-- ALTER COLUMN designation 
-- SET NOT NULL;

-- ALTER TABLE planets
-- ADD COLUMN semi_major_axis
-- NUMERIC NOT NULL;

--Make a moons table
--Moons relate to planets
--Moons table shoudl have a "planets_id" column so that the moon can referencea relevant planet

-- CREATE TABLE moons (
--   id SERIAL PRIMARY KEY,
--   designation INT check (designation > 0),
--   semi_major_axis NUMERIC check (semi_major_axis > 0.0),
--   mass NUMERIC CHECK (semi_major_axis > 0.0),
--   planet_id INT NOT NULL REFERENCES planets(id)
-- );

-- DROP TABLE moons;
-- DROP TABLE planets;
-- DROP TABLE stars;