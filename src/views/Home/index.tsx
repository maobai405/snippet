import { CustomSearch } from '@/core'

import avatarImg from '@/assets/images/avatar.png'

export default () => {
  const clickAvatar = () => {
    console.log('clickAvatar')
  }
  return (
    <div className='flex w-full items-center'>
      <CustomSearch onChange={(value) => console.log(value)} />
      {/* 用户头像 */}
      <div className='avatar p-1.5 cursor-pointer' onClick={clickAvatar}>
        <div className='w-10 h-10 rounded-full'>
          <img src={avatarImg} />
        </div>
      </div>
    </div>
  )
}
