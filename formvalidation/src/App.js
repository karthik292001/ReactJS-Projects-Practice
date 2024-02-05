import {useFormik} from 'formik';
import * as Yup from 'yup';

function App() {


  const formik = useFormik({

      initialValues:{
        username:"",
        email:"",
        password:""
      },

      validationSchema:Yup.object({

        username:Yup.string()
                    .max(10,"Cannot exceed 10 characters")
                    .required("This field is mandatory")
        ,

        email:Yup.string()
                 .required("This field is mandatory")
        ,

        password:Yup.string()
                    .min(6,"password should have minimum 6 characters")
                    .max(12,"password should have maximum 12 characters")
                    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()?])/,"Password should contain 1 lowercase, 1 uppercase, 1 number, 1 special character")
                    .required("This field is mandatory")

      }),

      onSubmit:(values)=>{
        alert(JSON.stringify(values));
      }

    })

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label>Username :</label> <input type="text" name="username" placeholder="Enter name" onChange={formik.handleChange} value={formik.values.username} />
        <br/><br/>
        {formik.errors.username && <p style={{color:"red"}}>{formik.errors.username}</p>}

        <label>E-mail ID :</label> <input type="text" name="email" placeholder="Enter email" onChange={formik.handleChange} value={formik.values.email} />
        <br/><br/>
        {formik.errors.email && <p style={{color:"red"}}>{formik.errors.email}</p>}


        <label>Password :</label> <input type="password" name="password" placeholder="Enter password" onChange={formik.handleChange} value={formik.values.password} />
        <br/><br/>
        {formik.errors.password && <p style={{color:"red"}}>{formik.errors.password}</p>}

        <input type="submit" value="Submit"/>

      </form>
    </div>
  );
}

export default App;
