"use client"

import {useEffect, useState} from "react";
import {useRouter,useSearchParams} from "next/navigation";
import { Suspense } from 'react'
import Form from "@components/Form";

const EditPrompt = () => {
    const searchParams = useSearchParams()
    const promptId = searchParams.get('id')

    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true); // Add loading state
    const [submitting,setSubmitting] = useState(false);
    const [post,setPost] = useState({
        prompt : '',
        tag: '',
    })

 useEffect(()=> {
    const getPromptDetails = async ()=> {
        const response = await fetch(`api/prompt/${promptId}`)
        const data = await response.json();
        console.log(data)

        setPost({
            prompt:data.prompt,
            tag:data.tag
        })
    }
    setIsLoading(false)
    if(promptId) getPromptDetails()


 },[promptId])   

 const updatePrompt = async (e)=> {
    e.preventDefault();

    setSubmitting(true);
    if(!promptId) return alert("Prompt ID not found")

    try{
         const response = await fetch(`/api/prompt/${promptId}`,{
             method:"PATCH",
             body : JSON.stringify({
                 
                 prompt: post.prompt,
                 tag: post.tag
             })
         })
         if(response.ok){
             router.push('/')
         }

    }
    catch (error){
     console.log(error)

    } finally{
     setSubmitting(false);
    }
}  
function SearchBarFallback() {
    return "Loading Initial Data"
  }
  
  return (
    <div>
      {isLoading ? (
        "Loading Initial Data..."
      ) : (
        <Form
          type="Edit"
          post={post}
          setPost={setPost}
          submitting={submitting}
          handleSubmit={updatePrompt}
        />
      )}
    </div>
  )
}

export default EditPrompt
