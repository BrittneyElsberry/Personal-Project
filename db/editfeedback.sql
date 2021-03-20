UPDATE feedback
SET feedback = $1
WHERE feedback_id = $2

returning *;
