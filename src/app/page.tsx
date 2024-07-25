'use client'
import Image from 'next/image'
import LinearTopGrill from '../assets/svg/LinearTopGrill.svg'
import LinearBottomGrill from '../assets/svg/LinearBottomGrill.svg'
import Search from '../assets/svg/Search.svg'
import Filter from '../assets/svg/Filter.svg'
import File from '../assets/svg/File.svg'
import Tag from '../assets/svg/Tag.svg'
import Pin from '../assets/svg/Pin.svg'
import DownArrow from '../assets/svg/DownArrow.svg'
import cardimage1 from '../assets/images/cardimage1.png'
import cardimage2 from '../assets/images/cardimage2.png'
import cardimage3 from '../assets/images/cardimage3.png'
import cardimage5 from '../assets/images/cardimage5.png'
import cardimage6 from '../assets/images/cardimage6.png'
import { useEffect, useState } from 'react'
import "@/app/page.css"

interface ButtonGroupItem {
  name: string;
  active: boolean;
}
type ButtonGroupArray = ButtonGroupItem[];
interface CardDetail {
  image: string;
  title: string;
  tags: {
    name: string;
    icon: string;
  }[];
}

const btnGroup: ButtonGroupItem[]= [
  {
    name:'All Resources',
    active: true
  },
  {
    name:'Design',
    active: false
  },
  {
    name:'Developement',
    active: false
  },
  {
    name:'Marketing',
    active: false
  },
  {
    name:'Branding',
    active: false
  },
]
const CardDetails: CardDetail[] = [
  {
    image: '../assets/images/cardimage1.png',
    title:'Case Study Template: FlipX, an Investment Attraction Startup',
    tags: [
      {
        name:'Design file',
        icon:'pin'
      }
    ]
  },
  {
    image:'../assets/images/cardimage2.png',
    title:'Designing Impression: The Power of First Impressions',
    tags: [
      {
        name:'Github Resource',
        icon:'tag'
      }
    ]
  },
  {
    image:'../assets/images/cardimage3.png',
    title:'Fluid Card Animation in After Effects',
    tags: [
      {
        name:'Design',
        icon:''
      },
      {
        name:'UI UX',
        icon:''
      },
      {
        name:'Branding',
        icon:''
      },
    ]
  },
  {
    image:'../assets/images/cardimage2.png',
    title:'Designing Impression: The Power of First Impressions',
    tags: [
      {
        name:'Design',
        icon:''
      },
      {
        name:'UI UX',
        icon:''
      },
      {
        name:'Branding',
        icon:''
      },
    ]
  },
  {
    image:'../assets/images/cardimage5.png',
    title:'Designing Impression: The Power of First Impressions',
    tags: [
      {
        name:'Design',
        icon:''
      }
    ]
  },
  {
    image:'../assets/images/cardimage6.png',
    title:'OpenCore Customer Acquisition Strategy',
    tags: [
      {
        name:'Markeing PDF',
        icon:'pdf'
      }
    ]
  },
]
export default function Home() {
  const [ButtonGroups, setButtonGroups] = useState<ButtonGroupArray>([])
  
  const handleButtonSelectable = (index:number):void => {
    let btnGroups:ButtonGroupArray = btnGroup.map((item, i) => ({
      ...item,
      active: i === index,
    }));
    setButtonGroups(btnGroups)
  }

  useEffect(() => {
    setButtonGroups(btnGroup as ButtonGroupArray)
  },[])

  useEffect(() => {
    let Allcards = document.getElementsByClassName('Allcards')
    for (let i = 0; i < Allcards.length; i++) {
      if (window.innerWidth <= 425 && i > 2) {
        Allcards[i].setAttribute('style', 'display:none')
      } else {
        Allcards[i].setAttribute('style', 'display:block')
      }
    }
  },[window.innerWidth])

  return (
      <main>
        <div className='container'>
            <div className='homepageFirstSection'>
              <h2>Your Ultimate Resource Hub for Digital Success</h2>
              <p>Explore our comprehensive library of tools and templates for developers, designers, marketers, and branding experts.</p>
            </div>
            <section className='xl:px-[96px]'>
                <div className='SearchInput'>
                  <Search className='mr-[8px]'/>
                  <input placeholder='Search for resources and tutorials' className='w-[100%] outline-none'/>
                </div>
                <div className='flex items-center flex-wrap justify-between mb-[64px]'>
                  <div className='InputCategory'>
                    {ButtonGroups.length > 0 && ButtonGroups.map((item: ButtonGroupItem, i) => {
                      return (
                        <button 
                          type='button' 
                          key={item?.name} 
                          className={`${item.active ?  'bg-primarylight text-primary' : 'border-2 border-bordercolor border-solid text-secoundry'} py-[10px] px-[16px] rounded-[8px] text-[16px] font-[500] leading-[24px] hover:bg-primarylight hover:text-primary`}
                          onClick={() => handleButtonSelectable(i)}
                        >
                          {item?.name}
                        </button>
                      )
                    })}
                  </div>
                  <div className='selectedInputCategory'>
                      <select className={`bg-primarylight text-primary text-secoundry py-[10px] px-[16px] `}>
                      {btnGroup.length > 0 && btnGroup.map((item, i) => {
                        return (
                          <option key={item?.name}> {item?.name} </option>
                        )
                      })}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                         <DownArrow/>
                      </div>
                  </div>
                  <div>
                        <button type='button' className={'flex items-center gap-[8px] border-2 border-bordercolor border-solid text-secoundry py-[10px] px-[16px] rounded-[8px] text-[16px] font-[500] leading-[24px] hover:bg-primarylight hover:text-primary'}>
                          <Filter width='16px' height='16px'/>
                          <span>Filters</span>
                        </button>
                  </div>
                </div>
                <div className='flex flex-wrap gap-y-8 gap-x-4 pb-6'>
                  {
                    CardDetails.length > 0 && CardDetails.map((item, index) => (
                      <div key={item?.title} className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-[32%] Allcards mx-auto`}>
                        <div className='bg-white rounded-lg overflow-hidden'>
                          <Image 
                            src={index === 0 ? cardimage1 : index === 1 ? cardimage2 : index === 2 ? cardimage3 : index === 4 ? cardimage5 :index === 5 ? cardimage6 : cardimage2 } 
                            alt='Card' 
                            width={600} 
                            height={250} 
                            layout="responsive" 
                            className='rounded-[16px]'
                          />
                          <div className='p-4'>
                            <h3 className='text-[24px] font-500 leading-[36px] text-primary mb-[16px] min-h-[72px]'>{item?.title}</h3>
                            <div className='flex flex-wrap gap-2 mb-2'>
                              {item?.tags?.length > 0 && item?.tags.map((tag, tagIndex) => (
                                <div key={tagIndex} className='text-[14px] font-500 leading-[21px] flex items-center gap-[4px] text-secoundry bg-lightgray inline-block rounded-[4px] py-[4px] px-[9px]'>
                                  { 
                                    tag?.icon === 'pdf' ? <File /> :
                                    tag?.icon === 'pin' ? <Pin /> :
                                    tag?.icon === 'tag' ? <Tag /> : ''    
                                  }
                                  <span>{tag?.name}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
            </section>
            <section className='ideaIntoReality'>
                <div className='rounded-[16px] bg-primary overflow-hidden'>
                  <LinearTopGrill width='100%' height='150px'/>
                  <div className='ideaIntoRealityTitleRow'>
                     <div className='ideaIntoRealitytitle'>
                       <h3>
                        <span className='font-[400]'>Transforming your </span> 
                        <span className='font-[600]'> Ideas into reality</span>
                      </h3>
                      <p>Let's build something extraordinary together to captivate your audience.</p>
                     </div>
                     <div className='CircleWork'>
                       <p>Let’s Work<br/>Together!</p>
                     </div>
                  </div>
                  <LinearBottomGrill width='100%' height='150px'/>
                </div>
            </section>
        </div>
      </main>
  );
}
