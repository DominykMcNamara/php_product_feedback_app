import React from 'react'

export default function UserAvatar({ user}) {
  return (
    <div>
        <img src={user.avatar} alt={`${user.name}'s avatar`} className="w-96 h-96 rounded-[100%]" />
    </div>
  )
}
