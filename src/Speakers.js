import React from 'react';
import ai from './aaron-irizarry.jpg';
import ac from './adam-connor.jpg';
import as from './aj-self.jpg';
import sh from './shay-howe.jpg';
import bp from './bermon-painter.jpg';
import ag from './arman-ghosh.jpg';
export default function Speakers() {
  return (
    <>
    
      <nav className='nav2'>
        <section>
          <h2>Speakers</h2>
          <p>We’re happy to welcome over twenty speakers to present on the industry’s latest technologies.<br />
            Prepare for an inspiration extravaganza.</p>
        </section>
      </nav>
      <div className='container'>
      <div class="row rows" id="row-1">
        <div class="column columns" >
          <h3>Aaron Irizarry</h3>
          {/* <h4>DESIGNING A CULTURE OF DESIGN</h4> */}
          <p>Workplace culture doesn’t start with beanbags, foosball tables, or a beer fridge, and it doesn’t end with neckties, PCs, or big corporations.
            It’s the unwritten rules, behavior, beliefs, and the motivations that enable good work to get done, or it’s what stifles a workforce. For design to be most effective and for designers to feel valued, we need to work in a culture that embraces design and allows it to succeed.
            In Aaron’s session he will explore how to recognize the traits of organizations that *get* design, both large and small. He will share what those teams, departments, and companies have that others don’t, and more importantly, how to begin to change your own workplace’s culture. Once you’ve worked within a culture of design it’s almost impossible to imagine yourself anywhere else.</p>
          <h3>ABOUT AARON</h3>
          <p>
            Aaron Irizarry is a Senior Product Designer for Nasdaq OMX, a lover of heavy metal, a foodie, and a master of BBQ arts.
            You can find some of his thoughts and presentations on the conversation surrounding design over at discussingdesign.com.
          </p>
        </div>
        <div class="column columns">
          <a href="https://twitter.com/i/flow/login">
            <img src={ai} className='image' />
          </a>
        </div>
      </div>

      <div class="row rows" id="row-2">
        <div class="column columns">
          <h3>Adam Connor</h3>
          {/* <h4>LIGHTS! CAMERA! INTERACTION! DESIGN INSPIRATION FROM FILMMAKERS</h4> */}
          <p>Films succeed in evoking responses and engaging audiences only with a combination of well-written narrative and effective storytelling technique.
            It’s the filmmaker’s job to put this together. To do so they’ve developed processes, tools and techniques that allow them to focus attention, emphasize information, foreshadow and produce the many elements that together comprise a well-told story.

            With this workshop, we’ll  We’ll look at some tools used in film, such as cinematic patterns, beat sheets, and storyboards. We’ll consider why they’re used and how we might look to them for inspiration.
          </p>
          <h3>ABOUT Adam Conor</h3>
          <p>Adam Connor is a designer, illustrator and speaker passionate about collaboration, communication, creativity and storytelling. As an Experience Design Director with Mad*Pow,  a story; uncovering that story is key to its success. Occasionally, he shares his perspectives on design at adamconnor.com and discussingdesign.com.</p>
        </div>
        <div class="column columns">
          <a href="https://twitter.com/i/flow/login">
            <img src={ac} className='image' />
          </a>
        </div>
      </div>

      <div class="row rows">
        <div class="column columns">
          <h3 className=''>AJ Self</h3>
          {/* <h4>(YOU SHOULD BE) TESTING YOUR JAVASCRIPT</h4> */}
          <p>JavaScript applications frequently utilize battle-tested libraries like jQuery, AngularJS, Backbone.js and more, but how can we be sure that our code is ready for production? This talk will share tips on how writing tests can be written easily and quickly and how to remove buggy code through testing.
          </p>
          <h3>ABOUT AJ Self</h3>
          <p>
            AJ is a software engineer specializing in JavaScript working at Belly in Chicago. Lately he has been writing applications with AngularJS and loving it. When not coding he is out loving the outdoors with his dog, Sunshine.
          </p>
        </div>
        <div class="column columns">
          <a href="https://twitter.com/i/flow/login">
            <img src={as} className='image' />
          </a>
        </div>
      </div>

      <div class="row rows">
        <div class="column columns" >
          <h3>Arman Ghosh</h3>
          {/* <h4>DESIGNING DEALS: HOW GOOD DESIGN DRIVES SALES</h4> */}
          <p>
            Perception influences decisions, especially when it comes to selling products and services. Learn why before you even start sales conversations; good, thoughtful design and presentation will define you and your ability to close deals.
          </p>
          <h3>ABOUT Arman Ghosh</h3>
          <p>
            Arman is an entrepreneur who has his roots planted in building aggressive sales and revenue-generating teams. Having built out national sales and operations teams in the B2B and consumer spaces, his focus has been driving aggressive growth for technology-based companies. He has an extensive operating background and has built a career disrupting sales processes and approaches with companies doing the same in their respective technology spaces.
          </p>
        </div>
        <div class="column columns">
          <a href="https://twitter.com/i/flow/login">
            <img src={ag} className='image' />
          </a>
        </div>
      </div>

      <div class="row rows">
        <div class="column columns">
          <h3>Bermon Painter</h3>
          {/* <h4>DEATH TO WIREFRAMES: LONG LIVE RAPID PROTOTYPING</h4> */}
          <p>
            Static wireframes are a drag on the whole design process. Prototyping makes things a little better by allowing you to stitch together static wireframes or mockups while adding basic interactions. Rapid prototyping with HTML, CSS, and JavaScript is even better and faster; it increases collaboration and improves the iteration process. Kill your wireframes. Long live rapid prototyping.
          </p>
          <h3>ABOUT BERMON</h3>
          <p>
            Bermon is the organizer of various community groups for user experience designers and front-end developers, and the organizer of Blend Conference, a three-day, multi-track event for user experience strategists, designers and developers. He also leads the user experience team for Cardinal Solutions’ Charlotte office, where he consults with large enterprise clients on interesting problems across user experience, design and front-end developme
          </p>
        </div>
        <div class="column columns">
          <a href="https://twitter.com/i/flow/login">
            <img src={bp} className='image' />
          </a>
        </div>
      </div>

      <div class="row rows">
        <div class="column columns">
          <h3>Shay Howe</h3>
          {/* <h4>LESS IS MORE: HOW CONSTRAINTS CULTIVATE GROWTH</h4> */}
          <p>
            By setting constraints, we force ourselves to be more productive. They help us make decisions, creating focus around the problem we are trying to solve. They improve our consistency, which provides a better experience for our users. And they help us grow, a valuable asset in times of innovation.
          </p>
          <h3>ABOUT SHAY</h3>
          <p>
            As a designer and front-end developer, Shay Howe has a passion for solving problems while building creative and intuitive products. Shay specializes in product design and interface development, specialties which he regularly writes and speaks about.
          </p>
        </div>
        <div class="column columns">
          <a href="https://twitter.com/i/flow/login">
            <img src={sh} className='image' />
          </a>
        </div>
      </div>
      </div>
    </>
  )
}