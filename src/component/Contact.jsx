import React, { useState } from 'react';

const Contact = () => {
    const [data ,setData] = useState({
        fullname:"",
        phone:"",
        email:"",
        message:""
    });

    const InputEvent = (event)=>{
        const {name, value} = event.target;
        setData((preVal)=>{
            return{
                ...preVal,
                [name]:value
            }
        });
    }

    const formSubmit =(e)=>{
        e.preventDefault();
        const message = `My name is "${data.fullname}". My number is "${data.phone}" and my eamil is "${data.email}", Here is what I want to say "${data.message}"`;
        alert(message);
    }

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
            <div className="col-md-6 col-10 mx-auto ">
                <form onSubmit={formSubmit}>
                    <div class="mb-3">
                        <label  class="form-label">FullName</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            id="exampleFormControlInput1" 
                            name = "fullname"
                            value={data.fullname}
                            onChange={InputEvent}
                            placeholder="Enter you name" 
                            required/>
                    </div>
                    <div class="mb-3">
                        <label  class="form-label">Phone</label>
                        <input 
                            type="number" 
                            class="form-control" 
                            id="exampleFormControlInput1" 
                            name = "phone"
                            value={data.phone}
                            onChange={InputEvent}
                            placeholder="mobile number" 
                            required/>
                    </div>
                    <div class="mb-3">
                        <label  class="form-label">Email address</label>
                        <input 
                            type="email" 
                            class="form-control" 
                            id="exampleFormControlInput1" 
                            name = "email"
                            value={data.email}
                            onChange={InputEvent}
                            placeholder="name@example.com" 
                            required/>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Message</label>
                        <textarea 
                            class="form-control" 
                            id="exampleFormControlTextarea1" 
                            name = "message"
                            value={data.message}
                            onChange={InputEvent}
                            rows="3">
                        </textarea>
                    </div>
                    <div class="col-12">
                        <button class="btn btn-outline-primary" type="submit">Submit</button>
                    </div>
                </form>
                
            </div>
        </div>
      </div>
    </>
  )
}

export default Contact;

