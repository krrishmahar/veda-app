'use client'

import { useRouter } from 'next/navigation'

export default function Page(){
    const router = useRouter()
  return (
    <>
      <div>
      this is roompage
      </div>
      <button type="button" onClick={() => router.push("/")}>
        Home Page
      </button>
    </>
  )
}
