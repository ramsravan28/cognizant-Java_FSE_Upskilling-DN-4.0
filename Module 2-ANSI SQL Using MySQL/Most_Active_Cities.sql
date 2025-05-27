SELECT city, COUNT(DISTINCT user_id) AS user_count  
FROM Users  
JOIN Registrations ON Users.user_id = Registrations.user_id  
GROUP BY city  
ORDER BY user_count DESC  
LIMIT 5;
