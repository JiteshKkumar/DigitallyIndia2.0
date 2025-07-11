import React from 'react';
import processSteps from '../utils/processSteps';
import Workflow from "../assets/workflow.png";
import { FaCheckCircle } from 'react-icons/fa';

const WorkingProcess = () => {
    return (
        <section className="py-16 bg-black text-white" id="use-cases">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center mb-12">
                    <div className="bg-pink-600 text-black text-center py-2 px-6 rounded-md shadow-md">
                        <h2 className="text-2xl font-bold">Our Working Process</h2>
                    </div>
                    <p className="text-gray-300 md:w-2/3 text-base leading-relaxed">
                        Our Proven Digital Marketing Success through Step-by-Step Guide to Achieving Your Business Goals.
                    </p>
                </div>

                {/* Workflow Image */}
                <div className="mb-12">
                    <img 
                        src={Workflow} 
                        alt="Workflow Illustration" 
                        className="w-full max-w-4xl mx-auto rounded-md shadow-xl"
                    />
                </div>

                {/* Static Timeline */}
                <div className="relative border-l border-pink-500 pl-6 space-y-10">
                    {processSteps.map((step, index) => (
                        <div key={index} className="relative group">
                            <div className="absolute -left-[15px] top-1 w-5 h-5 bg-pink-600 rounded-full flex items-center justify-center ring-4 ring-black">
                                <FaCheckCircle className="text-white text-sm" />
                            </div>
                            <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-5 shadow-md transition hover:shadow-pink-500/30">
                                <h3 className="text-lg font-semibold text-pink-500 mb-1">
                                    Step {step.number}: {step.question}
                                </h3>
                                <p className="text-sm text-gray-300 leading-relaxed">{step.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WorkingProcess;
