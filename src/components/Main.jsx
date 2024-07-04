'use client'
import React from 'react'
import { useState } from "react";
import { IoMdMore, IoIosRemove } from "react-icons/io";
import ImagePicker from './ImagePicker';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import Toolbar from './Toolbar';
import Cv from './Cv';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Textarea } from "@/components/ui/textarea"
import { generatePDF } from '@/utils/pdfUtils';
import { RxCross2 } from "react-icons/rx";
import { IoIosAdd } from "react-icons/io";


function Main({ dataObj, setDataObj, undoStack, redoStack }) {

    const [zoomLevel, setZoomLevel] = useState(1);

    const handleZoomIn = () => {
        setZoomLevel(prevZoomLevel => Math.min(prevZoomLevel + 0.1, 2));
    };

    const handleZoomOut = () => {
        setZoomLevel(prevZoomLevel => Math.max(prevZoomLevel - 0.1, 0.5));
    };


    const [selectedElement, setSelectedElement] = useState(null);

    const updateStyle = (section, idx, element, element2, type, styleType, newValue) => {
        setDataObj((prevDataObj) => {
            const newDataObj = { ...prevDataObj };

            if (element === '') {
                newDataObj[section] = newValue.backgroundColor;
            } else if (idx === -2) {
                newDataObj[section] = {
                    ...newDataObj[section]
                };
                newDataObj[section] = {
                    ...newDataObj[section],
                    [element]: {
                        ...newDataObj[section][element],
                        ...newValue
                    }
                };
            } else if (type === 3) {
                newDataObj[section] = {
                    ...newDataObj[section]
                };
                newDataObj[section][element][idx] = {
                    ...newDataObj[section][element][idx],
                    [element2]: {
                        ...newDataObj[section][element][idx][element2],
                        ...newValue
                    }
                };
            } else {
                newDataObj[section] = [
                    ...newDataObj[section]
                ];

                newDataObj[section][idx] = {
                    ...newDataObj[section][idx],
                    [element]: {
                        ...newDataObj[section][idx][element],
                        ...newValue
                    }
                };
            }

            return newDataObj;
        });
    };

    return (

        <div className='pl-20 pr-20 pt-3 pb-3 grid grid-cols-[1fr_1.5fr] h-full gap-4 overflow-auto'>
            <ScrollArea className="bg-white rounded-md p-10 h-full border">
                <Accordion type="single" collapsible defaultValue="item-1">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className=' no-underline text-[18px] font-semibold mb-4'>Personal Information</AccordionTrigger>
                        <AccordionContent>
                            <div className='flex flex-col gap-4 p-2'>
                                <div className='grid grid-cols-[1fr_2fr] gap-4'>
                                    <div className='flex flex-col gap-1'>
                                        <div className='flex justify-between items-center'>
                                            <p className='text-[#7D7D7D] font-semibold text-[14px]'>Photo</p>
                                            <IoMdMore color='#7D7D7D' />
                                        </div>
                                        <ImagePicker dataObj={dataObj} setDataObj={setDataObj}></ImagePicker>
                                    </div>
                                    <div className='w-full flex flex-col gap-2'>
                                        <div className="grid w-full items-center gap-1.5">
                                            <Label className='text-[#7D7D7D] font-semibold text-[14px]' >First Name</Label>
                                            <Input
                                                value={dataObj.firstName.name}
                                                onChange={(e) => {
                                                    undoStack.push(dataObj);
                                                    redoStack.clear();
                                                    setDataObj(prevState => ({
                                                        ...prevState,
                                                        firstName: {
                                                            ...prevState.firstName,
                                                            name: e.target.value
                                                        }
                                                    }))
                                                }}
                                                type="text" id="first-name" placeholder="Example: 10000" />
                                        </div>
                                        <div className="grid w-full items-center gap-1.5">
                                            <Label className='text-[#7D7D7D] font-semibold text-[14px]' >Last Name</Label>
                                            <Input
                                                value={dataObj.lastName}
                                                onChange={(e) => {
                                                    undoStack.push(dataObj);
                                                    redoStack.clear();
                                                    setDataObj(prevState => ({
                                                        ...prevState,
                                                        lastName: e.target.value
                                                    }))
                                                }}
                                                type="text" id="last-name" placeholder="Example: 10000" />
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full flex flex-col gap-2'>
                                    <div className="grid w-full items-center gap-1.5">
                                        <Label className='text-[#7D7D7D] font-semibold text-[14px]'>Email Address</Label>
                                        <Input
                                            value={dataObj.contactInfo.email}
                                            onChange={(e) => {
                                                undoStack.push(dataObj);
                                                redoStack.clear();
                                                setDataObj(prevState => ({
                                                    ...prevState,
                                                    contactInfo: {
                                                        ...prevState.contactInfo,
                                                        email: e.target.value
                                                    }
                                                }))
                                            }}
                                            type="email" id="email" placeholder="Example: 10000" />
                                    </div>
                                    <div className="grid w-full items-center gap-1.5">
                                        <Label className='text-[#7D7D7D] font-semibold text-[14px]' >Profession</Label>
                                        <Input
                                            value={dataObj.profession.name}
                                            onChange={(e) => {
                                                undoStack.push(dataObj);
                                                redoStack.clear();
                                                setDataObj(prevState => ({
                                                    ...prevState,
                                                    profession: {
                                                        ...prevState.profession,
                                                        name: e.target.value
                                                    }
                                                }))
                                            }} type="text" id="profession" placeholder="Example: 10000" />
                                    </div>
                                    <div className="grid w-full items-center gap-1.5">
                                        <Label className='text-[#7D7D7D] font-semibold text-[14px]' >Phone Number</Label>
                                        <Input
                                            value={dataObj.contactInfo.phone}
                                            onChange={(e) => {
                                                undoStack.push(dataObj);
                                                redoStack.clear();
                                                setDataObj(prevState => ({
                                                    ...prevState,
                                                    contactInfo: {
                                                        ...prevState.contactInfo,
                                                        phone: e.target.value
                                                    }
                                                }))
                                            }}
                                            type="text" id="number" placeholder="Example: 10000" />
                                    </div>
                                    <div className="grid w-full items-center gap-1.5">
                                        <Label className='text-[#7D7D7D] font-semibold text-[14px]' >Address</Label>
                                        <Input
                                            value={dataObj.contactInfo.location}
                                            onChange={(e) => {
                                                undoStack.push(dataObj);
                                                redoStack.clear();
                                                setDataObj(prevState => ({
                                                    ...prevState,
                                                    contactInfo: {
                                                        ...prevState.contactInfo,
                                                        location: e.target.value
                                                    }
                                                }))
                                            }}
                                            type="text" id="address" placeholder="Example: 10000" />
                                    </div>
                                    <div className="grid w-full items-center gap-1.5">
                                        <Label className='text-[#7D7D7D] font-semibold text-[14px]' >Linkedin</Label>
                                        <Input
                                            value={dataObj.contactInfo.linkedin}
                                            onChange={(e) => {
                                                undoStack.push(dataObj);
                                                redoStack.clear();
                                                setDataObj(prevState => ({
                                                    ...prevState,
                                                    contactInfo: {
                                                        ...prevState.contactInfo,
                                                        linkedin: e.target.value
                                                    }
                                                }))
                                            }}
                                            type="text" id="portfolio" placeholder="Example: 10000" />
                                    </div>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger className=' no-underline text-[18px] font-semibold mb-4'>Objective</AccordionTrigger>
                        <AccordionContent>
                            <Textarea
                                value={dataObj.objective.name}
                                onChange={(e) => {
                                    undoStack.push(dataObj);
                                    redoStack.clear();
                                    setDataObj(prevState => ({
                                        ...prevState,
                                        objective: {
                                            ...prevState.objective,
                                            name: e.target.value
                                        }
                                    }))
                                }}
                                className='h-[200px]'
                                placeholder="Type your objective here." />
                        </AccordionContent>
                    </AccordionItem>

                    {dataObj.leftSide.map((val, index) => {
                        if (index === 1 || index === 2) return ''
                        return <AccordionItem key={index} value={'item-' + (index + 3)}>
                            <AccordionTrigger className=' no-underline text-[18px] font-semibold mb-4'>{val.title.charAt(0) + val.title.slice(1).toLowerCase()}</AccordionTrigger>
                            <AccordionContent>
                                <div className='grid grid-cols-5 gap-2 p-1'>
                                    {dataObj.leftSide[index].data.map((item, idx) => {
                                        return <div key={idx} className='relative flex mt-2 h-10 rounded-md w-[80px] bg-gray-300'>
                                            <div
                                                onClick={() => {
                                                    setDataObj(prevState => {
                                                        undoStack.push(dataObj);
                                                        redoStack.clear();
                                                        const updatedLeftSide = [...prevState.leftSide];
                                                        const updatedData = updatedLeftSide[index].data.filter((_, i) => i !== idx);
                                                        updatedLeftSide[index] = { ...updatedLeftSide[index], data: updatedData };
                                                        return {
                                                            ...prevState,
                                                            leftSide: updatedLeftSide
                                                        };
                                                    });
                                                }}
                                                className='absolute top-[-5px] right-[-5px] cursor-pointer flex justify-center items-center w-5 h-5 text-center rounded-full p-1 bg-red-400'>
                                                <RxCross2 color='#fff' />
                                            </div>
                                            <Input
                                                value={item}
                                                onChange={(e) => {
                                                    const value = e.target.value
                                                    setDataObj(prevState => {
                                                        const updatedLeftSide = [...prevState.leftSide];
                                                        updatedLeftSide[index].data[idx] = value;
                                                        return {
                                                            ...prevState,
                                                            leftSide: updatedLeftSide
                                                        };
                                                    });
                                                }}
                                                className='focus-visible:ring-1 focus-visible:ring-offset-0' type="text" />
                                        </div>
                                    })}
                                    <div onClick={() => {
                                        setDataObj(prevState => {
                                            undoStack.push(dataObj);
                                            redoStack.clear();
                                            const updatedLeftSide = [...prevState.leftSide];
                                            updatedLeftSide[index] = {
                                                ...updatedLeftSide[index],
                                                data: [...updatedLeftSide[index].data, '']
                                            };
                                            return {
                                                ...prevState,
                                                leftSide: updatedLeftSide
                                            };
                                        });
                                    }} className='cursor-pointer hover:bg-gray-300 relative mt-2 h-10 rounded-md w-[40px] bg-gray-200 flex justify-center items-center'>
                                        <IoIosAdd size={'28px'} />
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    })}

                    {dataObj.leftSide.map((val, index) => {
                        if (index === 0 || index === 3) return ''
                        return <AccordionItem key={index} value={'item-' + (index + 6)}>
                            <AccordionTrigger className=' no-underline text-[18px] font-semibold mb-4'>{val.title.charAt(0) + val.title.slice(1).toLowerCase()}</AccordionTrigger>
                            <AccordionContent>
                                <div className='flex flex-col gap-2 p-2'>
                                    {dataObj.leftSide[index].data.map((item, idx) => {
                                        return <div key={idx} className='relative flex flex-col gap-2 mt-2 p-2 rounded-md border-dashed border-2 border-gray-400'>
                                            <div
                                                onClick={() => {
                                                    setDataObj(prevState => {
                                                        undoStack.push(dataObj);
                                                        redoStack.clear();
                                                        const updatedLeftSide = [...prevState.leftSide];
                                                        const updatedData = updatedLeftSide[index].data.filter((_, i) => i !== idx);
                                                        updatedLeftSide[index] = { ...updatedLeftSide[index], data: updatedData };
                                                        return {
                                                            ...prevState,
                                                            leftSide: updatedLeftSide
                                                        };
                                                    });
                                                }}
                                                className='absolute top-[-5px] right-[-5px] cursor-pointer flex justify-center items-center w-5 h-5 text-center rounded-full p-1 bg-red-400'>
                                                <RxCross2 color='#fff' />
                                            </div>
                                            <div className="grid w-full items-center gap-1.5">
                                                <Label className='text-[#7D7D7D] font-normal text-[14px]' >{index == 2 ? 'Language' : 'Subject'}</Label>
                                                <Input
                                                    value={item.subject}
                                                    onChange={(e) => {
                                                        const value = e.target.value;
                                                        setDataObj(prevState => {
                                                            const updatedLeftSide = [...prevState.leftSide];
                                                            updatedLeftSide[index].data[idx].subject = value;
                                                            return {
                                                                ...prevState,
                                                                leftSide: updatedLeftSide
                                                            };
                                                        });
                                                    }}
                                                    className='focus-visible:ring-1 focus-visible:ring-offset-0' type="text" />
                                            </div>

                                            <div className="grid w-full items-center gap-1.5">
                                                <Label className='text-[#7D7D7D] font-normal text-[14px]' >{index == 2 ? 'Proficiency' : 'University'}</Label>
                                                <Input
                                                    value={item.collegeName}
                                                    onChange={(e) => {
                                                        const value = e.target.value;
                                                        setDataObj(prevState => {
                                                            const updatedLeftSide = [...prevState.leftSide];
                                                            updatedLeftSide[index].data[idx].collegeName = value;
                                                            return {
                                                                ...prevState,
                                                                leftSide: updatedLeftSide
                                                            };
                                                        });
                                                    }}
                                                    className='focus-visible:ring-1 focus-visible:ring-offset-0' type="text" />
                                            </div>
                                        </div>
                                    })}
                                    <div onClick={() => {
                                        setDataObj(prevState => {
                                            undoStack.push(dataObj);
                                            redoStack.clear();
                                            const updatedLeftSide = [...prevState.leftSide];
                                            updatedLeftSide[index] = {
                                                ...updatedLeftSide[index],
                                                data: [...updatedLeftSide[index].data, { subject: '', collegeName: '' }]
                                            };
                                            return {
                                                ...prevState,
                                                leftSide: updatedLeftSide
                                            };
                                        });
                                    }} className='cursor-pointer hover:bg-gray-300 relative mt-2 h-10 rounded-md w-full bg-gray-200 flex justify-center items-center'>
                                        <IoIosAdd size={'28px'} />
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    })}

                    <AccordionItem value='item-10'>
                        <AccordionTrigger className=' no-underline text-[18px] font-semibold mb-4'>{dataObj.courses.title.charAt(0) + dataObj.courses.title.slice(1).toLowerCase()}</AccordionTrigger>
                        <AccordionContent>
                            <div className='flex flex-col gap-2 p-2'>
                                {dataObj.courses.data.map((item, idx) => {
                                    return <div key={idx} className='relative flex flex-col gap-2 mt-2 p-2 rounded-md border-dashed border-2 border-gray-400'>
                                        <div
                                            onClick={() => {
                                                setDataObj(prevState => {
                                                    undoStack.push(dataObj);
                                                    redoStack.clear();
                                                    const updatedCourses = {
                                                        ...prevState.courses,
                                                        data: prevState.courses.data.filter((_, index) => index !== idx)
                                                    };
                                                    return {
                                                        ...prevState,
                                                        courses: updatedCourses
                                                    };
                                                });
                                            }}
                                            className='absolute top-[-5px] right-[-5px] cursor-pointer flex justify-center items-center w-5 h-5 text-center rounded-full p-1 bg-red-400'>
                                            <RxCross2 color='#fff' />
                                        </div>
                                        <div className="grid w-full items-center gap-1.5">
                                            <Label className='text-[#7D7D7D] font-normal text-[14px]' >Name</Label>
                                            <Input
                                                value={item.name}
                                                onChange={(e) => {
                                                    const value = e.target.value;
                                                    setDataObj(prevState => {
                                                        const updatedData = [...prevState.courses.data];
                                                        updatedData[idx].name = value;
                                                        return {
                                                            ...prevState,
                                                            data: updatedData
                                                        };
                                                    });
                                                }}
                                                className='focus-visible:ring-1 focus-visible:ring-offset-0' type="text" />
                                        </div>

                                        <div className="grid w-full items-center gap-1.5">
                                            <Label className='text-[#7D7D7D] font-normal text-[14px]' >Source</Label>
                                            <Input
                                                value={item.src}
                                                onChange={(e) => {
                                                    const value = e.target.value;
                                                    setDataObj(prevState => {
                                                        const updatedData = [...prevState.courses.data];
                                                        updatedData[idx].src = value;
                                                        return {
                                                            ...prevState,
                                                            data: updatedData
                                                        };
                                                    });
                                                }}
                                                className='focus-visible:ring-1 focus-visible:ring-offset-0' type="text" />
                                        </div>
                                    </div>
                                })}
                                <div onClick={() => {
                                    undoStack.push(dataObj);
                                    redoStack.clear();
                                    setDataObj(prevState => {
                                        const updatedCoursesData = [...prevState.courses.data];
                                        updatedCoursesData.push({ name: '', src: '' });
                                        return {
                                            ...prevState,
                                            courses: {
                                                ...prevState.courses,
                                                data: updatedCoursesData
                                            }
                                        };
                                    });
                                }} className='cursor-pointer hover:bg-gray-300 relative mt-2 h-10 rounded-md w-full bg-gray-200 flex justify-center items-center'>
                                    <IoIosAdd size={'28px'} />
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value='item-11'>
                        <AccordionTrigger className=' no-underline text-[18px] font-semibold mb-4'>{dataObj.work.title.charAt(0) + dataObj.work.title.slice(1).toLowerCase()}</AccordionTrigger>
                        <AccordionContent>
                            <div className='flex flex-col gap-2 p-2'>
                                {dataObj.work.experience.map((val, idx) => {
                                    return <div key={idx} className='relative flex flex-col gap-2 mt-2 p-2 rounded-md border-dashed border-2 border-gray-400'>
                                        <div onClick={() => {
                                            undoStack.push(dataObj);
                                            redoStack.clear();
                                            const updatedExperience = dataObj.work.experience.filter((_, i) => i !== idx);
                                            setDataObj({
                                                ...dataObj,
                                                work: {
                                                    ...dataObj.work,
                                                    experience: updatedExperience
                                                }
                                            });
                                        }} className='absolute top-[-5px] right-[-5px] cursor-pointer flex justify-center items-center w-5 h-5 text-center rounded-full p-1 bg-red-400'>
                                            <RxCross2 color='#fff' />
                                        </div>
                                        <div className='flex gap-2'>
                                            <div className="grid w-full items-center gap-1.5">
                                                <Label className='text-[#7D7D7D] font-normal text-[14px]' >Work Title</Label>
                                                <Input
                                                    value={val.workTitle}
                                                    onChange={(e) => {
                                                        const updatedExperience = [...dataObj.work.experience];
                                                        updatedExperience[idx].workTitle = e.target.value;
                                                        setDataObj({
                                                            ...dataObj,
                                                            work: {
                                                                ...dataObj.work,
                                                                experience: updatedExperience
                                                            }
                                                        });
                                                    }}
                                                    className='focus-visible:ring-1 focus-visible:ring-offset-0' type="text" />
                                            </div>

                                            <div className="grid w-full items-center gap-1.5">
                                                <Label className='text-[#7D7D7D] font-normal text-[14px]' >Company</Label>
                                                <Input
                                                    value={val.company}
                                                    onChange={(e) => {
                                                        const updatedExperience = [...dataObj.work.experience];
                                                        updatedExperience[idx].company = e.target.value;
                                                        setDataObj({
                                                            ...dataObj,
                                                            work: {
                                                                ...dataObj.work,
                                                                experience: updatedExperience
                                                            }
                                                        });
                                                    }}
                                                    className='focus-visible:ring-1 focus-visible:ring-offset-0' type="text" />
                                            </div>
                                        </div>
                                        <div className='flex gap-2'>
                                            <div className="grid w-full items-center gap-1.5">
                                                <Label className='text-[#7D7D7D] font-normal text-[14px]' >Start & End Year</Label>
                                                <Input
                                                    value={val.startAndEndYear}
                                                    onChange={(e) => {
                                                        const updatedExperience = [...dataObj.work.experience];
                                                        updatedExperience[idx].startAndEndYear = e.target.value;
                                                        setDataObj({
                                                            ...dataObj,
                                                            work: {
                                                                ...dataObj.work,
                                                                experience: updatedExperience
                                                            }
                                                        });
                                                    }}
                                                    className='focus-visible:ring-1 focus-visible:ring-offset-0' type="text" />
                                            </div>

                                            <div className="grid w-full items-center gap-1.5">
                                                <Label className='text-[#7D7D7D] font-normal text-[14px]' >Work Place</Label>
                                                <Input
                                                    value={val.workPlace}
                                                    onChange={(e) => {
                                                        const updatedExperience = [...dataObj.work.experience];
                                                        updatedExperience[idx].workPlace = e.target.value;
                                                        setDataObj({
                                                            ...dataObj,
                                                            work: {
                                                                ...dataObj.work,
                                                                experience: updatedExperience
                                                            }
                                                        });
                                                    }}
                                                    className='focus-visible:ring-1 focus-visible:ring-offset-0' type="text" />
                                            </div>
                                        </div>

                                        <Label className='text-[#7D7D7D] font-normal text-[14px]' >Achievements</Label>
                                        {val.data.map((item, index) => {
                                            return <div key={index} className='relative flex mt-2 h-10 rounded-md w-full bg-gray-300'>
                                                <div onClick={() => {
                                                    undoStack.push(dataObj);
                                                    redoStack.clear();
                                                    const updatedExperience = [...dataObj.work.experience];
                                                    updatedExperience[idx].data = updatedExperience[idx].data.filter((_, i) => i !== index);
                                                    setDataObj({
                                                        ...dataObj,
                                                        work: {
                                                            ...dataObj.work,
                                                            experience: updatedExperience
                                                        }
                                                    });
                                                }}
                                                    className='absolute top-[-5px] right-[-5px] cursor-pointer flex justify-center items-center w-5 h-5 text-center rounded-full p-1 bg-red-400'>
                                                    <RxCross2 color='#fff' />
                                                </div>
                                                <Input
                                                    value={item}
                                                    onChange={(e) => {
                                                        const updatedExperience = [...dataObj.work.experience];
                                                        updatedExperience[idx].data[index] = e.target.value;
                                                        setDataObj({
                                                            ...dataObj,
                                                            work: {
                                                                ...dataObj.work,
                                                                experience: updatedExperience
                                                            }
                                                        });
                                                    }}
                                                    className='focus-visible:ring-1 focus-visible:ring-offset-0' type="text" />
                                            </div>
                                        })}

                                        <div onClick={() => {
                                            undoStack.push(dataObj);
                                            redoStack.clear();
                                            const updatedExperience = [...dataObj.work.experience];
                                            updatedExperience[idx].data.push('');
                                            setDataObj({
                                                ...dataObj,
                                                work: {
                                                    ...dataObj.work,
                                                    experience: updatedExperience
                                                }
                                            });
                                        }}
                                            className='cursor-pointer hover:bg-gray-300 relative mt-2 h-10 rounded-md w-full bg-gray-200 flex justify-center items-center'>
                                            <IoIosAdd size={'28px'} />
                                        </div>

                                    </div>
                                })}

                                <div onClick={() => {
                                    undoStack.push(dataObj);
                                    redoStack.clear();
                                    const newExperience = {
                                        workTitle: '',
                                        company: '',
                                        startAndEndYear: '',
                                        workPlace: '',
                                        data: ['']
                                    };
                                    setDataObj({
                                        ...dataObj,
                                        work: {
                                            ...dataObj.work,
                                            experience: [...dataObj.work.experience, newExperience]
                                        }
                                    });
                                }} className='cursor-pointer hover:bg-gray-300 relative mt-2 h-10 rounded-md w-full bg-gray-200 flex justify-center items-center'>
                                    <IoIosAdd size={'28px'} />
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                </Accordion>
                <div className='w-full mt-6 text-right'>
                    <button onClick={generatePDF} className='hover:bg-opacity-80 w-[100px] h-[44px] rounded-md p-2 text-white bg-[#5447b6] text-sm'>Download</button>
                </div>
            </ScrollArea>
            <div className='pl-12 pr-12 grid grid-rows-[1fr_70px] gap-4 overflow-auto relative'>
                <ScrollArea className="h-full">
                    <div className='flex justify-center'>
                        <Cv dataObj={dataObj} setSelectedElement={setSelectedElement} selectedElement={selectedElement} zoomLevel={zoomLevel}></Cv>
                    </div>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>
                <div className="mt-4 absolute flex flex-col gap-1 bottom-20 right-10">
                    <button
                        onClick={handleZoomIn}
                        className="bg-[#5447b6] text-white w-10 h-10 p-2 mr-2 rounded hover:bg-[#6b5fc6]"
                    >
                        <IoIosAdd size={'24px'} />
                    </button>
                    <button
                        onClick={handleZoomOut}
                        className="bg-[#5447b6] text-white w-10 h-10 p-2 rounded hover:bg-[#6b5fc6]"
                    >
                        <IoIosRemove size={'24px'} />

                    </button>
                </div>
                <Toolbar selectedElement={selectedElement} updateStyle={updateStyle} undoStack={undoStack} redoStack={redoStack} dataObj={dataObj}></Toolbar>
            </div>
        </div>
    )
}

export default Main

