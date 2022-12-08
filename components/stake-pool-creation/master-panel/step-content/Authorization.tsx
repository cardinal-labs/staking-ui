import { InformationCircleIcon } from '@heroicons/react/24/outline'
import { PlusIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

import { LabelText } from '@/components/UI/typography/LabelText'

export const Authorization = () => {
  const [displayInput, setDisplayInput] = useState(false)
  return (
    <>
      <div className="space-y-2">
        <div className="flex w-full items-center">
          <LabelText>Creator Address</LabelText>
          <InformationCircleIcon className="ml-1 h-6 w-6 cursor-pointer text-gray-400" />
        </div>
        {displayInput ? (
          <input className="w-full rounded-lg bg-gray-800 p-2 outline outline-gray-600 focus:outline-orange-500"></input>
        ) : (
          <div
            className="flex cursor-pointer items-center justify-center space-x-2 rounded-2xl border border-dashed border-gray-500 bg-gray-800 p-8 text-gray-500"
            onClick={() => setDisplayInput(true)}
          >
            <PlusIcon className="h-6 w-6" />
            <div>Add address</div>
          </div>
        )}
      </div>
    </>
  )
}