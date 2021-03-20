INSERT INTO users (username, password, dept_number, user_admin) /*adding admin functionality later*/
VALUES ($1, $2, $3, $4)
returning *;


    
