import React from 'react'
import PromptCard from './PromptCard'

const Profile = ({name,desc, data, handleEdit, handleDelete}) => {
  console.log(data)
  return (
    <section className='w-full'>
    <h1 className='head_text text-left'>
    <span className='blue_gradient'>{name} Profile </span></h1>
    <p className='desc text-left'>{desc}</p>
    <div className='mt-16 prompt_layout'>
    {data[0].map((p) => (
    
     <PromptCard 
      key={p._id}
      post={p}
      handleEdit={()=> handleEdit && handleEdit(p)}
      handleDelete={()=> handleDelete && handleDelete(p)}
     />
    ))}
 </div>
    </section>
  )
}

export default Profile
