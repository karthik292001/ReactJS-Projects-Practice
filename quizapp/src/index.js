import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Header/>
      <Content/>
      <Footer/>
  </React.StrictMode>
);





let marks=0;


function Header(){
  return(
    <div className='header'>
        
            <header className='heading'>
                <h1>Java Quiz App</h1>
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
  

  function result(event){

    let ans1=event.target.q1.value;
    let ans2=event.target.q2.value;
    let ans3=event.target.q3.value;
    let ans4=event.target.q4.value; 
    let ans5=event.target.q5.value;
    let ans6=event.target.q6.value;
    let ans7=event.target.q7.value;
    let ans8=event.target.q8.value;
    let ans9=event.target.q9.value;
    let ans10=event.target.q10.value;

    

    if(ans1=="At run time"){
      marks++;
    }
    if(ans2=="Objects"){
      marks++;
    }
    if(ans3=="8"){
      marks++;
    }
    if(ans4=="James Gosling"){
      marks++;
    }
    if(ans5=="Java is a platform-independent programming language"){
      marks++;
    }
    if(ans6=="JDK"){
      marks++;
    }
    if(ans7=="Use of pointers"){
      marks++;
    }
    if(ans8==".java"){
      marks++;
    }
    if(ans9=='JAVA_HOME'){
      marks++;
    }
    if(ans10=="Compilation"){
      marks++;
    }


    {resultpage()}
    

  }
 

  return(

    <div className='content'>

      <form onSubmit={result}>

        <h2>Questions</h2>

        <h3>Question 1</h3>
        <Question
        ques="Q. When is the object created wiht new keyword"
        op1="At run time"
        op2="At compile time"
        op3="Depends on the code"
        name="q1"
        />

        <h3>Question 2</h3>
        <Question
        ques="Q. Arrays in java are-"
        op1="Object references"
        op2="Objects"
        op3="Primitive data types"
        name="q2"
        />

        <h3>Question 3</h3>
        <Question
        ques="Q. Number of primitive data types in Java are?"
        op1="6"
        op2="8"
        op3="7"
        name="q3"
        />
        <h3>Question 4</h3>
        <Question
        ques="Q. Who invented Java Programming?"
        op1="Guido van Rossum"
        op2="James Gosling"
        op3="Dennis Ritchie"
        name="q4"
        />

        <h3>Question 5</h3>
        <Question
        ques="Q. Which statement is true about Java?"
        op1="Java is a sequence-dependent programming language"
        op2="Java is a platform-dependent programming language"
        op3="Java is a platform-independent programming language"
        name="q5"
        />

        <h3>Question 6</h3>
        <Question
        ques="Q. Which component is used to compile, debug and execute the java programs?"
        op1="JRE"
        op2="JDK"
        op3="JVM"
        name="q6"
        />

        <h3>Question 7</h3>
        <Question
        ques="Q. Which one of the following is not a Java feature?"
        op1="Use of pointers"
        op2="Portable"
        op3="Dynamic and Extensible"
        name="q7"
        />

        <h3>Question 8</h3>
        <Question
        ques="Q. What is the extension of java code files?"
        op1=".js"
        op2=".class"
        op3=".java"
        name="q8"
        />

        <h3>Question 9</h3>
        <Question
        ques="Q. Which environment variable is used to set the java path?"
        op1="JavaPATH"
        op2="JAVA_HOME"
        op3="MAVEN_Path"
        name="q9"
        />

        <h3>Question 10</h3>
        <Question
        ques="Q. Which of the following is not an OOPS concept in Java?"
        op1="Polymorphism"
        op2="Compilation"
        op3="Encapsulation"
        name="q10"
        />
        <input type="submit" className='submit'/>

      </form>

    </div>
    
  );
}




function Question(props){
 
  return(
    <div>

        <section>
          
          <p>{props.ques}</p> 
          <input type="radio" name={props.name} value={props.op1} required/>  <label>{props.op1}</label>
          <br></br>
          <input type="radio" name={props.name} value={props.op2} required/>  <label>{props.op2}</label> 
          <br></br> 
          <input type="radio" name={props.name} value={props.op3} required/>  <label>{props.op3}</label>  

        </section>

    </div>
    
  );
}




function Footer(){
  return(
    <footer>
      <div className='footer'>
        <h2 style={{color:"rgb(85, 167, 3)"}}>Contact Us</h2>
        <p>Company Technologies pvt ltd.</p>
        <p>Email: Company@quizapp.com</p>
        <p>Phone: (123) 456-7890</p>
      </div>
      <div className='rights'>
          <p>&copy; 2024 QuizApp. All rights reserved.</p>
      </div>
   </footer>

  );
}




function DisplayResult(){
    return(
      <div className='result'>
        <h1>Thank you for attending Quiz</h1>
        <p>Total marks: {marks}</p>
      </div>
  );
}
function resultpage() {
  root.render(
    <React.StrictMode>
      <DisplayResult/>
    </React.StrictMode>
  );
}