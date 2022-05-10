UPDATE table SET gender = (CASE  WHEN  gender ='male' THEN 'female' else 'male' END)

SELECT DISTINCT id +1 FROM tablename WHERE id + 1 NOT IN (SELECT DISTINCT id FROM tablename);

SELECT id,name, email, COUNT(*) FROM cii_bio.delegates GROUP BY email HAVING COUNT(*) > 1;
	
delete t1 from master_db.delegates as t1 inner join master_db.delegates as t2
where t1.id < t2.id AND t1.email=t2.email;	

-- 2th largest salary
SELECT DISTINCT(salary) FROM employee ORDER BY salary DESC LIMIT n-1,1

-- ===================================================================================

-- Windows function (ROW_FUNCTION, RANK, DENSE_RANK, LEAD and LAG, FIRST_VALUE)

-- Windows function applies aggregate and ranking function over a particular window (Set of rows)
-- OVER clause is used with window fun to define that window

    SELECT e.*, max(salary) over(partition by department) as max_salary form employee as e;

-- 1- ROW_FUNCTION - (assigns a sequential integer number to each row in the query's result set)
        SELECT e.*, ROW_FUNCTION() OVER(Partition by department) as rank from employee as e;

-- Ques- Fetch the first 2 employees form each department to join the company?
    select * from 
    (SELECT e.*, ROW_FUNCTION() OVER(Partition by department  order by id asc) as rank from employee as e) as x
    where x.rank < 3;

-- 2- RANK() -( When previous record has duplicate rank then it will skip that value)
-- Ques- Fetch the top 3 employees in each department earning the max salary?
    select * from (
    SELECT e.*, RANK() over(Partition by salary Order by salary desc) as rank from employee as e
    ) as x where x.rank < 4; 

-- 3- DENSE_RANK() -( When previous record has duplicate rank then it will not skip that value)   
    SELECT e.*, RANK() over(Partition by salary Order by salary desc) as rank,
    DENSE_RANK() over(Partition by salary Order by salary desc) as dense_rank from employee as e;

-- 4- LAG()- (from the current row, you can access data of the previous row, or the row before the previous row, and so on.)
    SELECT e.*,
    LAG(salary) over(partition by department order by id) as prev_emp_salary
    From employee as e;

-- 5- LEAD()- (from the current row, you can access data of the next row, or the row after the next row, and so on.)
    SELECT e.*,
    LEAD(salary) over(partition by department order by id) as next_emp_salary
    From employee as e;

-- Ques- Fetch a query to display if the salary of an employee is higher, Lower or equal to the prevoius employee
   SELECT e.*,
    LAG(salary) over(partition by department order by id) as prev_emp_salary,
    CASE WHEN e.salary > LAG(salary) over(partition by department order by id) THEN "Higher than Previous emp"
        WHEN e.salary < LAG(salary) over(partition by department order by id) THEN "Lower than Previous emp"
        WHEN e.salary = LAG(salary) over(partition by department order by id) THEN "same as than Previous emp"
        END as sal_range
    From employee as e;

-- 6- FIRST_VALUE()- (return the value of the specific expression with the respect to first row window frame
   
   SELECT e.*, FIRST_VALUE(id) over(order by salary desc) as highest_emp from employee as e;


-- ===================================================================================
UPDATE delegates SET event_id = 33 WHERE event_id = 2
        AND email NOT IN (SELECT 
            email
        FROM
            (SELECT 
                email, event_id
            FROM
                delegates
            WHERE
                event_id IN (2 , 33)
            GROUP BY email
            HAVING COUNT(email) = 2) AS t)


-- To take the backup of database
mysqldump database > backup -file.sql;
-- To restore the database
mysqldump database < backup -file.sql;


SET FOREIGN_KEY_CHECKS = 0; 
TRUNCATE table $table_name; 
SET FOREIGN_KEY_CHECKS = 1;
