--#1
-- CREATE TABLE bidders (
--   id SERIAL PRIMARY KEY,
--   "name" TEXT NOT NULL
-- );

-- CREATE TABLE items (
--   id SERIAL PRIMARY KEY,
--   name TEXT NOT NULL,
--   initial_price decimal(6, 2) CHECK (initial_price BETWEEN 0.01 AND 1000.00),
--   sales_price decimal(6, 2) CHECK (initial_price BETWEEN 0.01 AND 1000.00)
-- );

-- CREATE TABLE bids (
--   id SERIAL PRIMARY KEY,
--   bidder_id integer NOT NULL REFERENCES bidders(id) ON DELETE CASCADE,
--   item_id integer NOT NULL REFERENCES items(id) ON DELETE CASCADE,
--   amount decimal(6, 2) CHECK (amount BETWEEN 0.01 AND 1000.00)
-- );

-- CREATE INDEX ON bids (bidder_id, item_id);

--#2
--Given a list of bids and items
--Return all items where a matching bid id is found

-- SELECT i.name as "Bid on Items" FROM items i
-- WHERE i.id IN (SELECT DISTINCT item_id FROM bids);

--#3
-- SELECT i.name as "Not Bid On" FROM items i
-- WHERE i.id NOT IN (SELECT DISTINCT item_id FROM bids);

--#4
--Given a list of names and ids of bidders
--Return names where bidders_id === bids.bidders_id
--eXISTS: Checks if any rows at all are returned by the subquery
--So based on exists, if it does exist, select the name

-- SELECT name FROM bidders WHERE 1 IN (SELECT 1 FROM bidders
-- WHERE EXISTS (SELECT DISTINCT bidder_id FROM bids));


-- SELECT name FROM bidders WHERE EXISTS
-- (SELECT 1 FROM bids WHERE bids.bidder_id = bidders.id);

--bidder_id

--#5
--For this exercise, you must use a subquery to generate a result table 
--(or transient table), and then query that table for the largest number of bids.
--Expected output: Max 9

--Given item_id's in bids
--Count # of each item_id's
--Return highest count

-- SELECT max(count) FROM
-- (SELECT count(bidder_id) FROM bids
-- GROUP BY bidder_id);


--#6

--Count bids for each item
--Associate the count with the names of each item
--Get the name of each item in the items list
--Get a count of the bids for each item - perform this count as a subquery in the select list

-- SELECT items.name, 
-- (
--   SELECT count(item_id) FROM bids
--   WHERE item_id = items.id
-- ) 

-- FROM items;

--Alt solution using join
-- SELECT items.name, count(bids.item_id) FROM items
-- LEFT JOIN bids
-- ON items.id = bids.item_id
-- GROUP BY items.name;

--#7
-- SELECT (id) FROM items
-- WHERE ROW(name, initial_price, sales_price) = ROW('Painting', 100.00, 250.00);

--#8
--

-- EXPLAIN ANALYZE SELECT name FROM bidders
-- WHERE EXISTS (SELECT 1 FROM bids WHERE bids.bidder_id = bidders.id);

--EXPLAIN, Analyze
--It looks like the type of operation was described in the query plan
--Then the estimated cost in terms of time? Along with the rows/columns(width) of the table were laid out
--Then due to Analyze, the actual time taken along with the rows and loops needed to get the data were laid out
---This pattern seems to repeat for several operations in the statement

--#9


-- EXPLAIN ANALYZE SELECT MAX(bid_counts.count) FROM
--   (SELECT COUNT(bidder_id) FROM bids GROUP BY bidder_id) AS bid_counts;

-- EXPLAIN ANALYZE SELECT COUNT(bidder_id) AS max_bid FROM bids
--   GROUP BY bidder_id
--   ORDER BY max_bid DESC
--   LIMIT 1;

-- CREATE TABLE test (
--   id SERIAL PRIMARY KEY,
--   otra_id INT NOT NULL CHECK (otra_id > 5 AND otra_id < 50)
-- );

-- ALTER TABLE test
-- DROP CONSTRAINT "test_otra_id_check";