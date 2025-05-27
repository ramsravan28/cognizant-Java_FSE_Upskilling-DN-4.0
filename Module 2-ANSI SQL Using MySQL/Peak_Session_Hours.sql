SELECT event_id, COUNT(session_id) AS session_count  
FROM Sessions  
WHERE HOUR(start_time) BETWEEN 10 AND 12  
AND HOUR(end_time) BETWEEN 10 AND 12  
GROUP BY event_id;
