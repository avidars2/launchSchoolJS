--#1
-- CREATE TABLE devices (
--   id SERIAL PRIMARY KEY,
--   name TEXT NOT NULL,
--   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- CREATE TABLE parts (
--   id SERIAL PRIMARY KEY,
--   part_number INT UNIQUE NOT NULL,
--   device_id INT REFERENCES devices(id)
-- );

--#2
-- INSERT INTO devices ("name")
-- VALUES ('Accelerometer'), ('Gyroscope');

-- INSERT INTO parts (part_number, device_id)
-- VALUES (10, 1), (11, 1), (12, 1), 
-- (21, 2), (22, 2), (23, 2), (24, 2), (25, 2);

-- INSERT INTO parts (part_number)
-- VALUES (109), (110), (111);

--#3
-- SELECT name, part_number FROM devices
-- INNER JOIN parts
-- ON devices.id = parts.device_id;

--#4
-- SELECT * FROM parts
-- WHERE part_number::text LIKE '3%';

--#5
-- SELECT name, count(part_number) FROM devices
-- LEFT OUTER JOIN parts
-- ON devices.id = parts.device_id
-- GROUP BY name;

--#6
-- SELECT name, count(part_number) FROM devices
-- LEFT OUTER JOIN parts
-- ON devices.id = parts.device_id
-- GROUP BY name
-- ORDER BY count DESC;

--#7
-- SELECT part_number, device_id FROM parts
-- WHERE device_id IS NOT NULL;

-- SELECT part_number, device_id FROM parts
-- WHERE device_id IS NULL;

--#8
-- INSERT INTO devices (name) VALUES ('Magnetometer');
-- INSERT INTO parts (part_number, device_id) VALUES (42, 3);

-- SELECT name FROM DEVICES
-- ORDER BY created_at ASC
-- LIMIT 1;

--#9
-- UPDATE parts
-- SET device_id = 1
-- WHERE (part_number > 23 AND part_number <  26);

--#10
-- DELETE FROM parts WHERE
-- device_id = 1;

-- DELETE FROM devices WHERE
-- name = 'Accelerometer';