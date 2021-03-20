INSERT INTO feedback (category_id, dept_id, user_id, feedback, fb_date)
VALUES($1, $2, $3, $4, $5);

select * from feedback where user_id = $3;


