// Your job is to define the different objects and arrays, 
// their structure, and the corresponding properties for each, 
// to represent the following information about Elizabeth's campaign.

const representative = {
    district: "",
    platform: {
        taxes: "",
        jobs: "",
        infrastructure: "",
        healthCare: "",
        crimeAndEnforcement: "",
    },
    donationUrl: "",
    eventsCalender: [],
    volunteerInfo: {
        name: "",
        address: "",
        email: "",
        phoneNumber: "",
        availability: [],
        volunteeredActivities: [],
    },
    biography: "",
    imageGallery: {
        headshot: "",
        familyPic: "",
        constituentsPic: [],
    },
    missionStatement: "",
    voteRegUrl:"",
}

function addToEventsCal(event){
    representative.eventsCalender.push(event)
}
addToEventsCal("July 4");

function addAvailabilty (dates) {
    representative.volunteerInfo.availability.push(dates)
}
addAvailabilty("may 6");

function addEmail(address) {
    representative.volunteerInfo.email = address
}
addEmail("steve@gmail.com");

console.log(representative);