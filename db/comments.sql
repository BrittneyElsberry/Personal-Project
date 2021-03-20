INSERT INTO comments (comment, feedback_id, user_id, date, linkcommenttofb_id)
values($1, $2, $3, $4, $5)
returning *;