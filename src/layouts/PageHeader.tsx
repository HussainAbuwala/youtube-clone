import {useState} from 'react'
import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from 'lucide-react'
import Button from '../components/Button'
import { useSidebarContext } from "../contexts/SidebarContext"


export default function PageHeader() {
    const [showFullWidthSearch, setShowFullWidthSearch] = useState(false)

  return (
    <div className='flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4 '>
              <PageHeaderFirstSection hidden={showFullWidthSearch} />

        <form className={`flex-grow gap-4 justify-center ${showFullWidthSearch ? 'flex' : 'hidden md:flex'}`}>
        
        {showFullWidthSearch && (
            <Button onClick={() => setShowFullWidthSearch(false)}type='button' size='icon' variant='ghost' className='flex-shrink-0'>
            <ArrowLeft />
        </Button>
        )}
            <div className='flex flex-grow max-w-[600px]'>
                <input
                    type='search'
                    placeholder='Search'
                    className='rounded-l-full border border-secondary-border shadow-inner shadow-secondary py-1 px-4 text-lg w-full outline-none focus:border-blue-500 '
                />
                <Button className='py-2 px-4 rounded-r-full border-secondary-border border border-1-0 flex-shrink-0'>
                    <Search />
                </Button>
            </div>
            <Button type='button' size='icon' className='flex-shrink-0'>
                <Mic />
            </Button>
        </form>
        <div className={`flex-shrink-0 md:gap-2 ${showFullWidthSearch ? 'hidden' : 'flex'}`}>
            <Button onClick={() => setShowFullWidthSearch(true)} size='icon' variant='ghost' className='md:hidden'>
                <Search />
            </Button>
            <Button size='icon' variant='ghost' className='md:hidden'>
                <Mic />
            </Button>
            <Button size="icon" variant="ghost">
                <Upload />
            </Button>
            <Button size="icon" variant="ghost">
                <Bell />
            </Button>
            <Button size="icon" variant="ghost">
                <User />
            </Button>
        </div>
    </div>
  )
}

type PageHeaderFirstSectionProps = {
    hidden?: boolean
  }
  
  export function PageHeaderFirstSection({
    hidden = false,
  }: PageHeaderFirstSectionProps) {
    const { toggle } = useSidebarContext()
  
    return (
      <div
        className={`gap-4 items-center flex-shrink-0 ${
          hidden ? "hidden" : "flex"
        }`}
      >
        <Button onClick={toggle} variant="ghost" size="icon">
          <Menu />
        </Button>
        <a href="/">
                <div className='flex items-center gap-1'>
                <img src="https://www.svgrepo.com/show/13671/youtube.svg" className='w-[30px] h-[30px]' />
                <span className='text-xl font-sans font-medium'>Youtube</span>
                </div>                
            </a>
      </div>
    )
  }