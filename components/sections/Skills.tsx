import 'devicon/devicon.min.css';
const Skills = () => {
    const skillsData = [
        { name: "Java", icon: "devicon-java-plain colored" },
        { name: "JavaScript", icon: "devicon-javascript-plain colored" },
        { name: "TypeScript", icon: "devicon-typescript-plain colored" },
        { name: "React", icon: "devicon-react-original colored" },
        { name: "Next.js", icon: "devicon-nextjs-plain", darkMode: true   },
        { name: "Node.js", icon: "devicon-nodejs-plain colored" },
        { name: "Express", icon: "devicon-express-original colored", darkMode: true },
        { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
        { name: "HTML5", icon: "devicon-html5-plain colored" },
        { name: "CSS3", icon: "devicon-css3-plain colored" },
        { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
        { name: "Git", icon: "devicon-git-plain colored" },
        { name: "Docker", icon: "devicon-docker-plain colored" },
        { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark colored" }
    ];




    return (
        <section id="skills" className=" scroll-mt-20 px-4 py-20 bg-white dark:bg-[#0a0a0a] transition-colors duration-300 relative overflow-hidden">

            <div className="max-w-4xl w-full mx-auto ">
                <h2 className="text-xl md:text-2xl font-bold font-inter bg-linear-to-r from-gray-700 via-gray-800 to-gray-900 dark:from-gray-300 dark:via-gray-200 dark:to-white bg-clip-text text-transparent">
                    Tech Stack
                <div className="w-33 h-0.75 mx-auto ml-0 dark:bg-gradient-to-r dark:from-amber-500 dark:via-orange-500 dark:to-amber-500 bg-linear-to-r from-amber-500 via-orange-500 to-amber-500 rounded-full" />
                </h2>
                
                <div className='flex flex-wrap gap-3 justify-center mt-10'> 
                    {skillsData.map((skill) => (
                        <div key={skill.name} className='group px-3 py-1.5 flex items-center gap-2.5 border-dashed border-2 border-gray-200 dark:border-gray-500 bg-white dark:bg-gray-950 rounded-lg font-display shadow-sm hover:scale-110 hover:shadow-md hover:shadow-amber-500/50 dark:hover:shadow-emerald-500/50 hover:border-amber-500/50 dark:hover:border-emerald-500/50 transition-all duration-300'>
                            {/* Icon using Devicon Font */}
                            <i className={`${skill.icon} text-md  transition-transform duration-300 ${skill.darkMode ? 'dark:text-white' : ''}`}/>

                            {/* Skill Name */}
                            <span className='text-sm font-medium text-gray-800 dark:text-gray-200'>{skill.name}</span>

                        </div>
                    ))}

                </div>
            </div>

        </section>
    )
}

export default Skills