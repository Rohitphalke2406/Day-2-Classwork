const Root = document.getElementById('root');

const HR = React.createElement('hr');
const H1 = React.createElement('h1' , {} , "Learn Web Development");

const paratext = "Welcome to the MDN learning area. This set of articles aims to guide complete beginners to web development with all that they need to start coding websites."

const paragraph = React.createElement('p', {} , paratext);

const paragraph2 = React.createElement('p' ,{} , 
    "The aim of this area of MDN is not to take you from \"beginner\" to \"expert\" but to take you from \"beginner\" to \"comfortable.\" From there, you should be able to start making your way, learning from ",
    React.createElement('a', { href: 'https://developer.mozilla.org/en-US/', target: '_blank' }, 'the rest of MDN'),
    ", and other intermediate to advanced resources that assume a lot of previous knowledge."
);

const paragraph3 = React.createElement('p', {} , "If you are a complete beginner, web development can be challenging - we will hold your hand and provide enough detail for you to feel comfortable and learn the topics properly. You should feel at home whether you are a student learning web development (on your own or as part of a class), a teacher looking for class materials, a hobbyist, or someone who just wants to understand more about how web technologies work.");
const divContainer = React.createElement('div' , {}, H1 , paragraph,paragraph2,paragraph3);

ReactDOM.render(divContainer , Root);