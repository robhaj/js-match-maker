var numStudents, usrArray;

  numStudents = prompt("What is the total number of students learning javascript?", "Example: 25");
  usrArray = [];

  for (i=numStudents; i > 0; i--) {
      var usrName = prompt("What is your name?");
      var usrPhone = prompt("What is your phone number?");
      var usrCity = prompt("What city do you live in?");
      var studentObj = {
        "name" : usrName,
        "city" : usrCity,
        "phone" : usrPhone,
      };
      usrArray.push(studentObj);
    };

var numMentors, mentorArray;

  numMentors = prompt("What is the total number of mentors teaching javascript?", "Example: 25");
  mentorArray = [];

  for (i=numMentors; i > 0; i--) {
      var mentorName = prompt("What is your name?");
      var mentorPhone = prompt("What is your phone number?");
      var mentorCity = prompt("What city do you live in?");
      var mentorObj = {
        "name" : mentorName,
        "city" : mentorCity,
        "phone" : mentorPhone,
      };
      mentorArray.push(mentorObj);
    };

    alert("There are " + numStudents + " students learning javascript.");
    alert("There are " + numMentors + " mentors teaching javascript.");

  for (var l=0; l < numStudents; l++) {

    alert("Name : " + usrArray[l].name + "\n" + "City : " + usrArray[l].city + "\n" + "Phone : " + usrArray[l].phone);
  };

  for (var m=0; m < numMentors; m++) {

    alert("Name : " + mentorArray[m].name + "\n" + "City : " + mentorArray[m].city + "\n" + "Phone : " + mentorArray[m].phone);
  };
