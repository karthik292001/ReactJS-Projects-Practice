import React from 'react';
import { useState } from 'react';
import './index.css'


export default function App() {

  const subject =new Array();
  subject[0]=<JavaContent/>;
  subject[1]=<PythonContent/>;
  subject[2]=<MysqlContent/>;

  const [value, setValue] = useState(0);

  const handleClick = (index) => {
    setValue(index);
  };

  return (
    <div className="App">
       <h1>Welcome to quiz App</h1>
      <button onClick={() => handleClick(0)}>Java</button>
      <button onClick={() => handleClick(1)}>Python</button>
      <button onClick={() => handleClick(2)}>SQL</button>
      <div>
          {subject[value]}
      </div>
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



let marks=0;

function JavaContent(){

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
      alert("Total score: "+marks)
    }
  
    return(
  
      <div className='content'>
  
        <form onSubmit={result}>
  
          <h2>Java Questions</h2>
  
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



function PythonContent(){

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
  
      
  
      if(ans1=="Guido van Rossum"){
        marks++;
      }
      if(ans2=="all of the mentioned"){
        marks++;
      }
      if(ans3=="Yes"){
        marks++;
      }
      if(ans4==".py"){
        marks++;
      }
      if(ans5=="Python code is both compiled and interpreted"){
        marks++;
      }
      if(ans6=="None of the mentioned"){
        marks++;
      }
      if(ans7=="Indentation"){
        marks++;
      }
      if(ans8=="def"){
        marks++;
      }
      if(ans9=='#'){
        marks++;
      }
      if(ans10=="sys.version"){
        marks++;
      }
      alert("Total score: "+marks);
    }
   
  
    return(
  
      <div className='content'>
  
        <form onSubmit={result}>
  
          <h2>Python Questions</h2>
  
          <h3>Question 1</h3>
          <Question
          ques="Q. Who developed Python Programming Language?"
          op1="Wick van Rossum"
          op2="Rasmus Lerdorf"
          op3="Guido van Rossum"
          name="q1"
          />
  
          <h3>Question 2</h3>
          <Question
          ques="Q. Which type of Programming does Python support?"
          op1="object-oriented programming"
          op2="structured programming"
          op3="all of the mentioned"
          name="q2"
          />
  
          <h3>Question 3</h3>
          <Question
          ques="Q. Is Python case sensitive when dealing with identifiers?"
          op1="No"
          op2="Yes"
          op3="machine dependent"
          name="q3"
          />
          <h3>Question 4</h3>
          <Question
          ques="Q. Which of the following is the correct extension of the Python file?"
          op1=".python"
          op2=".py"
          op3=".p"
          name="q4"
          />
  
          <h3>Question 5</h3>
          <Question
          ques="Q. Is Python code compiled or interpreted?"
          op1="Python code is both compiled and interpreted"
          op2="Python code is neither compiled nor interpreted"
          op3="Python code is only compiled"
          name="q5"
          />
  
          <h3>Question 6</h3>
          <Question
          ques="Q. All keywords in Python are in _________"
          op1="Capitalized"
          op2="lower case"
          op3="None of the mentioned"
          name="q6"
          />
  
          <h3>Question 7</h3>
          <Question
          ques="Q. Which of the following is used to define a block of code in Python language?"
          op1="Indentation"
          op2="Key"
          op3="Brackets"
          name="q7"
          />
  
          <h3>Question 8</h3>
          <Question
          ques="Q. Which keyword is used for function in Python language?"
          op1="Function"
          op2="def"
          op3="Fun"
          name="q8"
          />
  
          <h3>Question 9</h3>
          <Question
          ques="Q. Which of the following character is used to give single-line comments in Python?"
          op1="//"
          op2="#"
          op3="/*"
          name="q9"
          />
  
          <h3>Question 10</h3>
          <Question
          ques="Q. Which of the following functions can help us to find the version of python that we are currently working on?"
          op1="sys.version(0)"
          op2="sys.version"
          op3="sys.version()"
          name="q10"
          />
          <input type="submit" className='submit'/>
  
        </form>
  
      </div>
      
    );
  }



  function MysqlContent(){
  
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
  
      
  
      if(ans1=="Relational"){
        marks++;
      }
      if(ans2=="Tables"){
        marks++;
      }
      if(ans3=="Column"){
        marks++;
      }
      if(ans4=="Row"){
        marks++;
      }
      if(ans5=="SQL"){
        marks++;
      }
      if(ans6=="MySQL server"){
        marks++;
      }
      if(ans7=="mysqld"){
        marks++;
      }
      if(ans8=="Schema"){
        marks++;
      }
      if(ans9=='LIKE'){
        marks++;
      }
      if(ans10=="information_schema"){
        marks++;
      }
      alert("Total score: "+marks);
    }
   
  
    return(
  
      <div className='content'>
  
        <form onSubmit={result}>
  
          <h2>Mysql Questions</h2>
  
          <h3>Question 1</h3>
          <Question
          ques="Q. Which type of database management system is MySQL?"
          op1="Object-oriented"
          op2="Relational"
          op3="Hierarchical"
          name="q1"
          />
  
          <h3>Question 2</h3>
          <Question
          ques="Q. What is data in a MySQL database organized into?"
          op1="Objects"
          op2="Tables"
          op3="Networks"
          name="q2"
          />
  
          <h3>Question 3</h3>
          <Question
          ques="Q. What represents an attribute in a relational database?"
          op1="Table"
          op2="Row"
          op3="Column"
          name="q3"
          />
          <h3>Question 4</h3>
          <Question
          ques="Q. What represents a tuple in a relational database?"
          op1="Row"
          op2="Column"
          op3="Object"
          name="q4"
          />
  
          <h3>Question 5</h3>
          <Question
          ques="Q. How is communication established with MySQL?"
          op1="SQL"
          op2="A programming language like C++"
          op3="APIs"
          name="q5"
          />
  
          <h3>Question 6</h3>
          <Question
          ques="Q. Which is the MySQL instance responsible for data processing?"
          op1="MySQL server"
          op2="SQL"
          op3="MySQL client"
          name="q6"
          />
  
          <h3>Question 7</h3>
          <Question
          ques="Q. The MySQL server used in its client/server architecture is _______________"
          op1="mysqlb"
          op2="mysqla"
          op3="mysqld"
          name="q7"
          />
  
          <h3>Question 8</h3>
          <Question
          ques="Q. In MySQL databases, the structure representing the organizational views of the entire databases is ____________"
          op1="Table"
          op2="View"
          op3="Schema"
          name="q8"
          />
  
          <h3>Question 9</h3>
          <Question
          ques="Q. Which of the following clauses is used to display information that match a given pattern?"
          op1="LIKE"
          op2="SAME"
          op3="WHERE"
          name="q9"
          />
  
          <h3>Question 10</h3>
          <Question
          ques="Q. The special database that always exists after setting up MySQL in a computer is __________"
          op1="sampdb"
          op2="mysql"
          op3="information_schema"
          name="q10"
          />
          <input type="submit" className='submit'/>
  
        </form>
  
      </div>
      
    );
  }

