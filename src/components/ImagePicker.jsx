import { CgProfile } from "react-icons/cg";
import { useRef } from "react";

export default function ImagePicker({ dataObj, setDataObj }) {
    const fileInputRef = useRef(null);


    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setDataObj((old) => ({
                    ...old,
                    profile: reader.result,
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <button className="w-full h-[117px]" onClick={handleButtonClick}>
            <div className="bg-[#d9d9d9] border-gray-300 border overflow-hidden w-full h-full rounded-lg flex items-center justify-center">
                <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    accept="image/*"
                    onChange={handleFileChange}
                />
                {dataObj.profile ? (
                    <img src={dataObj.profile} alt="Selected" className="w-full h-full object-cover" />
                ) : (
                    <CgProfile color="#aaaaaa" className=" w-9 h-9" />
                )}
            </div>
        </button>
    )
}

function UploadIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" x2="12" y1="3" y2="15" />
        </svg>
    )
}