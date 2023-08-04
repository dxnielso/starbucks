import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const SocialMediaRow = () => {
  return (
    <div className='flex gap-x-5'>
      <FaFacebookF className='text-5xl text-white rounded-full p-2 bg-[#2b2b2b]' />
      <FaInstagram className='text-5xl text-white rounded-full p-2 bg-[#2b2b2b]' />
      <FaTwitter className='text-5xl text-white rounded-full p-2 bg-[#2b2b2b]' />
      <FaYoutube className='text-5xl text-white rounded-full p-2 bg-[#2b2b2b]' />
    </div>
  )
}

export default SocialMediaRow