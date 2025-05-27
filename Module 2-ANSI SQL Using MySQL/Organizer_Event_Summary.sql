SELECT organizer_id, COUNT(event_id) AS total_events,  
SUM(status = 'upcoming') AS upcoming_events,  
SUM(status = 'completed') AS completed_events,  
SUM(status = 'cancelled') AS cancelled_events  
FROM Events  
GROUP BY organizer_id;
