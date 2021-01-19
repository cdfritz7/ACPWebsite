import React, {Component} from "react"

import './css/Apply.css';

class ApplyComponent extends Component{

  render(){

    return(
      <div>

        <p className="text-24pt page-title">
           Apply to ACP
        </p>
        <div className="blue-yellow-bar"/>
        <p className="text-16pt centered-text" style={{textAlign:"center", paddingTop:"15px"}}>
           Want to join ACP? You can browse available positions here and submit your
           application!
        </p>

        <p className="text-24pt page-title">
           General Member Application
        </p>
        <div className="blue-yellow-bar"/>
        <p className="text-16pt centered-text" style={{paddingTop:"15px"}}>
          Apply to be an ACP general member. A general member is someone who
          identifies as an active participant in the org. This is a low time
          commitment role and you can get as much out of it as you put in.
          The only general member requirements are to participate in our
          bi-monthy meetings and to buy a t-shirt (have one item of ACP merch)!
           The benefits are optional participation in service activities,
           social events, small business promotions and other fun ACP activities.
           In order to be a committee member you MUST first apply as a general
           member!
        </p>
        <div style={{textAlign:"center"}}>
          <button
            className="my-button-md my-button-animation"
            onClick={()=>{window.open('https://docs.google.com/forms/d/e/1FAIpQLScSqmBs311pWC4NprsjYUofwgP-V2QQm6OejAF3QOKpzxfv5A/viewform?usp=sf_link')}}>
            Apply!
          </button>
        </div>

        <p className="text-24pt page-title">
           ACP Committees
        </p>
        <div className="blue-yellow-bar"/>
        <p className="text-16pt centered-text" style={{paddingTop:"15px"}}>
          Here at ACP we have five committees that work together cohesively to keep
          Austin, Austin!  To join a committee you must first apply to be a general
          member. Here are some brief descriptions of what our committees do.
        </p>
        <div style={{margin:"auto", display:"flex", flexWrap:"wrap", justifyContent:"center", width: "70%"}}>

          <div className="committee-card">
            <div className="committee-card-title">
              President
            </div>
            <div className="committee-card-body">
              President: Serving as the president or co-presidents of ACP is a big job,
              but also an exciting one. As the president of the Austin
              Conservation Project you have the platform and therefore the
              opportunity to make your mark on the great city of Austin,
              Texas. While the president has many jobs, the biggest and most
              important one is being able to take a vision and put it into practice.
            </div>
            <div className="committee-card-looking">
              Looking for someone who is
            </div>
            <div className="committee-card-list">
              <ul>
                <li> Driven </li>
                <li> Confident </li>
                <li> A leader  </li>
                <li> Passionate </li>
              </ul>
            </div>
            <div className="apply-button">
              <button
                className="my-button-sm my-button-animation"
                onClick={()=>{window.open('https://docs.google.com/forms/d/e/1FAIpQLSfHRYC7KZO8bUpifuhGHttLF9bnx3lk09VvwkZVhUm-QWMYPg/viewform')}}>
                Apply!
              </button>
            </div>
          </div>

          <div className="committee-card">
            <div className="committee-card-title">
              Creative
            </div>
            <div className="committee-card-body">
              The creative team is the biggest committee here in ACP.
              A lot of what we do involves media and using our platform
              to advocate for Austin businesses, local environmental
              beautification projects and overall good causes.
              Want to help us create content to spread the word?
              Join our team!
            </div>
            <div className="committee-card-looking">
              Looking for someone who is
            </div>
            <div className="committee-card-list">
              <ul>
                <li> CREATIVE, excited, passionate </li>
                <li> Actively wanting to collaborate to create content </li>
                <li> Skilled at graphic design, video production, design, photography  </li>
                <li> Familiar with social media (Instagram, LinkedIn, Facebook) </li>
              </ul>
            </div>
            <div className="apply-button">
              <button
                className="my-button-sm my-button-animation"
                onClick={()=>{window.open('https://docs.google.com/forms/d/1uZZyqZkESYOiq-52PGs9ygBETTds23AnvX4Wmjd8cZM/edit')}}>
                Apply!
              </button>
            </div>
          </div>

          <div className="committee-card">
            <div className="committee-card-title">
              Communications
            </div>
            <div className="committee-card-body">
              The communications committee is the glue that holds the org
              together. Responsible for attendance, keeping a calendar,
              maintaining the hornslink page, posting announcements and ACP
              member relations. There is tons of mobility with this committee
              in terms of creating your own projects.
            </div>
            <div className="committee-card-looking">
              Looking for someone who is
            </div>
            <div className="committee-card-list">
              <ul>
                <li> Organized </li>
                <li> Proficient in excel, google forms and docs </li>
                <li> Willing to communicate with anybody </li>
              </ul>
            </div>
            <div className="apply-button">
              <button
                className="my-button-sm my-button-animation"
                onClick={()=>{window.open('https://docs.google.com/forms/d/e/1FAIpQLScjv-Q-t_evjJeUdiCNi5VnvU976LsvEpR-gn6kDpurifxnpQ/viewform')}}>
                Apply!
              </button>
            </div>
          </div>

          <div className="committee-card">
            <div className="committee-card-title">
              Philanthropy
            </div>
            <div className="committee-card-body">
              In the philanthropy committee
              you will be creating, planning and executing service projects all
              around Austin. This committee has the potential to do so much good
              in our community here at UT and in ATX.
            </div>
            <div className="committee-card-looking">
              Looking for someone who is
            </div>
            <div className="committee-card-list">
              <ul>
                <li> Passionate </li>
                <li> Kind </li>
                <li> Willing to put in time to go out of their way to help the
                community (someone who will go the extra mile) </li>
                <li> Organized/ a good planner </li>
              </ul>
            </div>
            <div className="apply-button">
              <button
                className="my-button-sm my-button-animation"
                onClick={()=>{window.open('https://docs.google.com/forms/d/e/1FAIpQLSdDW2CBNcPQ-NbZ5y-VnoRFzBb8xoGLXX8ObUBgPn35BGzuGA/viewform')}}>
                Apply!
              </button>
            </div>
          </div>

          <div className="committee-card">
            <div className="committee-card-title">
              Merch
            </div>
            <div className="committee-card-body">
              Similar to Creative. Designs and is in charge of our merchandise
              sales every semester. This goes past just designing and being in
              contact with the company we use to sell our merch. On the merch
              committee the team works together to accomplish effective
              advertising and PR on social media to actually sell the merch
              they create.
            </div>
            <div className="committee-card-looking">
              Looking for someone who is
            </div>
            <div className="committee-card-list">
              <ul>
                <li> Creative </li>
                <li> Design oriented  </li>
                <li> Skilled with Social Media </li>
                <li> High confidence with communication skills </li>
              </ul>
            </div>
            <div className="apply-button">
              <button
                className="my-button-sm my-button-animation"
                onClick={()=>{window.open('https://docs.google.com/forms/d/e/1FAIpQLSdrMr_UEO4XhCbGbMwuRI4Y50eVhd8R5knYaWHDOQXXf52fmQ/viewform?vc=0&c=0&w=1&flr=0&usp=mail_form_link')}}>
                Apply!
              </button>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default ApplyComponent;
