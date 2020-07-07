import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
import Testimonial from "./Testimonial";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="IMG-20200629-WA0020.jpg"
                alt="avatar"
                style={{ height: "200px" }}
              />
            </div>

            <h2 style={{ paddingTop: "2em" }}>Imtiyaaz Temoore</h2>
            <h4 style={{ color: "grey" }}>Programmer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              I started buliding a passion for programming at high school where
              i was introduced to HTML/CSS, which was lot fun to learn and to
              get that little experices was alot for me as i wanted to learn
              more about programming
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>45 Hughes Street Belhar </p>
            <h5>Phone</h5>
            <p>(067) 889-3463</p>
            <h5>Email</h5>
            <p>imtiyaaztemoore@gmail.com</p>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
              startYear={2005}
              endYear={2014}
              schoolName="Erica Primary School"
              schoolDescription="I started Eric primary school 2005 till 2014, were I enjoyed primary school had lots of fun,"
            />

            <Education
              startYear={2015}
              endYear={2019}
              schoolName="Belhar High School"
              schoolDescription="I started Belhar high school 2015 till 2019, were i enjoyed and had lots of fun, I matricuallted in 2019 (last year)"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Experience</h2>

            <Experience
              startYear={2015}
              endYear={"currently"}
              jobName="S & Z Auto's"
              jobDescription="I Started working at S & Z Auto's in to 2015, which a friend of mine father employeed me to work as a spare mechanic, were i would only work weekend and maybe if there is a big jobS"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Testimonial</h2>

            <Testimonial
              from="Thapelo"
              description="Imtiyaaz Temoore is a Life Choices Academy students for 2020. One thing you should know
                           about Imtiyaaz is that he has an always-learning mindset. He always try new things by
                           himself before seeking help from others. He has greate communication skills and always seeks
                           to do the best."
            />

            <Testimonial
              from="Aden"
              description="I consider Imtiyaaz to be an exceptional peer, he's always looking for ways to help people out, he's a great team player and works as well in a group as he does individually. He shows great leadership skills and is able to make unbiased decisions that work well for everybody in the end. He's got a good head on his shoulders and it shows by the way he does things, he is someone that always sees the positive side of every situation and his positivity is radiant.
              He is a punctual person that has a great sense of humor and is hardworking. His passion and effort shows in the the work he delivers and he has a remarkable work ethic.
              Any company or person that has the chance to work with him would truly be privileged.."
            />

            <Testimonial
              from="Zubair"
              description="If you're looking for a hardworking and helpful employee Imtiyaaz Temoore is your man.  He is always willing to help you when required, he is very talented when it comes to his work, he always puts in 100% effort."
            />

            <Testimonial
              from="Usama"
              description="I have never seen anyone more hardworking than Imtyaaz. I have witnessed with my own eyes how he turned the midnight oil to complete his tasks. His someone who doesn't give up and gives it his all"
            />

            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skills skill="javascript" progress={75} />
            <Skills skill="HTML/CSS" progress={80} />
            <Skills skill="NodeJS" progress={50} />
            <Skills skill="React" progress={40} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
