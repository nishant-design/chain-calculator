const Dot = () => <div className='w-[3px] h-[3px] rounded-full bg-[#cdcdcd]'/>

const DotsComponent = () => {
  return (
    <div className='grid grid-cols-3 gap-[2px] leading-none'>
        <Dot/>
        <Dot/>
        <Dot/>
        <Dot/>
        <Dot/>
        <Dot/>
    </div>
  )
}

export default DotsComponent