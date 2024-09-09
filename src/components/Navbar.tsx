// import Link from 'next/link'

// import { buttonVariants } from './ui/button'
// import {
//   LoginLink,
//   RegisterLink,
//   getKindeServerSession,
// } from '@kinde-oss/kinde-auth-nextjs/server'
// import { ArrowRight } from 'lucide-react'
// import UserAccountNav from './UserAccountNav'
// import MobileNav from './MobileNav'

// const Navbar = () => {
//   const { getUser } = getKindeServerSession()
//   const user = getUser()

//   return (
//     <nav className='sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
//       <div className='mx-auto w-full max-w-screen-xl px-2.5 md:px-20'>
//         <div className='flex h-14 items-center justify-between border-b border-zinc-200'>
//           <Link
//             href='/'
//             className='flex z-40 font-semibold'>
//             <span>AskPdf</span>
//           </Link>

//           <MobileNav isAuth={!!user} />

//           <div className='hidden items-center space-x-4 sm:flex'>
//             {!user ? (
//               <>
//                 <Link
//                   href='/pricing'
//                   className={buttonVariants({
//                     variant: 'ghost',
//                     size: 'sm',
//                   })}>
//                   Pricing
//                 </Link>
//                 <LoginLink
//                   className={buttonVariants({
//                     variant: 'ghost',
//                     size: 'sm',
//                   })}>
//                   Sign in
//                 </LoginLink>
//                 <RegisterLink
//                   className={buttonVariants({
//                     size: 'sm',
//                   })}>
//                   Get started{' '}
//                   <ArrowRight className='ml-1.5 h-5 w-5' />
//                 </RegisterLink>
//               </>
//             ) : (
//               <>
//                 <Link
//                   href='/dashboard'
//                   className={buttonVariants({
//                     variant: 'ghost',
//                     size: 'sm',
//                   })}>
//                   Dashboard
//                 </Link>

//                 <UserAccountNav
//                   name={
//                     !user.given_name || !user.family_name
//                       ? 'Your Account'
//                       : `${user.given_name} ${user.family_name}`
//                   }
//                   email={user.email ?? ''}
//                   imageUrl={user.picture ?? ''}
//                 />
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Navbar


import Link from 'next/link'

import { buttonVariants } from './ui/button'
import {
  LoginLink,
  RegisterLink,
  getKindeServerSession,
} from '@kinde-oss/kinde-auth-nextjs/server'
import { ArrowRight } from 'lucide-react'
import UserAccountNav from './UserAccountNav'
import MobileNav from './MobileNav'

const Navbar = () => {
  const { getUser } = getKindeServerSession()
  const user = getUser()

  return (
    // <nav className='sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
    //   <div className='mx-auto w-full max-w-screen-xl px-2.5 md:px-20'>
    //     <div className='flex h-14 items-center justify-between border-b border-zinc-200'>
    //       <Link
    //         href='/'
    //         className='flex z-40 font-semibold'>
    //         <span>AskPdf</span>
    //       </Link>

    //       <MobileNav isAuth={!!user} />

    //       <div className='hidden items-center space-x-4 sm:flex'>
    //         {!user ? (
    //           <>
    //             <Link
    //               href='/pricing'
    //               className={buttonVariants({
    //                 variant: 'ghost',
    //                 size: 'sm',
    //               })}>
    //               Pricing
    //             </Link>
    //             <LoginLink
    //               className={buttonVariants({
    //                 variant: 'ghost',
    //                 size: 'sm',
    //               })}>
    //               Sign in
    //             </LoginLink>
    //             <RegisterLink
    //               className={buttonVariants({
    //                 size: 'sm',
    //               })}>
    //               Get started{' '}
    //               <ArrowRight className='ml-1.5 h-5 w-5' />
    //             </RegisterLink>
    //           </>
    //         ) : (
    //           <>
    //             <Link
    //               href='/dashboard'
    //               className={buttonVariants({
    //                 variant: 'ghost',
    //                 size: 'sm',
    //               })}>
    //               Dashboard
    //             </Link>

    //             <UserAccountNav
    //               name={
    //                 !user.given_name || !user.family_name
    //                   ? 'Your Account'
    //                   : `${user.given_name} ${user.family_name}`
    //               }
    //               email={user.email ?? ''}
    //               imageUrl={user.picture ?? ''}
    //             />
    //           </>
    //         )}
    //       </div>
    //     </div>
    //   </div>
    // </nav>


    <nav className="navbar text-white sticky h-25 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-transparent/75 backdrop-blur-lg transition-all ">
      <div className="container mx-auto flex justify-between items-center px-4 py-2">
        <div className="flex space-x-4">
          <Link href='/' className="text-5xl font-bold text-green-600">Ask<span className='text-white flex-col flex ml-10' >Pdf</span></Link>
          <MobileNav isAuth={!!user} />

          {/* <div className='flex space-x-10 text-3xl font-semibold no-underline justify-center items-center'>
            <Link href="/" className='ml-20'>Pricing</Link>
            <Link href="/" className='ml-20'>Sign in</Link>
          </div> */}
          {!user ? (
            <>
            <div className='flex space-x-10 text-3xl font-semibold no-underline justify-center items-center'>
              <Link
                href='/pricing'
                className='ml-20'>
                Pricing
              </Link>
              <LoginLink
               className='ml-20'>
                Sign in
              </LoginLink>
              {/* <RegisterLink
                className={buttonVariants({
                  size: 'sm',
                })}>
                Get started{' '}
                <ArrowRight className='ml-1.5 h-5 w-5' />
              </RegisterLink> */}
              </div>
            </>
          ) : (
            <>
            <div className='flex space-x-10 text-3xl font-semibold no-underline justify-center items-center'>
              <Link
                href='/dashboard'
                className='ml-20'>
                Dashboard
              </Link>

              <UserAccountNav
                name={
                  !user.given_name || !user.family_name
                    ? 'Your Account'
                    : `${user.given_name} ${user.family_name}`
                }
                email={user.email ?? ''}
                imageUrl={user.picture ?? ''}
              />
              </div>
            </>
          )}
        </div>

        <div className="animate-bounce flex space-x-2 text-2xl">
          <RegisterLink className="bg-green-500  text-white px-4 py-2 rounded-full flex-row flex">
          {/* <RegisterLink> */}
            <div>Get Started</div>
            <div><ArrowRight className='ml-1.5 h-9 w-9' /></div>
            </RegisterLink>
          {/* </RegisterLink> */}
        </div>
      </div>
    </nav>
  )
}

export default Navbar

