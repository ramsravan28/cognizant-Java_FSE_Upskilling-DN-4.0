SELECT YEAR(registration_date) AS year, MONTH(registration_date) AS month, COUNT(*) AS registration_count  
FROM Registrations  
GROUP BY year, month  
ORDER BY year DESC, month DESC;
