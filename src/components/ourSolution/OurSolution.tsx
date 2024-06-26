
interface SolutionProps{
    title: string
    text: string;
}

const OurSolution: React.FC<SolutionProps> = ({text, title}) => {

    return (
        <div className="bg-custom-apricot sm:bg-custom-apricot w-11/12 sm:w-1/2 md:w-4/5 text-left mx-auto p-4 pb-36 rounded-b-3xl flex flex-col pt-10">
            <div className="w-full md:w-4/5 mx-auto">
                <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">{title}</h1>
                <p className="font-medium">{text}</p>
                <img src="/465645 1.png" alt="" className="w-full mt-4"/>
            </div>
        </div>
    );
};


export default OurSolution;
