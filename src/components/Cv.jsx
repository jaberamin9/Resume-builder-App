import React from 'react'
import { LuBrain } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { PiGraduationCapBold } from "react-icons/pi";
import { LuLanguages } from "react-icons/lu";
import { TbChessKnight } from "react-icons/tb";
import { MdEmail, MdOutlineWorkOutline } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { FaMobileAlt } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { RiWirelessChargingFill } from "react-icons/ri";

function Cv({ dataObj, setSelectedElement, selectedElement, zoomLevel }) {


    const fun = (section, element, idx, element2) => {
        if (idx >= 0 && element2 <= 0) {
            return dataObj[section][idx][element];
        } else if (idx >= 0 && element2 != '') {
            return dataObj[section][element][idx][element2]
        } else if (section != '' && element != '') {
            return dataObj[section][element]
        }

    };

    const handleElementClick = (section, element, idx, element2, type, e) => {
        e.stopPropagation();
        console.log(section, element)

        const res = fun(section, element, idx, element2);
        setSelectedElement({ section, element, idx, element2, type, res });
    };

    const isSelected = (section, idx, element, element2, type) => {
        return selectedElement?.section === section
            && selectedElement?.idx === idx
            && selectedElement?.element === element
            && selectedElement?.element2 === element2
            && selectedElement?.type === type;
    };

    return (
        <div
            className="overflow-hidden p-4 transition-transform duration-300"
            style={{ transform: `scale(${zoomLevel})` }}
        >
            <div id='cv' className='w-full h-full grid grid-cols-[0.6fr_2fr]'>
                <div
                    onClick={(e) => handleElementClick('leftBg', '', -1, -1, -1, e)}
                    style={{
                        backgroundColor: dataObj.leftBg,
                    }}
                    className={`bg-[#333a4d] border-r-4 border-[#448f97] p-4 flex flex-col gap-6 ${isSelected('leftBg', -1, '', -1, -1) ? 'border-2 p-1 border-yellow-500' : ''}`}>
                    {dataObj.profile ? (
                        <div className='w-full flex justify-center items-center'>
                            <img src={dataObj.profile} alt="img" className=" w-32 h-32 border-2 border-[#448f97] rounded-full object-cover" />
                        </div>
                    ) : (
                        <div className='w-full flex justify-center items-center'>
                            <div className="bg-[#d9d9d9] flex justify-center items-center w-32 h-32 border-2 border-[#448f97] rounded-full object-cover">
                                <CgProfile color="#aaaaaa" className="w-9 h-9" />
                            </div>
                        </div>
                    )}
                    {
                        dataObj.leftSide.map((value, idx) => {
                            return <div
                                key={idx}
                                className='flex flex-col gap-2'>
                                <div div className='flex gap-2 items-center' >
                                    <div
                                        style={{
                                            backgroundColor: value.titleStyle.color,
                                        }}
                                        className='bg-white rounded-full w-6 h-6 flex justify-center items-center'>
                                        {value.type === 1 ? <LuBrain color={dataObj.leftBg} /> : ''}
                                        {value.type === 2 ? <PiGraduationCapBold color={dataObj.leftBg} /> : ''}
                                        {value.type === 3 ? <LuLanguages color={dataObj.leftBg} /> : ''}
                                        {value.type === 4 ? <TbChessKnight color={dataObj.leftBg} /> : ''}
                                    </div>
                                    <h1
                                        style={value.titleStyle}
                                        className={`text-white font-bold text-lg ${isSelected('leftSide', idx, 'titleStyle', -1, -1) ? 'border-2 p-1 border-yellow-500' : ''}`}
                                        onClick={(e) => handleElementClick('leftSide', 'titleStyle', idx, -1, -1, e)}
                                    >{value.title}
                                    </h1>
                                </div>
                                <div>
                                    <ul className='flex flex-col gap-1'>
                                        {
                                            value.data.map((item, index) => {
                                                let res;
                                                if (value.type === 1) {
                                                    res = <li
                                                        key={index}
                                                        onClick={(e) => handleElementClick('leftSide', 'dataStyle', idx, -1, -1, e)}
                                                        style={value.dataStyle}
                                                        className={`p-1 text-xs rounded-sm w-max ${isSelected('leftSide', idx, 'dataStyle', -1, -1) ? 'border-2 p-1 border-yellow-500' : ''}`}
                                                    >
                                                        {item}</li>
                                                } else if (value.type === 2) {
                                                    res = <li
                                                        key={index}
                                                        className='flex flex-col'>
                                                        <p
                                                            onClick={(e) => handleElementClick('leftSide', 'dataStyle', idx, -1, -1, e)}
                                                            style={value.dataStyle}
                                                            className={`text-white font-semibold text-sm rounded-sm w-max ${isSelected('leftSide', idx, 'dataStyle', -1, -1) ? 'border-2 p-1 border-yellow-500' : ''}`}>
                                                            {item.subject}
                                                        </p>
                                                        <p
                                                            onClick={(e) => handleElementClick('leftSide', 'dataStyle2', idx, -1, -1, e)}
                                                            style={value.dataStyle2}
                                                            className={`text-xs font-thin text-white rounded-sm w-max ${isSelected('leftSide', idx, 'dataStyle2', -1, -1) ? 'border-2 p-1 border-yellow-500' : ''}`}>
                                                            {item.collegeName}
                                                        </p>
                                                    </li>
                                                } else if (value.type === 3) {
                                                    res = <li
                                                        key={index}
                                                        className='flex flex-col'>
                                                        <p
                                                            onClick={(e) => handleElementClick('leftSide', 'dataStyle', idx, -1, -1, e)}
                                                            style={value.dataStyle}
                                                            className={`text-white font-semibold text-sm rounded-sm w-max ${isSelected('leftSide', idx, 'dataStyle', -1, -1) ? 'border-2 p-1 border-yellow-500' : ''}`}>
                                                            {item.subject}
                                                        </p>
                                                        <p
                                                            onClick={(e) => handleElementClick('leftSide', 'dataStyle2', idx, -1, -1, e)}
                                                            style={value.dataStyle2}
                                                            className={`text-xs py-1 font-thin text-white rounded-sm w-max ${isSelected('leftSide', idx, 'dataStyle2', -1, -1) ? 'border-2 p-1 border-yellow-500' : ''}`}>
                                                            {item.collegeName}
                                                        </p>
                                                    </li>
                                                } else {
                                                    res = <div
                                                        key={index}>
                                                        <li
                                                            onClick={(e) => handleElementClick('leftSide', 'dataStyle', idx, -1, -1, e)}
                                                            style={value.dataStyle}
                                                            className={`py-[2px] text-white font-semibold text-sm rounded-sm w-max ${isSelected('leftSide', idx, 'dataStyle', -1, -1) ? 'border-2 p-1 border-yellow-500' : ''}`}>
                                                            {item}
                                                        </li>

                                                    </div>
                                                }
                                                return res
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        })
                    }
                </div >

                <div
                    onClick={(e) => handleElementClick('rightBg', '', -1, -1, -1, e)}
                    style={{
                        backgroundColor: dataObj.rightBg,
                    }}
                    className={`bg-[#cacaca] p-4 flex flex-col gap-5 ${isSelected('rightBg', -1, '', -1, -1) ? 'border-2 p-1 border-yellow-500' : ''}`}
                >
                    <div>
                        <div
                            onClick={(e) => handleElementClick('firstName', 'color', -2, -1, -1, e)}
                            style={dataObj.firstName.color}
                            className={`flex gap-2 ${isSelected('firstName', -2, 'color', -1, -1) ? 'border-2 p-1 border-yellow-500' : ''}`}>
                            <h1 className='text-2xl font-normal'>{dataObj.firstName.name}</h1>
                            <h1 className='text-2xl font-normal'>{dataObj.lastName}</h1>
                        </div>
                        <p
                            onClick={(e) => handleElementClick('profession', 'color', -2, -1, -1, e)}
                            style={dataObj.profession.color}
                            className={`text-[#448f97] ${isSelected('profession', -2, 'color', -1, -1) ? 'border-2 p-1 border-yellow-500' : ''}`}
                        >{dataObj.profession.name}</p>
                    </div>
                    <p
                        onClick={(e) => handleElementClick('objective', 'color', -2, -1, -1, e)}
                        style={dataObj.objective.color}
                        className={`text-xs ${isSelected('objective', -2, 'color', -1, -1) ? 'border-2 p-1 border-yellow-500' : ''}`}
                    >{dataObj.objective.name}</p>

                    <div onClick={(e) => handleElementClick('contactInfo', 'color', -2, -1, -1, e)}
                        style={dataObj.contactInfo.color}
                        className={`rounded-md grid grid-cols-[1fr_1fr] justify-around items-center p-3 ${isSelected('contactInfo', -2, 'color', -1, -1) ? 'border-2 p-1 border-yellow-500' : ''}`}

                    >
                        <div className='flex flex-col gap-2'>
                            <div className='flex gap-2 items-center'>
                                <MdEmail />
                                <p className='text-xs'>{dataObj.contactInfo.email}</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <IoLocation />
                                <p className='text-xs'>{dataObj.contactInfo.location}</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <div className='flex gap-2 items-center'>
                                <FaMobileAlt />
                                <p className='text-xs'>{dataObj.contactInfo.phone}</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <IoLogoLinkedin />
                                <p className='text-xs'>{dataObj.contactInfo.linkedin}</p>
                            </div>
                        </div>
                    </div>

                    <div
                        className='flex flex-col gap-2'>
                        <div div className='flex gap-2 items-center' >
                            <div
                                style={{ backgroundColor: dataObj.work.color.color }}
                                className='bg-[#333a4d] p-1 rounded-full w-6 h-6 flex justify-center items-center'>
                                <MdOutlineWorkOutline color={dataObj.rightBg} />
                            </div>
                            <h1
                                onClick={(e) => handleElementClick('work', 'color', -2, -1, -1, e)}
                                style={dataObj.work.color}
                                className={`text-[#333a4d] font-semibold text-lg ${isSelected('work', -2, 'color', -1, -1) ? 'border-2 p-1 border-yellow-500' : ''}`}
                            >{dataObj.work.title}
                            </h1>
                        </div>
                        {
                            dataObj.work.experience.map((item, idx) => {
                                return <ul key={idx} className='px-6 flex flex-col gap-2'>
                                    <li className='mb-1'>
                                        <p
                                            onClick={(e) => handleElementClick('work', 'experience', idx, 'workTitleStyle', 3, e)}
                                            style={item.workTitleStyle}
                                            className={`text-black text-base font-semibold' ${isSelected('work', idx, 'experience', 'workTitleStyle', 3) ? 'border-2 p-1 border-yellow-500' : ''}`}
                                        >{item.workTitle}</p>
                                        <p
                                            onClick={(e) => handleElementClick('work', 'experience', idx, 'companyStyle', 3, e)}
                                            style={item.companyStyle}
                                            className={`text-black text-sm' ${isSelected('work', idx, 'experience', 'companyStyle', 3) ? 'border-2 p-1 border-yellow-500' : ''}`}
                                        >{item.company}</p>
                                        <div
                                            onClick={(e) => handleElementClick('work', 'experience', idx, 'startAndEndYearStyle', 3, e)}
                                            style={item.startAndEndYearStyle}
                                            className={`text-xs text-[#448f97] italic flex flex-col pt-1 gap-1' ${isSelected('work', idx, 'experience', 'startAndEndYearStyle', 3) ? 'border-2 p-1 border-yellow-500' : ''}`}
                                        >
                                            <div className='flex justify-between items-center'>
                                                <p>{item.startAndEndYear}</p>
                                                <p>{item.workPlace}</p>
                                            </div>
                                            <p>Achievements</p>
                                        </div>
                                        <ul
                                            onClick={(e) => handleElementClick('work', 'experience', idx, 'dataStyle', 3, e)}
                                            style={item.dataStyle}
                                            className={`text-sm text-black list-disc marker:text-[#448f97]' ${isSelected('work', idx, 'experience', 'dataStyle', 3) ? 'border-2 p-1 border-yellow-500' : ''}`}
                                        >
                                            {
                                                item.data.map((value, index) => {
                                                    return <li key={index} className=''>{value}</li>
                                                })
                                            }
                                        </ul>
                                    </li>
                                </ul>
                            })
                        }
                    </div>

                    <div
                        className='flex flex-col gap-2'>
                        <div div className='flex gap-2 items-center' >
                            <div
                                style={{ backgroundColor: dataObj.courses.color.color }}
                                className='bg-[#333a4d] p-1 rounded-full w-6 h-6 flex justify-center items-center'>
                                <RiWirelessChargingFill color='#fff' />
                            </div>
                            <h1
                                onClick={(e) => handleElementClick('courses', 'color', -2, -1, -1, e)}
                                style={dataObj.courses.color}
                                className={`text-[#333a4d] font-semibold text-lg ${isSelected('courses', -2, 'color', -1, -1) ? 'border-2 p-1 border-yellow-500' : ''}`}
                            >{dataObj.courses.title}
                            </h1>
                        </div>
                        <ul className='px-6 flex flex-col gap-2'>
                            {
                                dataObj.courses.data.map((item, idx) => {
                                    return <li key={idx}>
                                        <p
                                            onClick={(e) => handleElementClick('courses', 'dataStyle', -2, -1, -1, e)}
                                            style={dataObj.courses.dataStyle}
                                            className={`text-black text-sm font-normal ${isSelected('courses', -2, 'dataStyle', -1, -1) ? 'border-2 p-1 border-yellow-500' : ''}`}
                                        >{item.name}</p>
                                        <p
                                            onClick={(e) => handleElementClick('courses', 'dataStyle2', -2, -1, -1, e)}
                                            style={dataObj.courses.dataStyle2}
                                            className={`text-gray-600 text-xs font-normal ${isSelected('courses', -2, 'dataStyle2', -1, -1) ? 'border-2 p-1 border-yellow-500' : ''}`}
                                        >{item.src}</p>
                                    </li>
                                })
                            }
                        </ul>
                    </div>

                </div>
            </div >
        </div >
    )
}

export default Cv