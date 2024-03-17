import {useState} from 'react'

export default function Login(){
    const [userName,setUserName] = useState("");
    const [password,setPassword] = useState("");

    const isSubmitDisabled  = !userName || !password

    return(
        <div>
            <form onSubmit={ (e) => e.preventDefault() } >
                <label>
                    <input  type="text" onChange={(e)=>setUserName(e.target.value)} value={userName} placeholder="username"/>
                </label>
                <label>
                    <input  type="password" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="password" />
                </label>
                <button 
                    type='submit'
                    disabled={isSubmitDisabled}
                >
                    Submit
                </button>
            </form>
        </div>
    )
}