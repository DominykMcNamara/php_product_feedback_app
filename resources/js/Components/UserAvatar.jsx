import React from 'react'

export default function UserAvatar({ user}) {
  return (
    <div>
        <img src={user.avatar} alt={`${user.name}'s avatar`} className="w-[5rem]  h-[4rem] rounded-[100%]" />
    </div>
  )
}
