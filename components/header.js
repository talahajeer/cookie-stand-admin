import styles from '../styles/Home.module.css'

export default function CookieStandHeader() {
    return (
        <header className='bg-green-400 w-full p-3'>
        <h1 className='text-2xl font-medium'>
            Cookie Stand Admin
        </h1>
        <link href='/overview'>
                <a className="bg-gray-100 text-gray-800 rounded-lg mr-4 pb-1 pl-1 pr-1 text-l float-right " >Overview</a>
        </link>
        </header>
    )
}