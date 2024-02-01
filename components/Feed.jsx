"use client"

import {useState, useEffect} from 'react'
import PromptCard from './PromptCard'

const PromptCardList =({data, handleTagClick}) => {
  
       return (
        <div className='mt-16 prompt_layout'>
           {data[0].map((p) => (
           
            <PromptCard 
             key={p._id}
             post={p}
             handleTagClick={handleTagClick}
            />
           ))}
        </div>
       )
}

const Feed = () => {
  const [searchText, setSearchText] = useState('')
  const [posts,setPosts] = useState([]);
  const handleSearchChange =(e) => {
         
  }

  useEffect(()=> {
      const fetchPosts = async () => {
        const response = await fetch('api/prompt');
        const data = await response.json();
        
        setPosts(data);
      }
      fetchPosts();
  },[]);


  return (
    <section className='feed'>
    <PromptCardList
      data={[posts]}
      handleTagClick={()=> {}}
    
    />
    </section>
  )
}

export default Feed
