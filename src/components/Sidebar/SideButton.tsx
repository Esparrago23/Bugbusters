import { Link } from 'react-router-dom'

export default function () {
  return (
    <div className='w-full p-2 my-2 text-center rounded-lg   bg-green-500 text-white'>
        <Link  to={"/side"}>username</Link>
    </div>
  )
}
