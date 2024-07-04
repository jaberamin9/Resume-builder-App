'use client'
import Main from "@/components/Main";
import Header from "@/components/header";
import Stack from '@/utils/stack';
import { useEffect, useState } from "react";

export default function Home() {
  const [undoStack] = useState(new Stack());
  const [redoStack] = useState(new Stack());
  const [dataObj, setDataObj] = useState(() => {
    const savedData = localStorage.getItem('dataObj');
    return savedData ? JSON.parse(savedData) : {
      profile: '',
      firstName: {
        name: 'Jaber',
        color: {
          backgroundColor: '#ffffff',
          color: "#000000",
          fontWeight: "400",
          lineHeight: "32px",
          fontSize: "24px"
        }
      },
      lastName: "Amin",
      profession: {
        name: "Android & Web Developer",
        color: {
          backgroundColor: "#ffffff",
          color: "#448f97",
          fontWeight: "400",
          lineHeight: "16px"
        }
      },
      objective: {
        name: "Accomplished, growth-focused professional with 8+ years of dynamic sales experience across multiple industries. Equipped a steadfast commitment to customer service excellence to enhance customer experience, maximize satisfaction, propel retention, achieve/exceed sales goals, and increase business revenue. Possess superb abilities to develop and maintain a high level of product knowledge to persuasively promote them to existing and potential customers.",
        color: {
          backgroundColor: "#ffffff",
          color: "#000000",
          fontWeight: "400",
          lineHeight: "16px",
          fontSize: "12px",
          fontFamily: "Roboto"
        }
      },
      contactInfo: {
        email: "jaberamin9@gmail.com",
        location: "Cumilla, Chauddagram",
        phone: "+8801828628864",
        linkedin: "linkedin.com/jaberamin9",
        color: {
          backgroundColor: "#333a4d",
          color: "#ffffff",
          fontWeight: "400",
          lineHeight: "16px",
          fontSize: "12px",
          fontFamily: "Roboto"
        }
      },
      leftBg: "#333a4d",
      rightBg: "#ffffff",
      leftSide: [
        {
          title: "SKILLS",
          type: 1,
          titleStyle: {
            color: "#ffffff",
            fontWeight: "bold",
            lineHeight: "10px",
            fontFamily: "SourceSansPro"
          },
          dataStyle: {
            backgroundColor: "#acb1b7",
            color: "#000000",
            fontWeight: "semibold",
            lineHeight: "10px",
            fontFamily: "SourceSansPro"
          },
          data: [
            "Android",
            "Web",
            "NextJs",
            "React",
            "Kotlin",
            "Java",
            "JS",
            "PHP"
          ]
        },
        {
          title: "EDUCATION",
          type: 2,
          titleStyle: {
            color: "#ffffff",
            fontWeight: "semibold",
            lineHeight: "10px",
            fontFamily: "SourceSansPro"
          },
          dataStyle: {
            color: "#ffffff",
            fontWeight: "500",
            lineHeight: "20px",
            fontSize: "14px"
          },
          dataStyle2: {
            color: "#ffffff",
            fontWeight: "100",
            fontSize: "12px"
          },
          data: [
            {
              subject: "M.sc in CSE",
              collegeName: "King Abdulaziz University"
            },
            {
              subject: "B.sc in CSE",
              collegeName: "IIUC"
            }
          ]
        },
        {
          title: "LANGUAGES",
          type: 3,
          titleStyle: {
            color: "#ffffff",
            fontWeight: "semibold",
            lineHeight: "10px",
            fontFamily: "SourceSansPro"
          },
          dataStyle: {
            color: "#ffffff",
            fontWeight: "400",
            lineHeight: "10px",
            fontSize: "12px",
          },
          dataStyle2: {
            color: "#ffffff",
            fontWeight: "100",
            fontSize: "12px",
            fontStyle: "italic",
          },
          data: [
            {
              subject: "Englisg",
              collegeName: "Native or Bilingual Proficiency"
            },
            {
              subject: "Bangla",
              collegeName: "Native or Bilingual Proficiency"
            },
            {
              subject: "Spanish",
              collegeName: "Professional Working Proficiency"
            }
          ]
        },
        {
          title: "INTERESTS",
          type: 4,
          titleStyle: {
            color: "#ffffff",
            fontWeight: "semibold",
            lineHeight: "10px",
            fontFamily: "SourceSansPro"
          },
          dataStyle: {
            color: "#ffffff",
            fontWeight: "400",
            lineHeight: "10px",
            fontSize: "12px"
          },
          data: [
            "Blockchain Technologies",
            "Sailing",
            "Web 3.0",
            "Sustainability"
          ]
        }
      ],
      work: {
        title: "WORK EXPERIENCE",
        color: {
          backgroundColor: "#ffffff",
          color: "#333a4d",
          fontWeight: "600",
          lineHeight: "28px",
          fontSize: "18px"
        },
        experience: [
          {
            workTitle: "Sales Associate",
            company: "ShoPerfect Deluxe Mal",
            startAndEndYear: "11/2018 - Present",
            workPlace: "Montgomery, AL",
            workTitleStyle: {
              backgroundColor: "#ffffff",
              color: "#000000",
              fontWeight: "600",
              lineHeight: "24px",
              fontSize: "16px"
            },
            companyStyle: {
              backgroundColor: "#ffffff",
              color: "#000000",
              fontWeight: "400",
              lineHeight: "20px",
              fontSize: "14px"
            },
            startAndEndYearStyle: {
              backgroundColor: "#ffffff",
              color: "#448f97",
              fontWeight: "semibold",
              lineHeight: "16px",
              fontSize: "12px"
            },
            dataStyle: {
              backgroundColor: "#ffffff",
              color: "#000000",
              fontWeight: "400",
              lineHeight: "20px",
              fontSize: "14px"
            },
            data: [
              "Formulate and execute compelling seasonal sales promotions, resulting in over 30% increase in-store sales for five consecutive months in the year 2019 & 2023",
              "Work collaboratively with a team of 8 other sales associates to devise strategic sales solutions to achieve and exceed the department's monthly, quarterly, and yearly sales goals.",
              "Preserve up-to-date knowledge and information about the latest products or upcoming releases to effectively assist customers with various product-related concerns by providing accurate details.",
              "Proactively interact with customers to recommend products that best suit their tastes, interests, and needs, achieving a more than 98% in customer satisfaction rate."
            ]
          },
          {
            workTitle: "Retail Sales Associate",
            company: "Storefront Sports Solutions",
            startAndEndYear: "01/2015-10/2018",
            workPlace: "Auburn, AL",
            data: [
              "Devised and implemented an effective sales process, leading to consistently achieving the established sales goals and surpassing the monthly sales target by 12%.",
              "Conceptualized and enforced a customer loyalty program that prompted both existing and new customers to purchase twice as much merchandise, resulting in a 50% increase in the department's sales.",
              "Performed strategic upselling and cross-selling of women's apparel and other sports products based on customer's tastes and interests, which exceeded the yearly sales quotas by more than 10%."
            ],
            workTitleStyle: {
              backgroundColor: "#ffffff",
              color: "#000000",
              fontWeight: "600",
              lineHeight: "24px",
              fontSize: "16px"
            },
            companyStyle: {
              backgroundColor: "#ffffff",
              color: "#000000",
              fontWeight: "400",
              lineHeight: "20px",
              fontSize: "14px"
            },
            startAndEndYearStyle: {
              backgroundColor: "#ffffff",
              color: "#448f97",
              fontWeight: "semibold",
              lineHeight: "16px",
              fontSize: "12px"
            },
            dataStyle: {
              backgroundColor: "#ffffff",
              color: "#000000",
              fontWeight: "400",
              lineHeight: "20px",
              fontSize: "14px"
            }
          }
        ]
      },
      courses: {
        title: "CONFERENCES & COURSES",
        color: {
          backgroundColor: "#ffffff",
          color: "#333a4d",
          fontWeight: "600",
          lineHeight: "28px",
          fontSize: "18px"
        },
        dataStyle: {
          backgroundColor: "#ffffff",
          color: "#000000",
          fontWeight: "400",
          lineHeight: "20px",
          fontSize: "14px"
        },
        dataStyle2: {
          backgroundColor: "#ffffff",
          color: "#4b5563",
          fontWeight: "400",
          lineHeight: "16px",
          fontSize: "12px"
        },
        data: [
          {
            name: "Sales Training: Practical Sales Techniques",
            src: "Online Course- udemy.com"
          },
          {
            name: "Sales Training for High Performing Team Specialization",
            src: "Online Course-coursera.org"
          },
          {
            name: "Practical Sales Management Training",
            src: "ShaPerfect Deluxe Mall"
          }
        ]
      },
    }
  });

  useEffect(() => {
    localStorage.setItem('dataObj', JSON.stringify(dataObj));
  }, [dataObj]);


  const handleUndo = () => {
    if (undoStack.getStack().length > 0) {
      redoStack.push(dataObj);
      const previousState = undoStack.pop();
      setDataObj(previousState);
    }
  };

  const handleRedo = () => {
    if (redoStack.getStack().length > 0) {
      undoStack.push(dataObj);
      const nextState = redoStack.pop();
      setDataObj(nextState);
    }
  };

  return (
    <main className="w-screen h-screen bg-[#efefef] grid grid-rows-[70px_1fr]">
      <Header handleUndo={handleUndo} handleRedo={handleRedo}></Header>
      <Main dataObj={dataObj} setDataObj={setDataObj} undoStack={undoStack} redoStack={redoStack}></Main>
    </main>
  );
}
