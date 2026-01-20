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

-- INSERT INTO devices ("name")
-- VALUES ('Accelerometer'), ('Gyroscope');

-- INSERT INTO parts (part_number, device_id)
-- VALUES 
-- (1, 1),
-- (2, 1),
-- (3, 1),
-- (4, 2),
-- (5, 2),
-- (6, 2),
-- (7, 2),
-- (8, 2);

-- INSERT INTO parts (part_number) VALUES (9);
-- INSERT INTO parts (part_number) VALUES (10);
-- INSERT INTO parts (part_number) VALUES (11);

-- SELECT d.name, p.part_number FROM devices AS d
-- INNER JOIN parts AS p
-- ON d.id = p.device_id;

-- SELECT * FROM parts
-- WHERE part_number::text LIKE '3%';

--Name of eachd evice
--Number of parts for that device
--COUNT parts, grouped by the devices

-- SELECT d.name, COUNT(p.part_number) FROM devices d
-- INNER JOIN parts p
-- ON d.id = p.device_id
-- GROUP BY d.name
-- ORDER BY d.name DESC;

--Parts that belong to a device
-- SELECT part_number, device_id FROM parts
-- WHERE device_id IS NOT NULL;

-- Parts that don't belong to a device
-- SELECT part_number, device_id FROM parts
-- WHERE device_id IS NULL;

-- INSERT INTO devices (name) VALUES ('Magnetometer');
-- INSERT INTO parts (part_number, device_id) VALUES (42, 3);

-- SELECT MIN(created_at) FROM devices;

-- SELECT created_at FROM devices
-- ORDER BY created_at ASC
-- LIMIT 1;

-- UPDATE parts
-- SET device_id = 1
-- WHERE part_number = 8 OR part_number = 7;


-- UPDATE parts
-- SET device_id = 2
-- WHERE part_number = (SELECT MIN(part_number) FROM parts);

-- DELETE FROM parts WHERE device_id = 1;
-- DELETE FROM devices WHERE id = 1;

-- ALTER TABLE parts
-- DROP CONSTRAINT parts_device_id_fkey;

-- ALTER TABLE parts
-- ADD FOREIGN KEY (device_id) REFERENCES devices(id) ON DELETE CASCADE;



--Delete all tables
-- DROP TABLE parts;
-- DROP TABLE devices;