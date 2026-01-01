--#1
-- INSERT INTO calls ("when", duration, contact_id)
-- VALUES ('2016-01-18 14:47:00', 632, 6);

--#2
-- SELECT "when" as call_times, duration, first_name, last_name 
-- FROM contacts
-- INNER JOIN calls
-- ON contacts.id = calls.contact_id
-- WHERE (contacts.id <> 6);

--#3
-- INSERT INTO contacts (first_name, last_name, "number")
-- VALUES ('Merve', 'Elk', 6343511126), 
-- ('Sawa', 'Fyodorov', 6125594874);

-- INSERT INTO calls ("when", duration, contact_id)
-- VALUES ('2016-01-17 11:52:00', 175, 26),
-- ('2016-01-18 21:22:00	', 79, 27);

--#4
-- ALTER TABLE contacts
-- ADD CONSTRAINT unique_number
-- UNIQUE("number");

--#5
INSERT INTO contacts (first_name, last_name, "number")
VALUES ('delete', 'me', 6125594874);
