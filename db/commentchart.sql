select * from feedback f
join comments c on c.feedback_id = f.feedback_id where f.category_id = $1 ;