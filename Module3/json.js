const room = {
    number: 23
}

const meeting = {
    title: 'conference',
    participants: ['John', 'Ann']
}

const stringMeeting = JSON.stringify(meeting)
const parsedMeeting = JSON.stringify(stringMeeting)

console.log(stringMeeting)
console.log(parsedMeeting)

meeting.place = room;
room.occupiedBy = meeting;

const meetingString = JSON.stringify(meeting, (key, value) => {
    console.log('key: ' + key)
    console.log('Value: ' + value)

    if(key != '' && value== meeting) return undefined;

    return value;
}, 2);

console.log(meetingString)