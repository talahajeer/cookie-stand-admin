import styles from '../styles/Home.module.css'

export default function Footer({locationsNumber}) {
    return (
        <footer className='bg-green-400 w-full p-3' >
        <p className=' ml-4' >{locationsNumber} Locations World Wide </p>            
        </footer>
        
    )}