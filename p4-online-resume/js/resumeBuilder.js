var bio = {
    "name": "Rajat Patwa",
    "role": "Software Engineer",
    "contacts": {
        "mobile": "+91 (759) 7305718",
        "email": "rajat249@gmail.com",
        "github": "razat249",
        "twitter": "@razat_patkar",
        "location": "Baran, India"
    },
    "welcomeMessage": "Nice to see you :)",
    "skills": [
        "Software Engineer", "Front-End Developer", "Full-Stack Developer", "Programmer"
    ],
    "biopic": "images/hero.jpg",
    display: function() {
        var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
        $("#header").prepend(formattedRole);
        var formattedName = HTMLheaderName.replace('%data%', bio.name);
        $("#header").prepend(formattedName);

        var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location)
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $("#topContacts").prepend(formattedLocation, formattedTwitter, formattedGithub, formattedEmail, formattedMobile);
        $("#footerContacts").prepend(formattedLocation, formattedTwitter, formattedGithub, formattedEmail, formattedMobile);

        var WelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(WelcomeMessage);
        var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").append(formattedPic);

        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);

            bio.skills.forEach(function(skill) {
                formattedskill = HTMLskills.replace("%data%", skill);
                $("#skills").append(formattedskill);
            });
        }
    }
};

var education = {
    "schools": [{
            "name": "Govt Engineering College Bikaner",
            "degree": "BTech",
            "dates": "July 2013 - May 2017",
            "location": "Bikaner, India",
            "majors": ["Computer Science"],
            "url": "https://www.ecb.ac.in"
        }, {
            "name": "Udacity Front End Nanodegree",
            "degree": "Nanodegree",
            "majors": ["Computer Science"],
            "dates": "September 2016",
            "location": "Mountain View, CA",
            "url": "https://www.udacity.in"

        }

    ],
    "onlineCourses": [{
        "title": "Algorithms and Data Structures",
        "school": "Interviewbit",
        "dates": "2016",
        "url": "http://www.Interviewbit.com"
    }],
    display: function() {
        education.schools.forEach(function(school) {
            $("#education").append(HTMLschoolStart);
            var formattedName = HTMLschoolName.replace('%data%', school.name);
            $(".education-entry:last").append(formattedName);
            var formattedDates = HTMLschoolDates.replace('%data%', school.dates);
            $(".education-entry:last").append(formattedDates);
            var formattedLocation = HTMLschoolLocation.replace('%data%', school.location);
            $(".education-entry:last").prepend(formattedLocation);
            var formattedDegree = HTMLschoolDegree.replace('%data%', school.degree);
            $(".education-entry:last").append(formattedDegree);
            var formattedDegree = HTMLschoolMajor.replace("%data%", school.majors);
            $(".education-entry:last").append(formattedDegree);

        });
        education.onlineCourses.forEach(function(course) {
            var formattedTitle = HTMLonlineTitle.replace("%data%", course.title);
            $(".education-entry:last").append(formattedTitle);
            var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
            $(".education-entry:last").append(formattedSchool);
            var formattedDates = HTMLonlineDates.replace("%data%", course.dates);
            $(".education-entry:last").append(formattedDates);
            var formattedURL = HTMLonlineURL.replace("%data%", course.url);
            $(".education-entry:last").append(formattedURL);
        });
    }
};

var work = {
    "jobs": [{
        "employer": "CauseCode Technologies Pvt Ltd",
        "title": "Software Engineering Intern",
        "dates": "Summer 2016",
        "location": "Pune, India",
        "description": `
					- Worked as a software engineer intern with the technologies like JAVA, groovy on grails 3, AngularJS, ReactJS.
					- Learned system design and how to build a scalable system. Also learned how to adapt different stacks.
					- Designed and Implemented job board plugin for company's corporate site https://causecode.com. The plugin can be used to create, read, update and delete job posts. Server side of the plugin is build using groovy on grails. And the front end is build using Angular. The plugin follows REST api architecture. In this project I got learn insights of Grails and AngularJS.
					- Ported some front end parts of company's corporate site from AngulaeJS to ReactJS. Here the front end is ported following the react-redux architecture. In this project I learned about design patterns used to build react-redux app.
					- Added social share buttons to the company's blog and Google ReCaptcha to crm plugin. Also done some small improvements in the company's corporate site.
			`
    }, {
        "employer": "GeeksforGeeks",
        "title": "Campus Ambassador",
        "dates": "2016-2017",
        "location": "Bikaner, India",
        "description": `
					● Responsible for promoting Competitive Programming and Open Source Development in the campus.
					● Responsible for organising different geeks classes and coding contests and leading the juniors.
			`
    }],
    display: function() {
        work.jobs.forEach(function(job) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $(".work-entry:last").append(formattedEmployerTitle);
            var formattedDates = HTMLworkDates.replace("%data%", job.dates);
            $(".work-entry:last").append(formattedDates);
            var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
            $(".work-entry:last").append(formattedDescription);
            var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
            $(".work-entry:last").prepend(formattedLocation);
        });
    }
};

var projects = {
    "projects": [{
        "title": "Student Search Engine",
        "dates": "2016",
        "description": "Create a student search engine for help in find anything for a student online",
        "images": ["images/197x148.gif", "images/197x148.gif", "images/197x148.gif"]
    }, {
        "title": "WebApp",
        "dates": "2016",
        "description": "Create a WebApp And Android App",
        "images": ["images/197x148.gif", "images/197x148.gif", "images/197x148.gif"]
    }],
    display: function() {
        projects.projects.forEach(function(project) {
            $("#projects").append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
            $(".project-entry:last").append(formattedTitle);

            var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
            $(".project-entry:last").append(formattedDates);

            var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
            $(".project-entry:last").append(formattedDescription);

            project.images.forEach(function(image) {
                formattedImage = HTMLprojectImage.replace("%data%", image);
                $(".project-entry:last").append(formattedImage);
            });
        });
    }
};

work.display();
education.display();
projects.display();
bio.display();

// $("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);