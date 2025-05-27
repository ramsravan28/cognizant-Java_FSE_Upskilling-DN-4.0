SELECT user_id, full_name  
FROM Users  
WHERE registration_date >= DATE_SUB(CURRENT_DATE, INTERVAL 30 DAY)  
AND user_id NOT IN (SELECT user_id FROM Registrations);
