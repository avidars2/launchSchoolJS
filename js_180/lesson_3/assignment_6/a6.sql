--#2
-- SELECT count(id) FROM tickets;

--#3
-- SELECT count(DISTINCT c.id)
-- FROM customers as c
-- INNER JOIN tickets as t
-- ON c.id = t.customer_id; 

--Alternate solution
-- SELECT count(DISTINCT customer_id)
-- FROM tickets;

--#4
-- SELECT round(count(DISTINCT t.customer_id) * 1.0 / count(DISTINCT c.id) * 100.0, 2) FROM
-- customers as c
-- LEFT JOIN tickets as t
-- ON c.id = t.customer_id;

--#5
-- SELECT e.name, count(t.id) as popularity
-- FROM events as e
-- LEFT OUTER JOIN tickets as t
-- ON e.id = t.event_id
-- GROUP BY e.id
-- ORDER BY popularity DESC;

-- Somehow count the amount of tickets grouped by there respective events
-- Inner join tickets sold to event

--#6
--Select the customer id and email, as well as a count of the events that a customer has been to
--Filter the list so it is only showing customers who have went to 3 events or more
--a SINGLE CUSTOMER can buy multiple tickets to the same event
--So I can't just count the event.ids, but I could count the unique event ids
-- SELECT c.id, c.email, count(DISTINCT e.id) FROM customers as c
-- INNER JOIN tickets as t
-- ON c.id = t.customer_id
-- INNER JOIN events as e
-- ON e.id = t.event_id
-- GROUP BY c.id
-- HAVING count(DISTINCT e.id) > 2
-- LIMIT 25;

--#7
--Print out all tickets purchased by customer with email: gennaro.rath
---output is filtering by customer with email gennaro.rath@mcdermott.co
--Include event name and starts at from events table
--Includes section name from sections table
--Includes seat row and number from seats table
--The tickets table provides the connections between relations

SELECT e.name AS event, e.starts_at, sec.name AS section, seat.row, seat.number AS seat
FROM customers AS c
INNER JOIN tickets AS t
ON c.id = t.customer_id
INNER JOIN events AS e
ON e.id = t.event_id
INNER JOIN seats AS seat
ON t.seat_id = seat.id
INNER JOIN sections AS sec
ON seat.section_id = sec.id
WHERE c.email = 'gennaro.rath@mcdermott.co';
