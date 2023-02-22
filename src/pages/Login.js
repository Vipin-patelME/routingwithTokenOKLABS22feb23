import { useState } from 'react';
//import Button from 'react-bootstrap/Button';
//import Form from 'react-bootstrap/Form';

const Login = ()=>{
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const submit = (e)=>{
        e.preventDefault()
        const url = "http://65.109.113.62:3000/api/auth/login"
        const data = {
                        email,
                        password
                     }
        const options = {
                            method:"POST",
                            headers: {
                                        'Content-Type': 'application/json'
                                    },
                            body: JSON.stringify(data)  
                        }
        fetch(url, options)
        .then((res)=>{
            console.log(res)
            if (res.status !== 200){
                alert("Invalid Credintials")
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data)
            
            
            try{
                localStorage.setItem("role", JSON.stringify(data.data.role))
                localStorage.setItem("token", JSON.stringify(data.data.token))

                if (data.data.role === "admin"){
                    window.location.href = "/admin"
                }
                if (data.data.role === "reseller"){
                    window.location.href = '/reseller'
                }
                if (data.data.role === "acount_manager"){
                    window.location.href = '/accountmanager'
                }
                if (data.data.role === "enduser"){
                    window.location.href = '/enduser'
                }
                else{
                    alert("Invalid credentials")
                }
            }
            catch(error){
                alert("Invalid credentials")
            }
        
    })
        .catch((err)=>{
            alert(err)
        })
    }

        return(
            <main className="">
                <form className="col-6 offset-3 mt-5">
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input autoFocus type="email" name="email" value={email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" name="password" value={password} className="form-control" id="exampleInputPassword1" onChange={e => setPassword(e.target.value)} />
                    </div>
                    <button type="button" onClick={submit} className="btn btn-primary">Submit</button>
                </form>
            </main>
        )
}

export default Login;