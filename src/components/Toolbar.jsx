import React, { useEffect, useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { RxLineHeight } from "react-icons/rx";
import { MdOutlineTextFields, MdFormatColorFill } from "react-icons/md";
import { FiLayout } from "react-icons/fi";
import { AiOutlineFullscreen } from "react-icons/ai";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from './ui/input';
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Sketch } from '@uiw/react-color';
import { handleCapture } from '@/utils/pdfUtils';

function Toolbar({ selectedElement, updateStyle, undoStack, redoStack, dataObj }) {
    const [color, setColor] = useState('');
    const [fontStyle, setFontStyle] = React.useState('')
    const [lineHeight, setLineHeight] = React.useState('')
    const [font, setFont] = React.useState('')
    const [colorOption, setColorOption] = React.useState("")

    useEffect(() => {
        if (selectedElement != null) {
            if (colorOption == "option2") {
                setColor(selectedElement.res?.backgroundColor)
            } else {
                setColor(selectedElement.res?.color)
            }
            setFontStyle(selectedElement.res?.fontWeight)
            setLineHeight(selectedElement.res?.lineHeight?.slice(0, -2))
            setFont(selectedElement.res?.fontFamily)
        }
    }, [selectedElement])

    useEffect(() => {
        if (selectedElement) {
            undoStack.push(dataObj);
            redoStack.clear();
            const { section, idx, element, element2, type } = selectedElement;
            if (colorOption == "option1") {
                updateStyle(section, idx, element, element2, type, 'color', { color: color });
            } else if (colorOption == "option2") {
                updateStyle(section, idx, element, element2, type, 'backgroundColor', { backgroundColor: color });
            }
        }
    }, [color])

    useEffect(() => {
        if (selectedElement) {
            undoStack.push(dataObj);
            redoStack.clear();
            const { section, idx, element, element2, type } = selectedElement;
            updateStyle(section, idx, element, element2, type, 'fontStyle', { fontWeight: fontStyle });
        }
    }, [fontStyle])

    useEffect(() => {
        if (selectedElement) {
            undoStack.push(dataObj);
            redoStack.clear();
            const { section, idx, element, element2, type } = selectedElement;
            updateStyle(section, idx, element, element2, type, 'lineHeight', { lineHeight: lineHeight + 'px' });
        }
    }, [lineHeight])

    useEffect(() => {
        if (selectedElement) {
            undoStack.push(dataObj);
            redoStack.clear();
            const { section, idx, element, element2, type } = selectedElement;
            updateStyle(section, idx, element, element2, type, 'fontFamily', { fontFamily: font });
        }
    }, [font])

    const fontWeight = {
        '800': 'Bold',
        '700': 'Semi-Bold',
        '500': 'Medium',
        '400': 'Normal'
    }


    return (
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-around">

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <button className="flex items-center gap-2 hover:bg-gray-100 p-3 rounded-md cursor-pointer">
                        <FiLayout className='opacity-50' />
                        <span className='font-semibold text-sm'>Templates</span>
                        <IoIosArrowDown className='opacity-50' />
                    </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-40">
                    <DropdownMenuLabel>Templates</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuRadioGroup >
                        <DropdownMenuRadioItem value="">No Templates</DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                </DropdownMenuContent>
            </DropdownMenu>


            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <div className="flex items-center gap-2 hover:bg-gray-100 p-3 rounded-md cursor-pointer">
                        <span className="font-semibold text-[#1E202C] opacity-50">Ag</span>
                        <span className='font-semibold text-sm'>{font == '' ? 'Fonts' : font}</span>
                        <IoIosArrowDown className='opacity-50' />
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-40">
                    <DropdownMenuLabel>Fonts</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuRadioGroup value={font} onValueChange={setFont}>
                        <DropdownMenuRadioItem value="Roboto">Roboto</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="SourceSansPro">Source Sans Pro</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="Inter">Inter</DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <div className="flex items-center gap-2 hover:bg-gray-100 p-3 rounded-md cursor-pointer" onClick={() => handleFontStyleChange('bold')}>
                        <MdOutlineTextFields className='opacity-50' />
                        <span className='font-semibold text-sm'>{fontStyle == '' ? 'Font Style' : fontWeight[fontStyle]}</span>
                        <IoIosArrowDown className='opacity-50' />
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-40">
                    <DropdownMenuLabel>Font Style</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuRadioGroup value={fontStyle} onValueChange={setFontStyle}>
                        <DropdownMenuRadioItem value="800">Bold</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="700">Semi-Bold</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="500">Medium</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="400">Normal</DropdownMenuRadioItem>

                    </DropdownMenuRadioGroup>
                </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <div className="flex items-center gap-2 hover:bg-gray-100 p-3 rounded-md cursor-pointer">
                        <RxLineHeight className='opacity-50' />
                        <span className='font-semibold text-sm'>{lineHeight == '' ? 'Line Height' : lineHeight + ' px'}</span>
                        <IoIosArrowDown className='opacity-50' />
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-40">
                    <DropdownMenuLabel>Line Height</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <div className='flex gap-2 p-2'>
                        <Input value={lineHeight} type='number' className=' h-8' onChange={(e) => setLineHeight(e.target.value)}></Input>
                        <p>px</p>
                    </div>

                </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <div
                        style={{ color: (color == '#ffffff') ? '#000000' : color }}
                        className={`flex items-center gap-2 hover:bg-gray-100 p-3 rounded-md cursor-pointer`}>
                        <MdFormatColorFill className='opacity-50' />
                        <IoIosArrowDown className='opacity-50' />
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="p-2">
                    <DropdownMenuLabel>Color</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <RadioGroup className='p-2' defaultValue="option1" value={colorOption} onValueChange={setColorOption}>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="option1" id="option-one" />
                            <Label htmlFor="option1">Text Color</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="option2" id="option-two" />
                            <Label htmlFor="option2">Bg Color</Label>
                        </div>
                    </RadioGroup>
                    <DropdownMenuSeparator />
                    <Sketch
                        color={color}
                        onChange={(color) => { setColor(color.hex); }}
                    />
                </DropdownMenuContent>
            </DropdownMenu>

            <button onClick={handleCapture} className="flex hover:bg-gray-100 p-1 rounded-md items-center gap-2 cursor-pointer">
                <AiOutlineFullscreen size='32px' />
            </button>
        </div>
    )
}

export default Toolbar