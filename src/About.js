import React, {Component} from 'react';
import './Login.css';

export default class Applicant extends Component {
  render() {
    return (
      <>
        <div className="about-us">
          <img src="/about.png" alt="" />
          <div>
            Eko was founded by Zyan Brothers and Tergel with a vision of providing
            life-transforming learning experiences to anyone, anywhere. It is
            now a leading online learning platform for higher education, where
            more than 5 million learners from around the world come to learn
            skills of the future. More than 20 of the world’s top universities
            partner with Eko to offer courses, Specializations, certificates,
            and degree programs. 500 companies trust the company’s enterprise
            platform Eko for Business to transform their talent. Eko for
            Government equips government employees and citizens with in-demand
            skills to build a competitive workforce.
          </div>
        </div>
        <div className="stats">
          <div>
            <p>5 MILLION</p>
            <p className="label">Learners</p>
          </div>
          <div>
            <p>60+</p>
            <p className="label">Projects</p>
          </div>
          <div>
            <p>70+</p>
            <p className="label">Courses</p>
          </div>
          <div>
            <p>40+</p>
            <p className="label">Specializations</p>
          </div>
          <div>
            <p>30+</p>
            <p className="label">Certificates</p>
          </div>
          <div>
            <p>10</p>
            <p className="label">Degrees</p>
          </div>
        </div>
      </>
    );
  }
}
