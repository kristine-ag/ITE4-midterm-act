// mymodule.js

const pageData = {
    homePageData: {
        navLinks: [
            { href: "./home", text: "Home", animation: "animate__animated animate__slideInLeft" },
            { href: "./about", text: "About", animation: "animate__animated animate__slideInLeft" },
            { href: "./portfolio", text: "Portfolio", animation: "animate__animated animate__slideInRight" },
            { href: "./game", text: "Game", animation: "animate__animated animate__slideInRight" },
        ],
        mainImage: "https://media.tenor.com/lCKwsD2OW1kAAAAi/happy-cat-happy-happy-cat.gif",
        movingImage: "https://media.tenor.com/TT1hCsF1vUwAAAAi/banana-cat-running.gif",
        pageTitle: "Welcome To My Website!",
        ctaLinks: [
            { href: "./about", text: "About Me" },
            { href: "./portfolio", text: "My Portfolio" },
            { href: "./game", text: "Play a Game" },
        ],
    },

    aboutPageData: {
        navLinks: [
            { href: "./home", text: "Home" },
            { href: "./about", text: "About" },
            { href: "./portfolio", text: "Portfolio" },
            { href: "./game", text: "Game" },
        ],
        title: "Kristine Angela A. Gallawan",
        profilePictureUrl: "https://scontent.fdvo2-2.fna.fbcdn.net/v/t1.6435-9/48386779_2154308901458373_5698394108175843328_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHXmyugzPqRbQhgtaPCkX_52OVcxN3PsyTY5VzE3c-zJEH41TBXjSbbLfUXPAqmXvH6egxXus81j1WjWWKfFm17&_nc_ohc=bLKS6YrHwVYAb7e9svn&_nc_ht=scontent.fdvo2-2.fna&oh=00_AfAOl-J-eZKFbsnq3Slv4MWFg9UP0TqwpkP7wGHbGAGCZg&oe=66430FCA",
        movingImageUrl: "https://media.tenor.com/TT1hCsF1vUwAAAAi/banana-cat-running.gif",
        quotes: [
            "I am Kristine Angela A. Gallawan,",
            "A 3rd Year Student at Ateneo de Davao University",
            "At hindi nila alam na isa pala akong anak ng Mafia Boss",
            "And I believe in the saying that the children are our future",
            "Teach them well and let them lead the way",
            "Show them all the beauty they possess inside",
            "Give them a sense of pride to make it easier",
            "Let the children's laughter remind us how we used to be",
            "And I, Thank you!"
        ]
    },

    portfolioPageData: {
        navLinks: [
            { href: "./home", text: "Home", animation: "animate__animated animate__slideInLeft" },
            { href: "./about", text: "About", animation: "animate__animated animate__slideInLeft" },
            { href: "./portfolio", text: "Portfolio", animation: "animate__animated animate__slideInRight" },
            { href: "./game", text: "Game", animation: "animate__animated animate__slideInRight" },
        ],
        movingImageUrl: "https://media.tenor.com/TT1hCsF1vUwAAAAi/banana-cat-running.gif",
        name: "Kristine Angela A. Gallawan",
        role: "BSIS Student | Ateneo de Davao University",
        education: [
            {
                degree: "Bachelor of Science in Information Systems",
                school: "Ateneo de Davao University",
                batch: "Hopefully Batch 2024-2025"
            },
            {
                degree: "S.T.E.M. - Pre Computer Studies",
                school: "Ateneo de Davao University",
                batch: "Batch 2020-2021"
            },
            {
                degree: "Computer System Servicing Major",
                school: "Baguio National School of Arts and Trades",
                batch: "Batch 2018-2019"
            }
        ],
        skills: ["Programming Languages: Python, JavaScript, C++, Dart.", "Web Development: HTML, CSS, React", "Database Management: SQL", "Version Control: Git, GitHub"],
        experience: [
            {
                subject: "INTRODUCTION TO COMPUTING",
                when: "1st Year - 1st Semester"
            },
            {
                subject: "COMPUTER PROGRAMMING 1",
                when: "1st Year - 1st Semester"
            },
            {
                subject: "COMPUTER PROGRAMMING 2",
                when: "1st Year - 2nd Semester"
            },

        ],
        repositories: [
            { name: "IT-ELECTIVE-4-PRELIMS-PROJECT", url: "https://github.com/kristine-ag/ITE4-prelims", type: "Public Repository - Personal project" },
            { name: "IT-ELECTIVE-4-PRELIMS-PROJECT", url: "https://github.com/kristine-ag/ITE4-prelims", type: "Public Repository - Personal project" },
            { name: "IT-ELECTIVE-4-PRELIMS-PROJECT", url: "https://github.com/kristine-ag/ITE4-prelims", type: "Public Repository - Personal project" },
            { name: "IT-ELECTIVE-4-PRELIMS-PROJECT", url: "https://github.com/kristine-ag/ITE4-prelims", type: "Public Repository - Personal project" },
            { name: "IT-ELECTIVE-4-PRELIMS-PROJECT", url: "https://github.com/kristine-ag/ITE4-prelims", type: "Public Repository - Personal project" },
            { name: "IT-ELECTIVE-4-PRELIMS-PROJECT", url: "https://github.com/kristine-ag/ITE4-prelims", type: "Public Repository - Personal project" },
            // Add other repositories...
        ],
    },

    gamePageData: {
        navLinks: [
            { href: "./home", text: "Home", animation: "animate__animated animate__slideInLeft" },
            { href: "./about", text: "About", animation: "animate__animated animate__slideInLeft" },
            { href: "./portfolio", text: "Portfolio", animation: "animate__animated animate__slideInRight" },
            { href: "./game", text: "Game", animation: "animate__animated animate__slideInRight" },
        ],
        games: [
            {
                title: "2048",
                gifUrl: "https://miro.medium.com/v2/resize:fit:820/1*eFZKUHOG7Dte_0DJ8ORU5g.gif",
                link: "./2048"
            },
            {
                title: "tic-tac-toe",
                gifUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Tic-tac-toe-animated.gif",
                link: "./tictactoe"
            }
            // Add more games as needed
        ],
        movingImageUrl: "https://media.tenor.com/TT1hCsF1vUwAAAAi/banana-cat-running.gif"
    },
};

module.exports = pageData;