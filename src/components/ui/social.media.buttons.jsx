export const SocialMediaButtons = (props) => {
const {children} = props
  return (
    <button className='border-2 border-orange-500 p-3 rounded-full bg-white text-orange-500'>{children}</button>
  )
}
