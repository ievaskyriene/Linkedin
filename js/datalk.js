"use strict";

const feed = [

{
    author: {
        name: 'Chuck',
        surname: 'Norris',
        connection: "1st",
        position: 'CEO at Chuck Norris and co',
        img: 'chuck.jpg',
        link: '#'
    },
    time: 1583832433393,
    content: {
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit aut dolores soluta impedit, nostrum consequatur nam! Consectetur ipsam quas illo.'
    }
},

{
    author: {
        name: 'Vardenis2',
        surname: 'Pavardenis',
        connection: "2nd",
        position: 'CEO at',
        img: 'user.png',
        link: '#'
    },
    time: 1583832433393,
    content: {
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit aut dolores soluta impedit, nostrum consequatur nam! Consectetur ipsam quas illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit aut dolores soluta impedit, nostrum consequatur nam! Consectetur ipsam quas illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit aut dolores soluta impedit, nostrum consequatur nam! Consectetur ipsam quas illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit aut dolores soluta impedit, nostrum consequatur nam! Consectetur ipsam quas illo.'
    }
},

{
    author: {
        name: 'Vardenis3',
        surname: 'Pavardenis',
        connection: "2nd",
        position: 'CEO at',
        img: 'user.png',
        link: '#'
    },
    time: 1583832433393,
    content: {
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        images: [
            'pic1.jpg'
        ]
    }
},

{
    author: {
        name: 'Vardenis3',
        surname: 'Pavardenis',
        connection: "2nd",
        position: 'CEO at',
        img: 'user.png',
        link: '#'
    },
    time: 1583832433393,
    content: {
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        images: [
            'pic1.jpg',
            'pic2.jpg'
        ]
    }
},

{
    author: {
        name: 'Vardenis3',
        surname: 'Pavardenis',
        connection: "2nd",
        position: 'CEO at',
        img: 'user.png',
        link: '#'
    },
    time: 1583832433393,
    content: {
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        images: [
            'pic1.jpg',
            'pic2.jpg',
            'pic3.jpg'
        ]
    }
},

]
const views = [
        {
            row: "Who viewed your profile",
            number: 30
        },

        {
            row: "Views on your post",
            number: 2000
        },
        {
            row: "Connections",
            number: 500
        }
]

console.log(views.row)

const groups = [
    {
        icon: '<i class="fas fa-campground"></i>',
        text: "Business Insider Intelligence"
    },

    {
        icon: '<i class="fas fa-campground"></i>',
        text: "Business Insider Tech"
    },

    {
        icon: '<i class="fas fa-campground"></i>',
        text: "Harvard Business Review"
    }
]

const hashtags = [
    {
        icon: '<i class="fas fa-hashtag"></i>',
        text: "programming"
    },

    { 
        icon: '<i class="fas fa-hashtag"></i>',
        text: "softwaredesign"
    },

    { 
        icon: '<i class="fas fa-hashtag"></i>',
        text: "softwareengineering"
    }
]

const addmenu = [
    {
        column: "People"
    },
    {
        column: "Jobs"
    },
    {
        column: "Content"
    },
    {
        column: "Companies"
    },
    {
        column: "Schools"
    },
    {
        column: "Groups"
    }
]

const headerMenu = [
    {
        i: '<i class="fas fa-home"></i>',
        p: 'Home'
    },

    {
        i: ' <i class="fas fa-user-friends"></i>',
        p: 'My network'
    },
    {
        i: '<i class="fas fa-suitcase"></i>',
        p: 'Jobs'
    },
    {
        i: `<i class="fas fa-envelope-square"></i>`,
        p: 'Messages'
    },
    {
        i: '<i class="far fa-bell"></i>',
        p: 'Notifications'
    },
    {
        i: '<img src="./img/chuck.jpg" alt="User photo">',
        p: 'Me'
    },
    {
        i: ' <i class="fas fa-th-large"></i>',
        p: 'Work'
    }
]

const addToYourFeed = [

    {
        name: 'Richard Branson',
        activity: 'Founder at Virgin Group',
        img: 'branson.jpg',
        follow: {
            plus: "+",
            text: "follow"
        },
    },

    {
        name: 'Ted Conferences',
        activity: 'Media Production',
        img: 'ted-logo.png',
        follow: {
            plus: "+",
            text: "follow"
        },
    },

    {
        name: 'Verslo Žinios',
        activity: 'Media Production',
        img: 'vz logo_big.png',
        follow: {
            plus: "+",
            text: "follow"
        },
    }


]

console.log(addToYourFeed)





