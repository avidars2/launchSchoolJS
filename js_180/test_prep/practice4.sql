-- CREATE TABLE bidders (
--   id SERIAL PRIMARY KEY,
--   name TEXT NOT NULL
-- );

-- CREATE TABLE items (
--   id SERIAL PRIMARY KEY,
--   name TEXT NOT NULL,
--   initial_price numeric(6, 2) NOT NULL CHECK (initial_price BETWEEN 0.01 AND 1000.00),
--   sales_price numeric(6, 2) CHECK (sales_price BETWEEN 0.01 AND 1000.00)
-- );

-- CREATE TABLE bids (
--   id SERIAL PRIMARY KEY,
--   bidder_id INT NOT NULL REFERENCES bidders(id) ON DELETE CASCADE,
--   item_id INT NOT NULL REFERENCES items(id) ON DELETE CASCADE,
--   amount NUMERIC(6, 2) NOT NULL CHECK (amount >= 0.01 AND amount <= 1000.00)
-- );

-- CREATE INDEX ON bids (bidder_id, item_id);

--\copy bidders FROM 'bidders.csv' WITH HEADER CSV
--\copy items FROM 'items.csv' WITH HEADER CSV
--\copy bids FROM 'bids.csv' WITH HEADER CSV

--Show all items that have bids put on them
--Use logical operator IN and a Subquery

--For every distinct item id
--that is in the bids relation
--Get the corresponding "name"

--Get a list of corresponding item_ids to item.names
----Get distinct names from that list

-- SELECT DISTINCT i.name AS "Bid on Items" FROM items i
-- WHERE i.id IN (SELECT bd.item_id FROM bids bd);

--Get items with no bids put on them
--Get distinct item ids from bids table
---Then select rows from items relation where the item's id is not in the "item_id" column of the bids relation

-- SELECT i.name AS "Not Bid On" FROM items i
-- WHERE i.id NOT IN (SELECT DISTINCT bd.item_id FROM bids bd);

--For every distinct bidder_id in the bids relation
--If a bidders.id exists in that bids.bidder_id column, add that to the output

-- SELECT b.name FROM bidders b
-- WHERE EXISTS (
--   SELECT * FROM bids bd
--   WHERE bd.bidder_id = b.id
-- );

--Find the largest number of bids from an individual bidder
--I want to count the number of bids each bidder has made
--From that result set, I want to get the largest number
-- SELECT max(count) FROM (SELECT bidder_id, COUNT(bidder_id) FROM bids GROUP BY bidder_id);

--Get a count of every bidders total bids
----count the bidder_id's in the bids table
----Group them by the bidder_id
---SELECT the highest number from that list

-- SELECT i.name, (SELECT COUNT(item_id) FROM bids WHERE item_id = i.id) FROM items i;

SELECT i.id FROM items i
WHERE ('Painting', '100.00', '250.00') = (i.name, i.initial_price, i.sales_price);