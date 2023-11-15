'use client'
import REact, { useEffect, useState } from "react";

export default function Page() {
  const [comment, setComment] = useState('');
  function handleChange(e: { target: { value: any; }; }){
    const updatedcomment = e.target.value
    setComment(updatedcomment)
  }

    return (
      <div>
        <p>Hello, Alishba </p>
        <form>
          <label>Enter Comment:</label><br />
          <input value={comment} onChange={handleChange} />
          <h1>{comment}</h1>
        </form>
      </div>
    
    );
  }