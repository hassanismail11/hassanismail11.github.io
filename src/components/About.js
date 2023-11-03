const About = () => {
  var birthDay = 11;
  var birthMonth = 11;
  var birthYear = 1996;

  var date = new Date();
  var todayDay = date.getDate();
  var todayMonth = 1 + date.getMonth();
  var todayYear = date.getFullYear();
  var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (birthDay > todayDay) {
    todayDay = todayDay + month[todayMonth - 1];
    todayMonth = todayMonth - 1;
  }
  if (birthMonth > todayMonth) {
    todayMonth = todayMonth + 12;
    todayYear = todayYear - 1;
  }

  var ageDays = todayDay - birthDay;
  var ageMonths = todayMonth - birthMonth;
  var ageYears = todayYear - birthYear;

  return (
    <div id="about" className="section dark2">
      <div className="container">
        <div className="section-title">
          <h1>
            About <span className="color-primary">Me</span>
          </h1>
        </div>
        <div className="section-flex">
          <div className="section-left">
            <section>
              <h2 className="weight-light">
                Personal <span className="color-primary">Info</span>
              </h2>
              <div>
                <p>
                  <strong>Age:</strong> {ageYears} Years, {ageMonths} Months,{" "}
                  {ageDays} Days
                </p>
                <p>
                  <strong>Language:</strong> Arabic, English
                </p>
                <p>
                  <strong>Address:</strong> New Cairo, Egypt
                </p>
                <p>
                  <strong>Freelance:</strong> Available
                </p>
              </div>
            </section>
          </div>
          <vl />
          <div className="section-right">
            <section>
              <h2 className="weight-light">Hi, I'm Hassan Ismail</h2>
              <h2 className="weight-light">
                But you can call me <span className="color-primary">Flik</span>
              </h2>
              <p>
                A Mechatronics Engineer specialized in Electronics and
                Programming. Experienced with all stages of robots and
                automation tasks, good knowledge with IT, interested in
                designing and developing robotics (e.g., Pro-duction Lines,
                ROVs, CNCs, GP Robotics), Strong background in project
                management. And taking Graphic Design as a hobby.
              </p>
            </section>
          </div>
        </div>

        <div className="cv-downloader">
          <a href="./public/documents/Hassan-Ismail.pdf" download>
            <div className="column contact-box service section-title">
              <div className="service-content">
                <h3>Donwload Full CV</h3>
                <i className="bi bi-download icon service-icon"></i>
              </div>
            </div>
            <br />
          </a>
        </div>

        <div className="columns">
          <div className="column">
            <h2 className="weight-light">
              My <span className="color-primary">Skills</span>
            </h2>
            <section>
              JavaScript (ES6), C/C++, Java, Typescript, Embedded C, Python,
              LabVIEW.
            </section>
            <hr />
            <section>
              Algorithm, Data-Structures, OOP, Design Patterns, Version Control.
            </section>
            <hr />
            <section>
              NodeJS, ExpressJs, HTML5, CSS3, Bootstrap, EJS, ReactJS, Mongoose,
              Postman, NPM.
            </section>
            <hr />
            <section>
              VS Code, GIT, Hyper, Solidworks, Android Studio, Proteus PCB,
              LabVIEW, Auto CAD, Adobe Photoshop, Adobe Illustrator, Adobe After
              Effects.
            </section>
            <hr />
            <section>MongoDB, Firebase.</section>
          </div>
          <div className="column">
            <h2 className="weight-light">
              My <span className="color-primary">Experience</span>
            </h2>

            <section>
              <p>
                Full Stack Developer
                <br />
                Freelance, 2023
              </p>
            </section>
            <hr />
            <section>
              <p>
                First Lieutenant Officer
                <br />
                Egyptian Air Force, 2020 - 2023
              </p>
            </section>
            <hr />
            <section>
              <p>
                Robotics Instructor
                <br />
                IVY School, 2022
              </p>
            </section>
            <hr />
            <section>
              <p>
                Electrical Team Manager
                <br />
                Sailfish ROV, 2018-2021
              </p>
            </section>
            <hr />
            <section>
              <p>
                CNC & 3d Printers production
                <br />
                Freelance, 2017-2019
              </p>
            </section>
          </div>
          <div className="column">
            <h2 className="weight-light">
              My <span className="color-primary">Education</span>
            </h2>
            <section>
              <p>
                B.E. in Mechatronics Engineering
                <br />
                Higher Technological Institute (2015 - 2020)
              </p>
            </section>
            <hr />
            <section>
              <p>
                Courses:
                <br />
                Embedded Systems at IMT (Dec. 2020)
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
