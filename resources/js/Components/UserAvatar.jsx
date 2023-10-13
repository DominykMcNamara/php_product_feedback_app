import React from 'react'

export default function UserAvatar({ user}) {
  return (
    <div>
        <img src={user.avatar} alt={`${user.name}'s avatar`} className="w-[3rem] h-[3rem] rounded-[100%]" />
    </div>
  )
}
