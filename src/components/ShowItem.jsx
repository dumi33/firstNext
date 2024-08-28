import Image from 'next/image'
import React from 'react'

export default function ShowItem() {
  return (
    <div className='flex'>
        <div className="flex-none ml-6 w-3/12 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
            <a href="#" className='grid place-items-center' >
                <Image src='https://standoil.kr/web/product/small/202406/b5f753eb4918498f411aca1d12ebdc30.jpg' 
                alt='neckless' 
                width={200}
                height={84}
            />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Rose Drop Necklace · 로즈 드롭 넥클리스 / 실버</h5>
                </a>
                <p  className="mb-3 text-xs font-light text-gray-700 dark:text-gray-400">
                    다양하게 연출이 가능한 큰 장미 펜던트가 매력적인 
                    '로즈 드롭 넥클리스'
                    <li>빅 장미 넥클리스
                    </li> 
                    <li>로프를 따라 흐르는 물방울 모양의 마무리 팁
                    </li>
                    <li> 목걸이, 백참 응용 가능
                    </li> 
                </p>
            </div>
        </div>

        <div className="flex-none ml-6 w-3/12 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
            <a href="#" className='grid place-items-center' >
                <Image src='https://standoil.kr/web/product/small/202403/1082a4ca29d6a7c064af249437d74c18.jpg' 
                alt='neckless' 
                width={200}
                height={84}
            />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Bubbly Necklace · 버블리 넥클리스 / 레몬</h5>
                </a>
                <p  className="mb-3 text-xs font-light text-gray-700 dark:text-gray-400">
                    스탠드오일만의 통통 튀는 상큼한 분위기를 담은 레이어링 '버블리 넥클리스'
                    <li>
                        레몬 컬러 비즈와 투명한 글라스 스톤
                    </li> 
                    <li>
                        뒷고리 연장 체인으로 사이즈 조절 가능
                    </li> 
                </p>
            </div>
        </div>


        <div className="flex-none ml-6 w-3/12 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
            <a href="#" className='grid place-items-center' >
                <Image src='https://standoil.kr/web/product/small/202403/195fd4e236d694212c4e3ae2d09055df.jpg' 
                alt='neckless' 
                width={200}
                height={84}
            />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Ball Chain Mix Neckless · 볼 체인 믹스 넥클리스 / 실버</h5>
                </a>
                <p  className="mb-3 text-xs font-light text-gray-700 dark:text-gray-400">
                    두 가지 사이즈의 실버볼을 믹스하여 디자인한 '볼 체인 믹스 넥클리스'
                    <li>
                        연장 체인의 'SO' 포인트 로고팁
                    </li> 
                    <li>
                        뒷고리 연장 체인으로 사이즈 조절 가능
                    </li> 
                </p>
            </div>
        </div>
    </div>
    


  )
}
