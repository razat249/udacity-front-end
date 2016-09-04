var bio = {
			"name" : "Rajat Patwa",
			"role" : "Front-End Developer",
			"contacts" :{
					"mobile" : "+91 (759) 7305718",
					"email" : "rajat249@gmail.com",
					"github" : "razat249",
					"twitter" : "@razat_patkar",
					"location" : "Baran"
			},
			"welcomeMessage" : "Nice to see you :)",
			"skills" : [
			"Software Engineer", "Front-End Developer", "Full-Stack Developer", "Programmer"
			],
			"bioPic" : "images/hero.jpg"
}

var education = {
	"schools":  [
		{
			"name" : "Govt Engineering College Bikaner",
			"city" : "Bikaner",
			"degree" : "BTech",
			"branch" : "CS",
			"dates" : "July 2013 - May 2017",
			"location" : "Bikaner"
		},
		{
			"name" : "Udacity Front End Nanodegree",
			"city" : "Remote",
			"degree" : "Nanodegree",
			"branch" : "CS",
			"dates" : "September 2016"
		}

	],
	"onlineCourses" : [
		{
			"title" : "Algorithms and Data Structures",
			"school" : "Interviewbit",
			"dates" : "2016",
			"url" : "http://www.Interviewbit.com"
		}
	]
}

var work = {
	"jobs" : [
		{
			"employer" : "CauseCode Technologies Pvt Ltd",
			"title" : "Software Engineering Internr",
			"dates" : "Summer 2016",
			"location" : "Pune",
			"description" : `
					- Worked as a software engineer intern with the technologies like JAVA, groovy on grails 3, AngularJS, ReactJS.
					- Learned system design and how to build a scalable system. Also learned how to adapt different stacks.
					- Designed and Implemented job board plugin for company's corporate site https://causecode.com. The plugin can be used to create, read, update and delete job posts. Server side of the plugin is build using groovy on grails. And the front end is build using Angular. The plugin follows REST api architecture. In this project I got learn insights of Grails and AngularJS.
					- Ported some front end parts of company's corporate site from AngulaeJS to ReactJS. Here the front end is ported following the react-redux architecture. In this project I learned about design patterns used to build react-redux app.
					- Added social share buttons to the company's blog and Google ReCaptcha to crm plugin. Also done some small improvements in the company's corporate site.
			`
		},
		{
			"employer" : "GeeksforGeeks",
			"title" : "Campus Ambassador",
			"dates" : "2016-2017",
			"location" : "Bikaner",
			"description" : `
					● Responsible for promoting Competitive Programming and Open Source Development in the campus.
					● Responsible for organising different geeks classes and coding contests and leading the juniors.
			`
		}
	]
}

var projects = {
	"projects" : [
		{
			"title" : "Student Search Engine",
			"dates" : 2016,
			"description" : "Create a student search engine for help in find anything for a student online",
			"images" : "images/197x148.gif"
		},
		{
			"title" : "WebApp",
			"dates" : 2016,
			"description" : "Create a WebApp And Android App",
			"images" : "images/197x148.gif"
		}
	]
}

var formattedRole = HTMLheaderRole.replace('%data%',bio.role);
$("#header").prepend(formattedRole);
var formattedName = HTMLheaderName.replace('%data%',bio.name);
$("#header").prepend(formattedName);

var formattedLocation = HTMLlocation.replace('%data%',bio.contacts.location)
$("#topContacts").prepend(formattedLocation);
var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
$("#topContacts").prepend(formattedTwitter);
var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
$("#topContacts").prepend(formattedGithub);
var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
$("#topContacts").prepend(formattedEmail);
var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
$("#topContacts").prepend(formattedMobile);


var WelcomeMessage = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
$("#header").append(WelcomeMessage);
var formattedPic = HTMLbioPic.replace("%data%",bio.bioPic);
$("#header").append(formattedPic);

if(bio.skills.length>0){
	$("#header").append(HTMLskillsStart);

	var formattedskill = HTMLskills.replace("%data%",bio.skills[0]);
	$("#skills").append(formattedskill);
	formattedskill = HTMLskills.replace("%data%",bio.skills[1]);
	$("#skills").append(formattedskill);
	formattedskill = HTMLskills.replace("%data%",bio.skills[2]);
	$("#skills").append(formattedskill);
	formattedskill = HTMLskills.replace("%data%",bio.skills[3]);
	$("#skills").append(formattedskill);
	
}
function displayWorks(){
	for(job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);

		var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
		$(".work-entry:last").prepend(formattedLocation);
	}
}

displayWorks();

function SchoolsData(){
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace('%data%', education.schools[school].name);
		$(".education-entry:last").append(formattedName);
		var formattedDates = HTMLschoolDates.replace('%data%', education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);
		var formattedLocation = HTMLschoolLocation.replace('%data%', education.schools[school].city);
		$(".education-entry:last").prepend(formattedLocation);
		var formattedDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
		$(".education-entry:last").append(formattedDegree);
		var formattedDegree = HTMLschoolMajor.replace("%data%",education.schools[school].branch);
		$(".education-entry:last").append(formattedDegree);

	}	

	for (course in education.onlineCourses){
		var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
		$(".education-entry:last").append(formattedTitle);
		var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
		$(".education-entry:last").append(formattedSchool);
		var formattedDates = HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
		$(".education-entry:last").append(formattedDates);
		var formattedURL = HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);
		$(".education-entry:last").append(formattedURL);
	}

}

SchoolsData();


function projectsData(){
	for(project in projects.projects){
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images);
		$(".project-entry:last").append(formattedImage);

		/*if(projects.projects[project].images.length > 0){
			for(image in projects.projects[project].images){
				var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images);
				$(".project-entry:last").append(formattedImage);
			}
		}*/
	}
}


projectsData();


/*$(document).click(function(loc){
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});*/


/*function locationizer(work_obj) {
    var myLocations = [];
    for (var i in work_obj.jobs) {
        var loc = work_obj.jobs[i].location;
        myLocations.push(loc);
    }
    return myLocations;
}*/



function inName(name) {
	name = name.trim().split(" ");
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase()+name[0].slice(1).toLowerCase();
	return name[0]+" "+name[1];
}


// $("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);
