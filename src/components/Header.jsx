import React from 'react'
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { BsArrowReturnLeft, BsArrowReturnRight } from "react-icons/bs";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { generatePDF } from '@/utils/pdfUtils';


function Header({ handleUndo, handleRedo }) {
    return (
        <div className='w-screen pl-10 pr-10 bg-[#5447B6] flex justify-between items-center'>
            <div className='flex gap-2 items-center text-white cursor-pointer hover:bg-blend-overlay'>
                <MdOutlineKeyboardBackspace className='w-6 h-6' />
                <h1 className='font-sans text-lg'>Home</h1>
            </div>
            <div className='flex gap-2'>
                <button onClick={() => { handleUndo() }} className='border-2 hover:bg-gray-100 hover:bg-opacity-10 rounded-md p-2 text-white'><BsArrowReturnLeft />
                </button>
                <button onClick={() => handleRedo()} className='border-2 hover:bg-gray-100 hover:bg-opacity-10 rounded-md p-2 text-white'><BsArrowReturnRight />
                </button>
                <Select>
                    <SelectTrigger className="w-[80px] hover:bg-gray-100 hover:bg-opacity-10 border-2">
                        <SelectValue placeholder="ENG" />
                    </SelectTrigger>
                    <SelectContent className='text-sm'>
                        <SelectGroup>
                            <SelectItem value="eng">ENG</SelectItem>
                            <SelectItem value="ban">BAN</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <button onClick={generatePDF} className='w-[100px] hover:bg-opacity-80 rounded-md p-2 text-white bg-[#FF7D0A] text-sm'>Download</button>
            </div>
        </div>
    )
}

export default Header