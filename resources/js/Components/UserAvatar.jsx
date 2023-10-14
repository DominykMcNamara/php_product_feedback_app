import React from 'react'

export default function UserAvatar({ user}) {
  return (
    <div>
        <img src={user.avatar} alt={`${user.name}'s avatar`} className="w-[4rem]  h-[4rem] rounded-[100%]" />
    </div>
  )
}
