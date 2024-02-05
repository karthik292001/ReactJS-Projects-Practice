import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    {/* <App/> */}
    <Header/>
    <Content/>
    <Footer/>

  </React.StrictMode>
);

function Header(){
  return(
    <div className='header'>
        
            <header className='heading'>
                <h1>Java Quiz Links</h1>
            </header>
            <nav>
                <ul>
                    <li><a href="#question1">Core Java</a></li>
                    <li><a href="#question2">Advaced Java</a></li>
                </ul>
            </nav>

    </div>
  );
}

function Content(){
  return(

    <div className='content'>
      <h1>Questions</h1>
      <Question/>
    </div>
    
  )
}

function Question(){
  return(
    <div>
      
        <section>
          <h2>Question 1</h2>
          <p>Why is Java a platform independent language?</p>   
          <textarea style={{background:"grey",width:"80%",height:"90px"}}></textarea>    
        </section>
          
        <section>
          <h2>Question 2</h2>
          <p>Java is a objected oriented programming.</p> 
          <input type="radio" name="answer"/>Yes
          <br></br>
          <input type="radio" name="answer"/>No       
        </section>

        <section>
          <h2>Question 3</h2>
          <p>Choose Java features</p>
          <input type="checkbox"/>Multithreaded
          <br></br>
          <input type="checkbox"/>Procedural oriented
          <br></br>
          <input type="checkbox"/>Portable
          <br></br>
          <input type="checkbox"/>Secure
        </section>

    </div>
    
  );
}

function Footer(){
  return(
    <footer>
      <div className='footer'>
        <h2 style={{color:"rgb(140, 255, 0)"}}>Contact Us</h2>
        <p>Kodnest Technologies pvt ltd.</p>
        <p>Email: kodnest@quizapp.com</p>
        <p>Phone: (123) 456-7890</p>
      </div>
      <div className='rights'>
          <p>&copy; 2024 QuizApp. All rights reserved.</p>
      </div>
   </footer>

  );
}