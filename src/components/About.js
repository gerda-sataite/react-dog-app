import React from 'react';

function Home() {
    return (
        <div className="aboutPage">
            <h1>The idea</h1>
            <p>
                In this dire time we are faced with quarantine, pandemic, and the four walls 
                that surround, and slowly close in on us. How better to aleviate the stresses 
                of our tormented new world than to kick back, relax and enjoy the company of 
                online doggos and modern day philosophers. 
            </p>
            <h2>API's</h2>
            <p><b>The following API's were used for this individual project:</b></p>
            <p>
                <a
                    href="https://dog.ceo/dog-api/documentation/"
                    rel="noopener noreferrer"
                    target="_blank">Dog API</a></p>
            <p>
                <a
                    href="https://pprathameshmore.github.io/QuoteGarden/"
                    rel="noopener noreferrer"
                    target="_blank">Quote API</a>
            </p>
            <h2>How does it work</h2>
            <p>
                The functionality of this app is simple. It uses the Dog API and Random 
                Quote API to return inspirational quotes and pictures of dogs.
                There is also a possibility to search for dogs by dog breed in the app 
                as well, so instead of looking at one picture, the search will return 
                all the pictures of the particular dog breed that you have searched for.
                If you prefer cats, there is a section in the app for cats as well.
                The navigation bar is set up with Reach Router which is a simple and 
                smart routing utility for easy navigation in the app.
            </p>
            <h2>Technologies</h2>
            <p>
                    <li>JavaScript</li>
                    <li>React JS</li>
                    <li>Reach Router</li>
                    <li>React Bootstrap</li>
                    <li>CSS</li>
                    <li>HTML</li>
            </p>
            <h2>What is the setup?</h2>
            <p>
                To start working on a project, you will need to create a new React app through 
                the terminal by using <code>npm</code> (or you can also use <code>yarn</code>):{" "}
            </p>
            <code>
                npx create-react-app my-app <br />
                cd my-app <br />
                npm start <br />
            </code>
            <br />
            <p>
                There are a few dependencies that need to be set up in order for this to work. 
                The first one is React Bootstrap:{" "}
            </p>
            <code>npm install react-bootstrap bootstrap</code>
            <br />
            <br />
                How and which components from React Bootstrap you will use is completely up to 
                you. You can find out more about React Bootstrap{" "}
            <a 
                href="https://react-bootstrap.github.io/getting-started/introduction/"
                rel="noopener noreferrer"
                target="_blank"
                >
                    here
                </a>
                .
                <br />
                <br />
            <p>
                Another dependency that you would need to install is called Grommet: {" "}
            </p>
            <code>
                npm install grommet grommet-icons styled-components --save
            </code>
            <br />
            <br />
            <p>
                More information about Grommet, components and how to use it can be found{" "}
                <a 
                href="https://github.com/grommet/grommet-starter-new-app"
                rel="noopener noreferrer"
                target="_blank"
                >
                    here
                </a>
                {" "}and{" "}
                <a 
                    href="https://v2.grommet.io/components"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    here
                </a>
                .
            </p>
            <p>
                Another thing that needs to be installed is Reach Router, which is a
				smart and simple routing utility:{" "}
            </p>
            <code>
                npm install @reach/router
            </code>
            <br />
			<br />
			<p>
				More information on how to utilise Reach Router and find the tutorials
				can be found{" "}
				<a
					href="https://reach.tech/router"
					target="_blank"
					rel="noopener noreferrer"
				>
					here
				</a>
				.
			</p>
            <h2>Credits</h2>
            <p>
                I would like to express sincere gratitude to our Software Engineering 
                Apprenticeship coach Richard Ng and say a huge "Thank You" for his 
                immense support and patience during these past 5 weeks. And I would 
                also like to say "Thank You" to the rest of the group for the help that 
                was offered as we were all building our own individual projects.
            </p>
            
            <iframe 
            src="https://giphy.com/embed/osjgQPWRx3cac" 
            width="480" 
            height="480" 
            frameBorder="0" 
            class="giphy-embed" 
            allowFullScreen></iframe>
            <p>
            <a 
            href="https://giphy.com/gifs/sticker-osjgQPWRx3cac"
            >
                via GIPHY
            </a>
            </p>

        </div>
    )
}

export default Home