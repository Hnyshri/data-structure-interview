UPDATE table SET gender = (CASE  WHEN  gender ='male' THEN 'female' else 'male' END)

SELECT DISTINCT id +1 FROM tablename WHERE id + 1 NOT IN (SELECT DISTINCT id FROM tablename);

SELECT id,name, email, COUNT(*) FROM cii_bio.delegates GROUP BY email HAVING COUNT(*) > 1;
	
delete t1 from master_db.delegates as t1 inner join master_db.delegates as t2
where t1.id < t2.id AND t1.email=t2.email;	

-- 2th largest salary
SELECT DISTINCT(salary) FROM employee ORDER BY salary DESC LIMIT n-1,1


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
