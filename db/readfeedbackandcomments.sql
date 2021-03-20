select * from feedback f 
inner join category c on c.category_id = f.category_id
where f.user_id = $1;


-- //inner join comments com on com.feedback_id =  f.feedback_id 
