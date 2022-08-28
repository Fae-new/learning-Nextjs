import Link from 'next/link'
import React from 'react'
import styles from '../../styles/Ninjas.module.css'


export const getStaticProps = async()=>{
const res= await fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  return{
props:{ninjas:res}

  }

} 




const Ninja = ({ninjas}:{ninjas:any}) => {
  return (
    <div>
        <h1>All Ninjas</h1>
        {ninjas.map((ninja:any)=>{
          return(
            <Link  href={'/ninjas/'+ ninja.id} key={ninja.id}>

              <a className={styles.single}>
                
                <h3>{ninja.name}</h3>
                </a>
            </Link>
          )

        })}
    </div>
  )
}

export default Ninja