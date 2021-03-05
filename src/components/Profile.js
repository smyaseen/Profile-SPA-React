import React from "react";
import '../styles/profile.css'
import Intro from './Introduction.js'
import Education from './Education.js'
import ProExp from './ProfessionalExperience.js'
import Contact from './Contact.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
    <div id="container">
        
                <header>
                    <div className="quoteoftheday">Profile</div>
                    <div className="name">SMY.</div>
                </header>

                <article>

                    <div className="quote">
                        <h1>It’s not a bug – it’s an undocumented feature.</h1>
                    </div>

                    <div className="quoteby">
                        <h4>Syed Muhammad Yaseen</h4>
                    </div>

                </article>

                <footer>
                <div className="skills">
                        <h6>Menu</h6>
                        <ul>
                            <li><Link to="/">Introduction</Link></li>
                            <li><Link to="/professional-experience">Professional Experience</Link></li>
                            <li><Link to="/education">Education</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    
                    <Switch>
                        <Route exact path="/">
                            <div className="content">
                                <Intro />
                            </div>
                        </Route>
                        <Route exact path="/contact">
                            <div className="content">
                                <Contact />
                            </div>
                        </Route>
                        <Route exact path="/Education">
                            <div className="content">
                                <Education />
                            </div>
                        </Route>
                        <Route exact path="/professional-experience">
                            <div className="content">
                                <ProExp />
                            </div>
                        </Route>
                    </Switch>

                </footer>
            </div>
            </Router>
  );
}
