import { Home, Clock, Trophy, ArrowUp, Bell, User, Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import { motion } from "framer-motion"
import Logo from "./assets/Logo.png";
import Home1 from "./assets/Home.png";
import Clock1 from "./assets/Clock.png";
import Wallet from "./assets/Wallet.png";
import GoalP from "./assets/GoalP.png";
import House from "./assets/House.png";
import Piggy from "./assets/Piggy.png";
import Flight from "./assets/Flight.png";
import GraphP from "./assets/GraphP.png";
import Graph from "./assets/Graph.png";
import { useNavigate } from "react-router-dom";
import Loader from "./Components/Loader";
import React, { useState, useEffect } from 'react';




export default function Goals() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true); // <-- Initialize loading state


    
    useEffect(() => {
        setTimeout(() => {
          setLoading(false);
        }, 2000); // Simulated loading delay (2 seconds)
      }, []);
    
      if (loading) {
        return <Loader />; // Show loader while loading
      }


    return (
        <div className="min-h-screen bg-[#E0EBF7]">

            {/* Header */}
            <motion.header
                className="bg-[#4B0082] text-white px-6 h-[83px] flex items-center shadow-[0_6px_6px_rgba(0,0,0,0.25)] mb-[35px]"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <div className="flex items-center justify-between w-full">
                    <motion.img
                        src={Logo}
                        alt="Finoptix Logo"
                        className="w-[174px] h-[92px] object-contain"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                    />

                    <nav className="hidden md:flex items-center gap-x-[15px] flex-grow justify-center text-[20px] font-outfit font-normal tracking-[0.08em]">
                        <motion.a
                            href="/"
                            className="px-4 flex items-center gap-x-[9px] py-2 rounded-md hover:bg-purple-700"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <img
                                src={Home1}
                                alt="Finoptix Logo"
                                className="w-[22px] h-[22px] object-contain pt-0.5"
                            />Home
                        </motion.a>

                        <motion.a
                            href="/dashboard"
                            className="px-4 flex items-center gap-x-[9px] py-2 rounded-md hover:bg-purple-700"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <img
                                src={Clock1}
                                alt="Finoptix Logo"
                                className="w-[20px] h-[20px] object-contain pt-0.5"
                            />Dashboard
                        </motion.a>

                        <motion.a
                            href="/your_budget"
                            className="px-4 flex items-center gap-x-[9px] py-2 rounded-md hover:bg-purple-700"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <img
                                src={Wallet}
                                alt="Finoptix Logo"
                                className="w-[20px] h-[20px] object-contain pt-0.5"
                            />Your Budget
                        </motion.a>

                        <motion.a
                            href="/goals"
                            className="px-4 flex items-center gap-x-[9px] p-2 bg-[#F0A6F4] text-[#4B0082] rounded-md"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <img
                                src={GoalP}
                                alt="Finoptix Logo"
                                className="w-[20px] h-[20px] object-contain pt-0.5 text-[#4B0082]"
                            />Goals
                        </motion.a>

                        <motion.a
                            href="/analytics"
                            className="px-4 flex items-center gap-x-[9px] py-2 rounded-md hover:bg-purple-700"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <img
                                src={Graph}
                                alt="Finoptix Logo"
                                className="w-[20px] h-[20px] object-contain pt-0.5"
                            />Investment Analytics
                        </motion.a>
                    </nav>

                    <div className="flex items-center gap-x-[15px] relative left-[-30px]">
                        <motion.button
                            className="hover:bg-purple-700 rounded-full pl-[15px]"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Bell className="w-5 h-5" />
                        </motion.button>
                      <motion.button
                          className="hover:bg-purple-700 rounded-full"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => navigate("/profile")} // Navigate to Profile Page
                        >
                          <div className="w-8 h-8 bg-purple-300 rounded-full" />
                        </motion.button>
                    </div>
                </div>
            </motion.header>



            <main className="p-6 space-y-6">
                {/* Top Panels */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Goal Insights */}
                    <div className="bg-[#C3D9F7] rounded-xl p-6 space-y-4">
                        <h2 className="text-lg font-semibold">Goal Insights</h2>
                        <div className="space-y-4">
                            <div className="bg-white rounded-lg p-4 flex justify-between items-center">
                                <div className="flex items-center space-x-2">
                                    <ArrowUp className="text-[#01cc01]" />
                                    <span>Highest Saving Rate</span>
                                </div>
                                <span className="text-[#01cc01] text-[15px] font-semibold">+15% this month</span>
                            </div>
                            <div className="bg-white rounded-lg p-4 flex justify-between items-center">
                                <div className="flex items-center space-x-2">
                                    <Clock className="text-[#024EC0]" />
                                    <span>Average Time to Goal</span>
                                </div>
                                <span className="text-[#024EC0] text-[15px] font-semibold">2.5 years</span>
                            </div>
                            <div className="bg-white rounded-lg p-4 flex justify-between items-center">
                                <div className="flex items-center space-x-2">
                                    <Trophy className="text-[#6E07C8]" />
                                    <span>Goals Completed</span>
                                </div>
                                <span className="text-[#6E07C8] text-[15px] font-semibold">3 of 7</span>
                            </div>
                        </div>
                    </div>

                    {/* Recommendations */}
                    <div className="bg-[#C3D9F7] rounded-xl p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-semibold">Recommendations</h2>
                            <button className="text-[#6E07C8] text-[15px] font-semibold">View All</button>
                        </div>
                        <div className="space-y-4">
                            <div className="bg-white rounded-lg p-4">
                                <h3 className="font-semibold mb-2">Increase Emergency Fund</h3>
                                <p className="text-[15px] font-semibold text-gray-600 w-[84%]">
                                    Consider increasing your emergency fund to cover 6 months of expenses.
                                </p>
                            </div>
                            <div className="bg-white rounded-lg p-4">
                                <h3 className="font-semibold mb-2">Optimize Retirement Savings</h3>
                                <p className="text-[15px] font-semibold text-gray-600 w-[84%]">
                                    You could benefit from increasing your monthly retirement contributions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Goal Timeline */}
                <div className="bg-[#dad7d7] rounded-xl p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-semibold">Goal Timeline</h2>
                        <button className="bg-gradient-to-r from-[#6535F6] to-[#800BBE] text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                            <span className="text-[15px] font-semibold">Add New Goal</span>
                        </button>
                    </div>
                    <div className="space-y-4">
                        <div className="bg-[#9aff9ad5] bg-opacity-30 p-4 rounded-lg flex justify-between items-center">
                            <div className="flex items-center space-x-4">
                                <img src={House} alt="House" className="w-[30px] h-[30px] object-contain pt-0.5" />
                                <div>
                                    <h3 className="font-semibold">Home Down Payment</h3>
                                    <p className="text-[15px] font-semibold text-gray-600">December 2024</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="font-semibold">₹25,00,000 / ₹40,00,000</p>
                                <p className="text-[15px] font-bold text-[#0A810A]">62.5% completed</p>
                            </div>
                        </div>


                        <div className="bg-[#fbe58e86] bg-opacity-30 p-4 rounded-lg flex justify-between items-center">
                            <div className="flex items-center space-x-4">
                                <div className="text-[#e59308]">
                                    <img src={Piggy} alt="Piggy" className="w-[30px] h-[30px] object-contain pt-0.5" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">Emergency Funds</h3>
                                    <p className="text-[15px] font-semibold text-gray-600">September 2024</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="font-semibold">₹25,000 / ₹50,000</p>
                                <p className="text-[15px] font-bold text-[#e59308]">50% completed</p>
                            </div>
                        </div>


                        <div className="bg-[#a0e7ffb8] bg-opacity-30 p-4 rounded-lg flex justify-between items-center">
                            <div className="flex items-center space-x-4">
                                <div className="text-[#015adf]">
                                    <img src={Flight} alt="" className="w-[30px] h-[30px] object-contain pt-0.5" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">Vacation Funds</h3>
                                    <p className="text-[15px] font-semibold text-gray-600">March 2024</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="font-semibold">₹20,000 / ₹1,00,000</p>
                                <p className="text-[15px] font-bold text-[#015adf]">20% completed</p>
                            </div>
                        </div>


                        <div className="bg-[#c788ffd1] bg-opacity-30 p-4 rounded-lg flex justify-between items-center">
                            <div className="flex items-center space-x-4">
                                <div className="text-[#7400c1]">
                                    <img src={GraphP} alt="" className="w-[30px] h-[30px] object-contain pt-0.5" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">Retirement Funds</h3>
                                    <p className="text-[15px] font-semibold text-gray-600">January 2025</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="font-semibold">₹12,50,000 / ₹2,00,00,000</p>
                                <p className="text-[15px] font-bold text-[#7400c1]">6.25% completed</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Goal Achievement History */}
                <div className="bg-[#f7ecbebd] rounded-xl p-6">
                    <h2 className="text-lg font-semibold mb-6">Goal Achievement History</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                        <div className="bg-[#c3d6f2b4] rounded-lg p-4 text-center">
                            <h3 className="text-2xl font-bold text-[#01cc01] mb-2">2023</h3>
                            <p className="font-semibold">New Car Fund</p>
                            <p className="text-[16px] font-semibold text-gray-600">Completed in 18 months</p>
                        </div>

                        <div className="bg-[#c3d6f2b4] rounded-lg p-4 text-center">
                            <h3 className="text-2xl font-bold text-[#015adf] mb-2">2024</h3>
                            <p className="font-semibold">Wedding Fund</p>
                            <p className="text-[16px] font-semibold text-gray-600">Completed in 24 months</p>
                        </div>

                        <div className="bg-[#c3d6f2b4] rounded-lg p-4 text-center">
                            <h3 className="text-2xl font-bold text-[#8913f1] mb-2">2022</h3>
                            <p className="font-semibold">Education Fund</p>
                            <p className="text-[16px] font-semibold text-gray-600">Completed in 36 months</p>
                        </div>

                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-[#4B0082] text-white mt-7 h-[466px]">
                <div className="container mx-auto px-6 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:justify-between ml-18">
                        <div className="font-outfit font-normal tracking-[0.08em]">
                            <h3 className="font-semibold text-[22px] mb-4">Our Features</h3>
                            <ul className="space-y-2 text-[14px]">
                                <li>Get Started as a Fresher</li>
                                <li>How To Earn More</li>
                                <li>Write Blogs Or Read</li>
                                <li>Learn To Invest</li>
                                <li>Manage Your Budget</li>
                                <li>Personalize Future Plans For Your Future</li>
                            </ul>
                        </div>


                        <div className="font-outfit font-normal tracking-[0.08em]">
                            <h3 className="font-semibold text-[22px] mb-4">Our Potential Partners</h3>
                            <ul className="space-y-2 text-[14px]">
                                <li>Banks</li>
                                <li>Tech Companies</li>
                                <li>Insurance Companies</li>
                                <li>Expert Traders</li>
                            </ul>
                        </div>


                        <div className="font-outfit font-normal tracking-[0.08em]">
                            <h3 className="font-semibold text-[22px] mb-4">Help</h3>
                            <ul className="space-y-2 text-[14px]">
                                <li>Privacy Policy</li>
                                <li>FAQ</li>
                                <li>How to get Started</li>
                                <li>Video Tutorials</li>
                                <li>Copyright</li>
                            </ul>
                        </div>


                        <div className="font-outfit font-normal tracking-[0.08em]">
                            <h3 className="font-semibold text-[22px] mb-4">About Us</h3>
                            <ul className="space-y-2 text-[14px]">
                                <li>Location</li>
                                <li>Security</li>
                                <li>Our Plans</li>
                                <li>Our Vision</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-5 pt-5 border-t border-purple-700">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <div className="text-[12px] font-medium">© 2015-2025 FINOPTIX All Rights Reserved</div>
                            <img
                                src={Logo}
                                alt="Finoptix Logo"
                                className="w-[174px] h-[92px] object-contain"
                            />
                            <div className="flex items-center space-x-4 mt-4 md:mt-0">
                                <span className="text-[20px] mr-4font-outfit font-normal">Follow Us on :</span>
                                <a href="#" className="hover:text-purple-300">
                                    <Instagram className="w-5 h-5" />
                                </a>
                                <a href="#" className="hover:text-purple-300">
                                    <Youtube className="w-5 h-5" />
                                </a>
                                <a href="#" className="hover:text-purple-300">
                                    <Twitter className="w-5 h-5" />
                                </a>
                                <a href="#" className="hover:text-purple-300">
                                    <Facebook className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

