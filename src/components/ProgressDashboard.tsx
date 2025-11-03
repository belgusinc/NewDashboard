import React from "react";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Award, Trophy, Medal } from "lucide-react";
import ciscoLogo from 'figma:asset/01f954188d8f4725032de4c3699f4e3ee47438d3.png';

interface CourseProgressBarProps {
  percentage: number;
  current: number;
  total: number;
  type: "beginner" | "intermediate" | "advanced";
  delay?: number;
}

function CourseProgressBar({ percentage, current, total, type, delay = 0 }: CourseProgressBarProps) {
  const [animatedWidth, setAnimatedWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedWidth(percentage);
    }, delay);

    return () => clearTimeout(timer);
  }, [percentage, delay]);

  const getGradientClass = () => {
    switch (type) {
      case "beginner":
        return "bg-gradient-to-r from-[#0A60FF] to-[#02C8FF]";
      case "intermediate":
        return "bg-gradient-to-r from-[#07182D] to-[#0A60FF]";
      case "advanced":
        return "bg-gradient-to-r from-[#02C8FF] to-[#0A60FF]";
      default:
        return "bg-gradient-to-r from-[#0A60FF] to-[#02C8FF]";
    }
  };

  const text = `${current}/${total}`;
  const showTextInside = animatedWidth > 15;

  return (
    <div className="w-full h-6 bg-[#FFFFFF] border border-[#02C8FF]/20 rounded-xl overflow-hidden relative shadow-inner">
      <div 
        className={`h-full ${getGradientClass()} rounded-xl flex items-center justify-center text-white text-xs font-bold transition-all duration-[2s] ease-out relative overflow-hidden`}
        style={{ width: `${animatedWidth}%` }}
      >
        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"
          style={{
            backgroundImage: `linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.2) 25%, rgba(255,255,255,0.2) 50%, transparent 50%, transparent 75%, rgba(255,255,255,0.2) 75%)`,
            backgroundSize: '12px 12px',
            animation: 'shimmer 2s linear infinite'
          }}
        />
        {showTextInside && <span className="relative z-10">{text}</span>}
      </div>
      {!showTextInside && (
        <div className="absolute inset-0 flex items-center justify-center text-[#07182D] text-xs font-bold">
          {text}
        </div>
      )}
    </div>
  );
}

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  delay?: number;
}

function AnimatedCounter({ target, suffix = "", delay = 0 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const duration = 1000;
      const interval = 16;
      const steps = duration / interval;
      const increment = target / steps;
      
      let currentCount = 0;
      
      const animate = () => {
        currentCount += increment;
        
        if (currentCount >= target) {
          setCount(target);
          return;
        }
        
        setCount(Math.round(currentCount));
        setTimeout(animate, interval);
      };
      
      animate();
    }, delay);

    return () => clearTimeout(timer);
  }, [target, delay]);

  return <span>{count}{suffix}</span>;
}

interface ReportTableProps {
  data: {
    name: string;
    beginner: number;
    intermediate: number;
    overall: number;
  }[];
}

interface CertificateLevel {
  level: "White" | "Green" | "Blue";
  color: string;
  bgColor: string;
  employees: string[];
  icon: any;
  height: string;
}

function Confetti({ isVisible, onComplete }: { isVisible: boolean; onComplete: () => void }) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onComplete();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {Array.from({ length: 50 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            backgroundColor: ['#02C8FF', '#0A60FF', '#07182D', '#FFFFFF'][i % 4],
            left: `${Math.random() * 100}%`,
            top: '-10px',
          }}
          initial={{ y: 0, x: 0, rotate: 0, opacity: 1 }}
          animate={{
            y: window.innerHeight + 100,
            x: (Math.random() - 0.5) * 200,
            rotate: Math.random() * 360,
            opacity: 0,
          }}
          transition={{
            duration: Math.random() * 2 + 1,
            delay: Math.random() * 0.5,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}

function CertificatePodium() {
  const [showConfetti, setShowConfetti] = useState(false);

  const certificateLevels: CertificateLevel[] = [
    {
      level: "White",
      color: "text-[#07182D]",
      bgColor: "bg-[#FFFFFF] border-[#02C8FF]",
      employees: [
        "Jeff Miller (jemille2)",
        "Fowzia Essani (fessani)",
        "Nate Royer (nroyer)",
        "Teddy Amo (tedamo)",
        "Genevieve Holbrook (jennifed)",
        "Pablo Calvo (pablcalv)",
        "Sourabh Kumar (soukumar)",
        "Udit Chalana (cchalana)",
        "Sam Culver (sculver)",
        "Adriana Valencia (livalenc)",
        "Alex Brooks (alexbroo)",
        "Reyna Cerros (rcerros)",
        "Wylie Bindeman (wbindema)",
        "Sudhir Krishnamurthy (sudhirkr)",
        "Jack Xia (jaxia)",
        "Shraddha Nagaraj (shranaga)",
        "Gowri Jayan (gjayan)",
        "Jackie Cao (jingjcao)",
        "Pragati Jain (pragatja)",
        "Xin Zhao -X (xinzhao4)",
        "Amit Sah (amisah)",
        "Mike Sanburn",
        "Ellen Chu",
        "Jillian Beckman",
        "Kariappa P K",
        "Larisa Mitroshkina",
        "Armando Alonso Fortis",
        "Dave Mayer (damayer)",
        "George Mekhael (gmekhael)",
        "Maciej Balon (mabalon)",
        "Dioni Strickland (districk)",
        "Joe Carino (jcarino)",
        "Lorena Sanchez Chipuli (lorsanch)",
        "Cesar Lopez-Malo (clopezma)",
        "Cindy Womble (cywomble)",
        "Hunter Moore (hunmoore)",
        "John Feddern (jfeddern)",
        "Jonathan Schwager (jschwage)",
        "Peggy David (pedavid)",
        "Caleb Gattis (cagattis)",
        "Emily Jiang (weinjian)",
        "Jonathan Burke (jonburke)",
        "Michael Kopec (michakop)",
        "Terrence Burdge (tburdge)",
        "Hayley Gallagher",
        "Sofia Saxena",
        "James Portuguez",
        "Sagher Chordia",
        "Scott Dorn",
        "David Collins",
        "Brenda Anderson",
        "Rachel Ip",
        "Bernarda Izycka",
        "Carl Almeida",
        "Jackie Bateman",
        "Ines Barbara",
        "Peter Wozniczka",
        "Oksana Karpenko",
        "Ramamurthy Annaswamy",
        "Paidala Anusha",
        "Balaji K",
        "Joana Ramos",
        "Marisela Tapia Morales",
        "Wine Pwint Phiansin",
        "Meghana Jagadeesha Rao",
        "Binh Phan",
        "Prasad Pichika",
        "Pratik Mehta",
        "Sally Koay",
        "Yi Xia （夏燚）",
        "Benjamin Lee",
        "Dhruvi Contractor",
        "Rekha Angepat",
        "Austin Yount",
        "Omar Sanchez Breton",
        "Martha Rodriguez",
        "Aiken Keppler",
        "Holly Norton",
        "Kiran Ramu",
        "Paola Blanc Murguia",
        "Madhavi Kottapalli",
        "Chris Bergwall",
        "Neeraja Vizaya Kumar",
        "Kien Tran",
        "Brenda Gonzalez Araya",
        "Karthik Raghotham",
        "Uma Rajaratnam",
        "Ruchika Pahwa",
        "Carey Martin",
        "Genesis Fajardo",
        "Brandon Rimer",
        "Yachi Tsai",
        "Carolina Galicia",
        "Manuel Flores",
        "Kelly Byrnes",
        "Cristie Meadows",
        "Abi Ayedun",
        "Armando Palomino Calero",
        "Esteban Alvarez Cordero",
        "Esteban Hernandez",
        "Fola Odusanya",
        "Kasia Podstawka",
        "Rob Williams",
        "Vandna Jain",
        "Mark Wyman",
        "Ariel Morales",
        "Talise Richter",
        "Melissa Wong",
        "Maiara De Carvalho Beraldi",
        "Mohamud Warsame",
        "Manjunath Channappagol",
        "Maggie Deng",
        "Shanmuga Priya Venkatesan",
        "Sumit Jakhar",
        "Ayako Kai",
        "Xin Shen",
        "Vinaya Nayak",
        "Vidya Karthik",
        "Christian Holobinko",
        "Kyriakos Katsamakis",
        "Abdullah Tahir",
        "Ainish Amir",
        "Connor Miles",
        "Darshana Shet",
        "Garrett Selden",
        "Kristen Edouard",
        "Zoha Haque",
        "Lu Zhao",
        "Steve Janicek",
        "Amrita Singh",
        "Sandy Zhang",
        "Suthan Setty Gunashekar",
        "Bartlomiej Nowak",
        "Kamila Lasz",
        "Leslie Patrick Mariadas",
        "Małgorzata Jamro",
        "Tomek Gasior",
        "Aldo Lezama",
        "Amandeep Kataria",
        "Elizabeth Rodriguez",
        "Gabriela Zepeda Hernandez",
        "Kay Wagner",
        "Pamela Wong",
        "Christina Thompson",
        "Jordan Brown",
        "Vidisha Patel",
        "Candelaria Zucca",
        "Janet Ng",
        "Karolina Nalepa",
        "Mahender Manik",
        "Greg Bennett",
        "Eduardo Seput",
        "Anna Ciura",
        "Noeleen Kenny",
        "Barbara Wolczanska",
        "Lukasz Rawicki",
        "Ricardo Pinto",
        "Sebastian Brzeski",
        "Gido Smid",
        "Agata Matusik",
        "Roman Morfyd",
        "Iva Kushlyk",
        "Jana Michlikova",
        "Natalia Wisniowska",
        "Dili Urazova",
        "Chris Kokos",
        "Patricia Diaz",
        "Rajiv Gatha"
      ],
      icon: Medal,
      height: "h-24"
    },
    {
      level: "Blue", 
      color: "text-[#02C8FF]",
      bgColor: "bg-[#02C8FF]",
      employees: [
        "Sourabh Kumar (soukumar)",
        "Udit Chalana (cchalana)",
        "Jack Xia (jaxia)",
        "Cesar Lopez-Malo (clopezma)",
        "Sofia Saxena",
        "Ruchika Pahwa",
        "Darshana Shet",
        "Amandeep Kataria",
        "Vidisha Patel",
        "Greg Bennett",
        "Manuel Flores"
      ],
      icon: Trophy,
      height: "h-32"
    },
    {
      level: "Green",
      color: "text-[#0A60FF]", 
      bgColor: "bg-[#0A60FF]",
      employees: [
        "Nate Royer (nroyer)",
        "Teddy Amo (tedamo)",
        "Genevieve Holbrook (jennifed)",
        "Sourabh Kumar (soukumar)",
        "Udit Chalana (cchalana)",
        "Wylie Bindeman (wbindema)",
        "Jack Xia (jaxia)",
        "Gowri Jayan (gjayan)",
        "Kunal Kishor (kkishor2)",
        "Sahil Bali (sahbali)",
        "Varuni Garg (vargarg)",
        "Amit Sah (amisah)",
        "Joe Carino (jcarino)",
        "Cesar Lopez-Malo (clopezma)",
        "Cindy Womble (cywomble)",
        "Jonathan Schwager (jschwage)",
        "Peggy David (pedavid)",
        "Michael Kopec (michakop)",
        "Sofia Saxena",
        "Brenda Anderson",
        "Rachel Ip",
        "Ines Barbara",
        "Ramamurthy Annaswamy",
        "Neeraja Vizaya Kumar",
        "Kien Tran",
        "Ruchika Pahwa",
        "Brandon Rimer",
        "Carolina Galicia",
        "Manuel Flores",
        "Kelly Byrnes",
        "Cristie Meadows",
        "Abi Ayedun",
        "Armando Palomino Calero",
        "Esteban Alvarez Cordero",
        "Esteban Hernandez",
        "Fola Odusanya",
        "Kasia Podstawka",
        "Vandna Jain",
        "Vidya Karthik",
        "Kyriakos Katsamakis",
        "Darshana Shet",
        "Lu Zhao",
        "Bartlomiej Nowak",
        "Małgorzata Jamro",
        "Amandeep Kataria",
        "Kay Wagner",
        "Vidisha Patel",
        "Greg Bennett"
      ],
      icon: Award,
      height: "h-28"
    }
  ];

  const handleCertificateClick = () => {
    setShowConfetti(true);
  };

  return (
    <div className="mb-8 mx-auto max-w-2xl p-6 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] border-l-4 border-[#02C8FF] bg-[#FFFFFF]">
      <Confetti isVisible={showConfetti} onComplete={() => setShowConfetti(false)} />
      
      <h3 className="mt-0 text-[#07182D] text-lg border-b-2 border-[#02C8FF]/20 pb-2.5 mb-6 text-center">
        🏆 Certificate Achievement Podium
      </h3>
      
      <div className="flex items-end justify-center gap-4 pb-6">
        {certificateLevels.map((cert, index) => {
          const Icon = cert.icon;
          const isBlue = cert.level === "Blue";
          
          return (
            <Dialog key={cert.level}>
              <DialogTrigger asChild>
                <motion.div 
                  className="flex flex-col items-center cursor-pointer"
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCertificateClick}
                >
                  <button
                    className={`relative ${cert.height} w-32 ${cert.bgColor} rounded-lg transition-all duration-300 border-2 flex flex-col items-center justify-center group`}
                  >
                    <Icon 
                      className={`w-10 h-10 mb-2 ${isBlue ? 'text-white' : cert.level === 'Green' ? 'text-white' : 'text-[#07182D]'}`}
                    />
                    
                    <span className={`text-sm font-bold ${isBlue ? 'text-white' : cert.level === 'Green' ? 'text-white' : 'text-[#07182D]'}`}>
                      {`${cert.level} Certificate`}
                    </span>
                  </button>
                </motion.div>
              </DialogTrigger>
              
              <DialogContent className="max-w-md" style={{ top: '40%', left: '62%', transform: 'translate(-50%, -40%)' }}>
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <Icon className={`w-6 h-6 ${cert.color}`} />
                    {cert.level} Certificate Achievers ({cert.employees.length} total)
                  </DialogTitle>
                  <DialogDescription>
                    Employees who have achieved the {cert.level} certificate level.
                  </DialogDescription>
                </DialogHeader>
                
                <div className="mt-4">
                  <div className="max-h-80 overflow-y-auto space-y-2">
                    {cert.employees.map((employee, idx) => (
                      <div 
                        key={idx}
                        className="p-3 bg-[#FFFFFF] rounded-lg border border-[#02C8FF]/20 hover:bg-[#02C8FF]/5 transition-colors"
                      >
                        <span className="font-medium text-[#07182D]">{employee}</span>
                      </div>
                    ))}
                  </div>
                  
                  {cert.employees.length === 0 && (
                    <div className="text-center py-8 text-[#07182D]/60">
                      <Icon className="w-12 h-12 mx-auto mb-2 text-[#02C8FF]/40" />
                      <p>No employees have achieved this certificate level yet.</p>
                    </div>
                  )}
                </div>
              </DialogContent>
            </Dialog>
          );
        })}
      </div>
    </div>
  );
}

function ReportTable({ data }: ReportTableProps) {
  return (
    <div className="overflow-hidden rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] border-l-4 border-[#02C8FF] bg-[#FFFFFF] flex-1">
      <div className="p-6">
        <h3 className="mt-0 text-[#07182D] text-lg border-b-2 border-[#02C8FF]/20 pb-2.5 mb-5 text-center">
          👥 Jose's Direct Reports
        </h3>
        <div className="overflow-hidden rounded-lg">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#07182D] text-white">
                <th className="text-left p-3 text-sm font-medium">Name</th>
                <th className="text-center p-2 text-xs font-medium">Beginner %</th>
                <th className="text-center p-2 text-xs font-medium">Intermediate %</th>
                <th className="text-center p-2 text-xs font-medium">Overall Completed %</th>
              </tr>
            </thead>
            <tbody className="bg-[#FFFFFF]">
              {data.map((employee, index) => {
                const getMedalEmoji = (position: number) => {
                  if (position === 0) return "🥇 ";
                  if (position === 1) return "🥈 ";
                  if (position === 2) return "🥉 ";
                  return "";
                };

                return (
                  <tr key={employee.name} className={index % 2 === 0 ? "bg-[#02C8FF]/5" : "bg-[#FFFFFF]"}>
                    <td className="p-3 text-sm font-medium text-[#07182D] border-r border-[#02C8FF]/20">
                      {getMedalEmoji(index)}{employee.name}
                    </td>
                    <td className="p-2 text-sm text-center border-r border-[#02C8FF]/20 text-[#02C8FF] font-medium">
                      {employee.beginner}%
                    </td>
                    <td className="p-2 text-sm text-center border-r border-[#02C8FF]/20 text-[#0A60FF] font-medium">
                      {employee.intermediate}%
                    </td>
                    <td className="p-2 text-sm text-center text-[#07182D] font-medium">
                      {employee.overall}%
                    </td>
                  </tr>
                );
              })}
              <tr className="bg-[#07182D] text-white border-t-2 border-[#07182D]">
                <td className="p-3 text-sm font-bold border-r border-[#02C8FF]/30">
                  Total
                </td>
                <td className="p-2 text-sm text-center border-r border-[#02C8FF]/30 font-bold">
                  64.3%
                </td>
                <td className="p-2 text-sm text-center border-r border-[#02C8FF]/30 font-bold">
                  14.4%
                </td>
                <td className="p-2 text-sm text-center font-bold">
                  51.8%
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export function ProgressDashboard() {
  const reportData = [
    { name: "Chris Kokos", beginner: 75.0, intermediate: 28.6, overall: 63.4 },
    { name: "David Collins", beginner: 76.2, intermediate: 17.9, overall: 61.6 },
    { name: "Eduardo Seput", beginner: 67.6, intermediate: 11.8, overall: 53.7 },
    { name: "Mohamud Warsame", beginner: 62.5, intermediate: 0.0, overall: 46.9 },
    { name: "Patricia Diaz", beginner: 63.7, intermediate: 28.6, overall: 54.9 }
  ];

  return (
    <div className="max-w-[1200px] mx-auto p-6">
      <div className="flex justify-center mb-8">
        <img 
          src={ciscoLogo} 
          alt="Cisco Logo" 
          className="h-16 w-auto"
        />
      </div>
      
      <CertificatePodium />
      
      <div className="flex flex-col lg:flex-row gap-6 lg:items-stretch mt-8">
        <div className="lg:w-1/2 flex">
          <div className="p-6 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] border-l-4 border-[#02C8FF] bg-[#FFFFFF] flex-1">
            <h3 className="mt-0 text-[#07182D] text-lg border-b-2 border-[#02C8FF]/20 pb-2.5 mb-5 text-center">
              📊 Expected Course Progress Dashboard
            </h3>

            <div className="space-y-5">
              <div className="my-5">
                <div className="flex justify-between mb-2 font-medium text-[#07182D]">
                  <span>Beginner Courses</span>
                  <span className="font-bold py-1 px-2 rounded-xl text-xs text-[#02C8FF]">64.3%</span>
                </div>
                <CourseProgressBar percentage={64.3} current={802} total={1248} type="beginner" delay={500} />
              </div>

              <div className="my-5">
                <div className="flex justify-between mb-2 font-medium text-[#07182D]">
                  <span>Intermediate Courses</span>
                  <span className="font-bold py-1 px-2 rounded-xl text-xs text-[#0A60FF]">14.4%</span>
                </div>
                <CourseProgressBar percentage={14.4} current={60} total={416} type="intermediate" delay={800} />
              </div>
            </div>

            <div className="mt-7 p-5 bg-gradient-to-br from-[#02C8FF]/5 to-[#0A60FF]/5 rounded-xl text-center">
              <h4 className="text-[#02C8FF] mb-4 text-base">Summary Statistics</h4>
              <div className="flex justify-around flex-wrap gap-4">
                <div className="bg-[#FFFFFF] p-4 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.1)] min-w-[80px]">
                  <div className="text-xl font-bold text-[#02C8FF]">
                    <AnimatedCounter target={862} delay={0} />
                  </div>
                  <div className="text-xs text-[#07182D] mt-1">Completed</div>
                </div>
                <div className="bg-[#FFFFFF] p-4 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.1)] min-w-[80px]">
                  <div className="text-xl font-bold text-[#02C8FF]">
                    <AnimatedCounter target={1664} delay={0} />
                  </div>
                  <div className="text-xs text-[#07182D] mt-1">Required</div>
                </div>
                <div className="bg-[#FFFFFF] p-4 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.1)] min-w-[80px]">
                  <div className="text-xl font-bold text-[#02C8FF]">
                    <AnimatedCounter target={51.8} suffix="%" delay={0} />
                  </div>
                  <div className="text-xs text-[#07182D] mt-1">% Completed</div>
                </div>
                <div className="bg-[#FFFFFF] p-4 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.1)] min-w-[80px]">
                  <div className="text-xl font-bold text-[#02C8FF]">
                    <AnimatedCounter target={802} delay={0} />
                  </div>
                  <div className="text-xs text-[#07182D] mt-1">Remaining</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 flex">
          <ReportTable data={reportData} />
        </div>
      </div>
    </div>
  );
}
