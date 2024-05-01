"use client";

import { useState , FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function Home() {

  const [inputVal,setInputVal] = useState("");
  const router = useRouter();

  const handleSubmit=(event :FormEvent )=>{
    event.preventDefault();
    router.push(`/prediction/${inputVal}`);
  }

  return (
    
    <div>
      <div>
        <h1>Enter your Name : </h1>
      </div>  
      <form onSubmit ={handleSubmit} className="text-black" >
        <input type="text" placeholder="Type Your Name ......." value={inputVal} 
        onChange={(e)=>setInputVal(e.target.value)}/>
        <button type="submit">Predict Data  className="bg-white"</button>
      </form>
    </div>

  );
}
