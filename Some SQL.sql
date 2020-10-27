CREATE TABLE logs (
	Id int PRIMARY KEY,
	Time int,
	Type text,
	Path text
);

-- SELECT * FROM logs LIMIT 10;

-- CREATE INDEX idxPath ON logs (PATH, TIME)

-- SELECT * FROM logs WHERE PATH = ' \Users\Ben Heley\AppData\Roaming\Code\User\globalStorage\state.vscdb-journal'

SELECT PATH, COUNT(*) AS _count FROM logs
GROUP BY PATH ORDER BY 2 DESC