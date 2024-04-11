const mySet = new Set();
mySet.add("attendee A");
mySet.add("attendee B");
mySet.add("attendee C");

const object1 = {
    title: "meeting 1",
    date: new Date("2024-01-09"),
    toJSON: function() {
        return {
          title: this.title,
          date: this.date,
          formattedDate: `${(this.date.getMonth() + 1).toString().padStart(2, '0')}/${this.date.getDate().toString().padStart(2, '0')}/${this.date.getFullYear()}`
        };
      },
    location: "Hall A",
    attendees: mySet

}

const mySet2 = new Set();
mySet2.add("attendee A2");
mySet2.add("attendee B2");
mySet2.add("attendee C2");

const object2 = {
    title: "meeting 2",
    date: new Date("2024-01-10"),
    toJSON: function() {
        return {
          title: this.title,
          date: this.date,
          formattedDate: `${(this.date.getMonth() + 1).toString().padStart(2, '0')}/${this.date.getDate().toString().padStart(2, '0')}/${this.date.getFullYear()}`
        };
      },
    location: "Hall B",
    attendees: mySet2

}

const mySet3 = new Set();
mySet3.add("attendee A3");
mySet3.add("attendee B3");
mySet3.add("attendee C3");

const object3 = {
    title: "meeting 3",
    date: new Date("2024-01-11"),
    toJSON: function() {
        return {
          title: this.title,
          date: this.date,
          formattedDate: `${(this.date.getMonth() + 1).toString().padStart(2, '0')}/${this.date.getDate().toString().padStart(2, '0')}/${this.date.getFullYear()}`
        };
      },
    location: "Hall C",
    attendees: mySet3

}

const mySet4 = new Set();
mySet4.add("attendee A4");
mySet4.add("attendee B4");
mySet4.add("attendee C4");

const object4 = {
    title: "meeting 4",
    date: new Date("2024-01-12"),
    toJSON: function() {
        return {
          title: this.title,
          date: this.date,
          formattedDate: `${(this.date.getMonth() + 1).toString().padStart(2, '0')}/${this.date.getDate().toString().padStart(2, '0')}/${this.date.getFullYear()}`
        };
      },
    location: "Hall D",
    attendees: mySet4

}

const mySet5 = new Set();
mySet5.add("attendee A5");
mySet5.add("attendee B5");
mySet5.add("attendee C5");

const object5 = {
    title: "meeting 5",
    date: new Date("2024-01-13"),
    toJSON: function() {
        return {
          title: this.title,
          date: this.date,
          formattedDate: `${(this.date.getMonth() + 1).toString().padStart(2, '0')}/${this.date.getDate().toString().padStart(2, '0')}/${this.date.getFullYear()}`
        };
      },
    location: "Hall E",
    attendees: mySet5

}

const mySet6 = new Set();
mySet6.add("attendee A6");
mySet6.add("attendee B6");
mySet6.add("attendee C6");

const object6 = {
    title: "meeting 6",
    date: new Date("2024-01-14"),
    toJSON: function() {
        return {
          title: this.title,
          date: this.date,
          formattedDate: `${(this.date.getMonth() + 1).toString().padStart(2, '0')}/${this.date.getDate().toString().padStart(2, '0')}/${this.date.getFullYear()}`
        };
      },
    location: "Hall F",
    attendees: mySet6

}

const mySet7 = new Set();
mySet7.add("attendee A7");
mySet7.add("attendee B7");
mySet7.add("attendee C7");
mySet7.add("attendee D7");

const object7 = {
    title: "meeting 7",
    date: new Date("2024-01-15"),
    toJSON: function() {
        return {
          title: this.title,
          date: this.date,
          formattedDate: `${(this.date.getMonth() + 1).toString().padStart(2, '0')}/${this.date.getDate().toString().padStart(2, '0')}/${this.date.getFullYear()}`
        };
      },
    location: "Hall G",
    attendees: mySet7

}

const mySet8 = new Set();
mySet8.add("attendee A8");
mySet8.add("attendee B8");
mySet8.add("attendee C8");

const object8 = {
    title: "meeting 8",
    date: new Date("2024-01-16"),
    toJSON: function() {
        return {
          title: this.title,
          date: this.date,
          formattedDate: `${(this.date.getMonth() + 1).toString().padStart(2, '0')}/${this.date.getDate().toString().padStart(2, '0')}/${this.date.getFullYear()}`
        };
      },
    location: "Hall H",
    attendees: mySet8

}
let objects = [object1, object2, object3, object4, object5, object6, object7, object8];

let newArray = objects.filter(function(num) {
    return objects.indexOf(num) <= 6;
}
)

console.log(newArray);

const newArray2 = objects.map(function(num2){
    return objects.indexOf(num2) <=6;
})

console.log(newArray2);

const myWeakmap = new WeakMap();
const key1 ={};
const value1 = "Miguel";
myWeakmap.set(key1, value1);

const myWeakmap2 = new WeakMap();
const key2 ={};
const value2 = "Violet";
myWeakmap2.set(key2, value2);

const myWeakmap3 = new WeakMap();
const key3 ={};
const value3 = "Frank";
myWeakmap3.set(key3, value3);

const myWeakmap4 = new WeakMap();
const key4 ={};
const value4 = "Pauline";
myWeakmap4.set(key4, value4);

const myWeakmap5 = new WeakMap();
const key5 ={};
const value5 = "Lincoln";
myWeakmap5.set(key5, value5);

const myWeakmap6 = new WeakMap();
const key6 ={};
const value6 = "Emily";
myWeakmap6.set(key6, value6);

const myWeakmap7 = new WeakMap();
const key7 ={};
const value7 = "Ivan";
myWeakmap7.set(key7, value7);

const myWeakmap8 = new WeakMap();
const key8 ={};
const value8 = "Wilson";
myWeakmap8.set(key8, value8);

const tbody=document.querySelector('#data-table tbody')
objects.forEach(({ title, date, location }) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${title}</td>
      <td>${date}</td>
      <td>${location}</td>
    `;
    tbody.appendChild(row);
  });

  function addAttendee(title, name){
    let x = mySet;
    if (title === meeting1){
        let x = mySet;
    }
    else if (title === meeting2){
        let x = mySet2;
    }
    else if (title === meeting3){
        let x = mySet3;
    }
    else if (title === meeting4){
        let x = mySet4;
    }
    else if (title === meeting5){
        let x = mySet5;
    }
    else if (title === meeting6){
        let x = mySet6;
    }
    else if (title === meeting7){
        let x = mySet7;
    }
    else {
        let x = mySet8;
    }
    x.add(name);
}

addAttendee(meeting1, "Attendee 76");
console.log(object1.attendees);

const myJSON = JSON.stringify(objects);

console.log(myJSON);

const firstEvent = objects[0];


console.log("Properties of the first event object:");
const eventKeys = Object.keys(firstEvent);
console.log(eventKeys);


console.log("\nValues of the first event object:");
const eventValues = Object.values(firstEvent);
console.log(eventValues);


console.log("\nProperties and values of the first event object:");
const eventEntries = Object.entries(firstEvent);
console.log(eventEntries);
  
console.log("Title and Date of Each Event:");
objects.forEach(event => {
  console.log(`Title: ${event.title}, Date: ${event.date.toLocaleDateString()}`);
});

function deleteEvent(eventName) {
    
    const index = objects.findIndex(event => event.title === eventName);
  
     if (index !== -1) {
      objects.splice(index, 1);
      console.log(`Event "${eventName}" has been deleted.`);
    } else {
      console.log(`Event "${eventName}" not found.`);
    }
  }

  deleteEvent("meeting 1");

   
  console.log("\nUpdated Events Array:");
  console.log(objects);
  
  const eventWithMostAttendees = objects.reduce((maxEvent, currentEvent) => {
    return currentEvent.attendees.size > maxEvent.attendees.size ? currentEvent : maxEvent;
  }, objects[0]);
  
  console.log("Event with the most attendees:", eventWithMostAttendees);

