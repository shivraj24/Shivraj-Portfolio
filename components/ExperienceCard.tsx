import React from "react";
import {motion} from "framer-motion";

type Props = {}
export default function ExperienceCard({}: Props){
    return(
        <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100
        opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
            <motion.img 
            initial={{
                y:-100,
                opacity:0,
            }}
            transition={{duration: 1.2}}
            whileInView={{
                opacity:1.2
            }}
            viewport={{once:true}}
            className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
            src="https://images.unsplash.com/photo-1668554245893-2430d0077217?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            alt="Experience Logo"
            />
            <div className="px-0 md:px-10">
                <h4 className="text-4xl font-light">
                    Software Engineer At XYZ
                </h4>
                <p className="font-bold text-2xl mt-1">XYZ</p>
                <div className="flex space-x-2 my-2">
                    <img 
                    className="h-10 w-10 rounded-full"
                    src="https://media.licdn.com/dms/image/D4D12AQG1cE8b7X4Deg/article-cover_image-shrink_720_1280/0/1676715013557?e=2147483647&v=beta&t=SiBHzMvNZigtGK28mR7dejQPboGg4MKziQCosaAj0-s"
                    alt=""
                    />
                    <img 
                    className="h-10 w-10 rounded-full"
                    src="https://media.licdn.com/dms/image/D4D12AQG1cE8b7X4Deg/article-cover_image-shrink_720_1280/0/1676715013557?e=2147483647&v=beta&t=SiBHzMvNZigtGK28mR7dejQPboGg4MKziQCosaAj0-s"
                    alt=""
                    />
                    <img 
                    className="h-10 w-10 rounded-full"
                    src="https://media.licdn.com/dms/image/D4D12AQG1cE8b7X4Deg/article-cover_image-shrink_720_1280/0/1676715013557?e=2147483647&v=beta&t=SiBHzMvNZigtGK28mR7dejQPboGg4MKziQCosaAj0-s"
                    alt=""
                    />
                    <img 
                    className="h-10 w-10 rounded-full"
                    src="https://media.licdn.com/dms/image/D4D12AQG1cE8b7X4Deg/article-cover_image-shrink_720_1280/0/1676715013557?e=2147483647&v=beta&t=SiBHzMvNZigtGK28mR7dejQPboGg4MKziQCosaAj0-s"
                    alt=""
                    />
                    {/* Tech stack used */}
                </div>
                <p className="uppercase py-5 text-gray-300">Started working ....ended</p>
                <ul className="list-disc space-y-4 text-lg
                ">
                    <li>Summary Points Summary PointsSummary PointsSummary PointsSummary PointsSummary Points
                    Summary PointsSummary Points
                    </li>
                    <li> Summary PointSummary PointsSummary PointsSummary PointsSummary Points
                    Summary Points
                    </li>
                </ul>
            </div>
        </article>
    );
}