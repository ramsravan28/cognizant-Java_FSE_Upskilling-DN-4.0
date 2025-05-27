SELECT u.full_name, e.title, e.city, e.start_date
FROM Users u, Events e, Registrations r
WHERE u.user_id = r.user_id
  AND r.event_id = e.event_id
  AND u.city = e.city
  AND e.status = 'upcoming'
ORDER BY e.start_date;
