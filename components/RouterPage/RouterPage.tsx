import { useRouter } from 'next/router'
import ReactNode from 'react'

export default function RouterPage({children, href}) {
    const router = useRouter()
    
    const handle = (e) => {
        e.preventDefault()
        router.push(href)
    }
  

    return (
        <a href={href} onClick={handle}>
            {children}
        </a>
    )
}
