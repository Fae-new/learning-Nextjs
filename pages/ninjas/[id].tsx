import React from 'react'


export const getStaticPaths= async()=>{
    const res= await fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())

    const paths=res.map((ninja:any)=>{
return {params:{id: ''+ninja.id}}

    })

return{
paths,
fallback:false

}

}


export const getStaticProps = async(context:any)=>{
const id =context.params.id;

    const res= await fetch('https://jsonplaceholder.typicode.com/users/'+id)
      .then(response => response.json())
      return{
    props:{ninja:res}
    
      }
    
    } 


const Details = ({ninja}:{ninja:any}) => {
  return (
    <div>
<h1>{ninja.name}</h1>
<p>{ninja.email}</p>
<p>{ninja.website}</p>
<p>{ninja.address.city}</p>
    </div>
  )
}

export default Details