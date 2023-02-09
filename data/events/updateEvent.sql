UPDATE events
SET eventTitle=@eventTitle,
eventDescription=@eventDescription,
startDate=@startDate,
endDate=@endDate,
avenue=@avenue,
maxMember=@maxMember
WHERE eventId=@eventId

select eventTitle,
eventDescription,
startDate,
endDate,
avenue,
maxMember
FROM events
WHERE eventId=@eventId 
