import SideButton from "./SideButton";

export default function Sidebar() {
  return (
    <div className='w-1/4 backdrop-blur-2xl rounded-lg bg-gray-200 flex flex-col items-center p-2 h-[70vh] border '>
        <SideButton></SideButton>
        <SideButton></SideButton>
        <SideButton></SideButton>
        </div>
  )
}
