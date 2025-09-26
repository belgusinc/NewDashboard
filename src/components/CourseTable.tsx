import { ExternalLink } from "lucide-react";

interface Course {
  name: string;
  source: string;
  classification: string;
  deadline: string;
  duration: string;
  link: string;
}

interface CourseSection {
  level: "Beginner" | "Intermediate" | "Advanced";
  color: string;
  bgColor: string;
  courses: Course[];
}

export function CourseTable() {
  const courseSections: CourseSection[] = [
    {
      level: "Beginner",
      color: "text-[#02C8FF]",
      bgColor: "bg-[#02C8FF]/10",
      courses: [
        {
          name: "Finance AI: Fluency & Foundation",
          source: "Cisco",
          classification: "Expected",
          deadline: "End of Nov.",
          duration: "1 hr",
          link: "https://learn.cisco.com/?courseID=COT00349853&version="
        },
        {
          name: "Finance AI: Prompt Engineering",
          source: "Cisco",
          classification: "Expected",
          deadline: "End of Nov.",
          duration: "1 hr",
          link: "http://learn.cisco.com/?courseID=COT00349852&version="
        },
        {
          name: "**Cisco Qualified Internal Courses for GenAI (White Belt)",
          source: "Cisco",
          classification: "Expected",
          deadline: "End of Nov.",
          duration: "4 hrs",
          link: "https://cisco.sharepoint.com/sites/dataeducation/SitePages/Generative-Artificial-Intelligence-@Cisco-White-Belt.aspx"
        },
        {
          name: "*Generative AI for Leaders & Business Professionals",
          source: "Udemy",
          classification: "Expected",
          deadline: "End of Nov.",
          duration: "8 hrs",
          link: "https://cisco.udemy.com/course/generative-ai-for-leaders/"
        },
        {
          name: "*ChatGPT and the New Wave of ML Language Models",
          source: "Udemy",
          classification: "Expected",
          deadline: "End of Nov.",
          duration: "3 hrs",
          link: "https://cisco.udemy.com/course/chatgpt-for-business/"
        },
        {
          name: "*Machine Learning for Absolute Beginners - Level 1",
          source: "Udemy",
          classification: "Encouraged",
          deadline: "No deadline",
          duration: "4.5 hrs",
          link: "https://cisco.udemy.com/course/machine-learning-for-absolute-beginners-level-1/?src=sac&kw=machine+learning+for+absolut"
        },
        {
          name: "*Executive Briefing: Artificial Intelligence (AI) + ChatGPT",
          source: "Udemy",
          classification: "Expected",
          deadline: "End of Nov.",
          duration: "2.25 hrs",
          link: "https://cisco.udemy.com/course/executive-briefing-artificial-intelligence/"
        },
        {
          name: "**Microsoft Azure AI Fundamentals: Generative AI",
          source: "Microsoft",
          classification: "Encouraged",
          deadline: "No deadline",
          duration: "3 hrs",
          link: "https://learn.microsoft.com/en-us/training/paths/introduction-generative-ai/"
        }
      ]
    },
    {
      level: "Intermediate",
      color: "text-[#0A60FF]",
      bgColor: "bg-[#0A60FF]/10",
      courses: [
        {
          name: "**Cisco Qualified Internal Courses for GenAI (Green Belt)",
          source: "Cisco",
          classification: "Expected",
          deadline: "End of Jan.",
          duration: "5 hrs",
          link: "https://cisco.sharepoint.com/sites/dataeducation/SitePages/Generative-Artificial-Intelligence-@Cisco-Green-Belt.aspx"
        },
        {
          name: "*ChatGPT Complete Course - Prompt Engineering for ChatGPT",
          source: "Udemy",
          classification: "Expected",
          deadline: "End of Jan.",
          duration: "5.5 hrs",
          link: "https://cisco.udemy.com/course/chat-gpt/learn/"
        },
        {
          name: "*Machine Learning for Absolute Beginners - Level 2",
          source: "Udemy",
          classification: "Encouraged",
          deadline: "No deadline",
          duration: "4 hrs",
          link: "https://cisco.udemy.com/course/machine-learning-for-absolute-beginners-level-2/?src=sac&kw=machine+learning+for+absol"
        },
        {
          name: "*Build Python Programs with ChatGPT with Zero Coding Skills",
          source: "Udemy",
          classification: "Encouraged",
          deadline: "No deadline",
          duration: "3 hrs",
          link: "https://cisco.udemy.com/course/turn-ideas-into-python-programs-with-chatgpt/"
        }
      ]
    },
    {
      level: "Advanced",
      color: "text-[#07182D]",
      bgColor: "bg-[#07182D]/10",
      courses: [
        {
          name: "**Cisco Qualified Internal Courses for GenAI (Blue Belt)",
          source: "Cisco",
          classification: "Optional",
          deadline: "No deadline",
          duration: "7 hrs",
          link: "https://cisco.sharepoint.com/sites/dataeducation/SitePages/Generative-Artificial-Intelligence-@Cisco-Blue-Belt.aspx"
        },
        {
          name: "Deep Learning (AI) Courses A-Z",
          source: "DeepLearning",
          classification: "Optional",
          deadline: "No deadline",
          duration: "Various",
          link: "https://www.deeplearning.ai/courses/"
        },
        {
          name: "***MS Azure Training & Certifications For Free",
          source: "Microsoft",
          classification: "Optional",
          deadline: "No deadline",
          duration: "Various",
          link: "https://esi.microsoft.com/"
        },
        {
          name: "*Machine Learning for Absolute Beginners - Level 3",
          source: "Udemy",
          classification: "Optional",
          deadline: "No deadline",
          duration: "3 hrs",
          link: "https://cisco.udemy.com/course/machine-learning-for-absolute-beginners-level-3/"
        },
        {
          name: "*Artificial Intelligence Masterclass + ChatGPT Prize",
          source: "Udemy",
          classification: "Optional",
          deadline: "No deadline",
          duration: "12 hrs",
          link: "https://cisco.udemy.com/course/artificial-intelligence-masterclass/"
        },
        {
          name: "***Develop Generative AI solutions with Azure OpenAI Service",
          source: "Microsoft",
          classification: "Optional",
          deadline: "No deadline",
          duration: "5.5 hrs",
          link: "https://learn.microsoft.com/en-us/training/paths/develop-ai-solutions-azure-openai/"
        }
      ]
    }
  ];

  const getClassificationBadge = (classification: string) => {
    switch (classification) {
      case "Expected":
        return "bg-[#02C8FF] text-white";
      case "Encouraged":
        return "bg-[#0A60FF] text-white";
      case "Optional":
        return "bg-[#07182D] text-white";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getDeadlineBadge = (deadline: string) => {
    switch (deadline) {
      case "End of Nov.":
        return "bg-[#02C8FF]/20 text-[#02C8FF] border border-[#02C8FF]";
      case "End of Jan.":
        return "bg-[#0A60FF]/20 text-[#0A60FF] border border-[#0A60FF]";
      case "No deadline":
        return "bg-[#07182D]/20 text-[#07182D] border border-[#07182D]";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getSourceBadge = (source: string) => {
    switch (source) {
      case "Cisco":
        return "bg-[#07182D] text-white";
      case "Udemy":
        return "bg-[#A435F0] text-white";
      case "Microsoft":
        return "bg-[#00BCF2] text-white";
      case "DeepLearning":
        return "bg-[#0F62FE] text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto p-6 mt-8">
      <div className="rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] border-l-4 border-[#02C8FF] bg-[#FFFFFF] overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-[#02C8FF]/20">
          <h3 className="mt-0 text-[#07182D] text-lg text-center">
            📚 Course Catalog - AI & Machine Learning Training
          </h3>
        </div>

        {/* Course Sections */}
        <div className="divide-y divide-[#02C8FF]/20">
          {courseSections.map((section) => (
            <div key={section.level} className="p-6">
              {/* Section Header */}
              <div className={`${section.bgColor} rounded-lg p-4 mb-4`}>
                <h4 className={`${section.color} text-center font-bold`}>
                  {section.level}
                </h4>
              </div>

              {/* Courses Table */}
              <div className="overflow-hidden rounded-lg border border-[#02C8FF]/20">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[#07182D] text-white">
                      <th className="text-left p-3 text-sm font-medium border-r border-[#02C8FF]/30">Course</th>
                      <th className="text-center p-3 text-sm font-medium border-r border-[#02C8FF]/30">Source</th>
                      <th className="text-center p-3 text-sm font-medium border-r border-[#02C8FF]/30">Classification</th>
                      <th className="text-center p-3 text-sm font-medium border-r border-[#02C8FF]/30">Deadline</th>
                      <th className="text-center p-3 text-sm font-medium border-r border-[#02C8FF]/30">Duration</th>
                      <th className="text-center p-3 text-sm font-medium">Link</th>
                    </tr>
                  </thead>
                  <tbody className="bg-[#FFFFFF]">
                    {section.courses.map((course, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-[#02C8FF]/5" : "bg-[#FFFFFF]"}>
                        <td className="p-3 text-sm text-[#07182D] border-r border-[#02C8FF]/20 max-w-[250px]">
                          <div className="font-medium leading-tight">
                            {course.name}
                          </div>
                        </td>
                        <td className="p-3 text-center border-r border-[#02C8FF]/20">
                          <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getSourceBadge(course.source)}`}>
                            {course.source}
                          </span>
                        </td>
                        <td className="p-3 text-center border-r border-[#02C8FF]/20">
                          <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getClassificationBadge(course.classification)}`}>
                            {course.classification}
                          </span>
                        </td>
                        <td className="p-3 text-center border-r border-[#02C8FF]/20">
                          <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getDeadlineBadge(course.deadline)}`}>
                            {course.deadline}
                          </span>
                        </td>
                        <td className="p-3 text-sm text-center text-[#07182D] border-r border-[#02C8FF]/20 font-medium">
                          {course.duration}
                        </td>
                        <td className="p-3 text-center border-[#02C8FF]/20">
                          <a 
                            href={course.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[#02C8FF] hover:text-[#0A60FF] transition-colors font-medium"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span className="text-xs">Open</span>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="p-6 bg-[#02C8FF]/5 border-t border-[#02C8FF]/20">
          <div className="text-xs text-[#07182D]/70 text-center space-y-1">
            <p><strong>*</strong> Courses marked with asterisks require additional setup or prerequisites</p>
            <p><strong>**</strong> Internal Cisco courses - Cisco credentials required</p>
            <p><strong>***</strong> External platform courses - May require separate registration</p>
          </div>
        </div>
      </div>
    </div>
  );
}