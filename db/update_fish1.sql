UPDATE fishies
SET f1 = $1
WHERE user_id = $2;

SELECT * FROM fishies
WHERE user_id = $2;