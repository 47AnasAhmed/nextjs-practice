'use client'
import { useEffect, useState } from "react";

export default function Page() {
  const [comment, setComment] = useState('')
  function handleChange(e){
    setComment(e.target.value)
  }

    return (
      <div>
        <p>Hello, Alishba </p>
        <form>
          <label>Enter Comment:</label><br />
          <input value ={comment} onChange={handleChange} />
          <h1>{comment}</h1>
        </form>
      </div>
    
    );
  }