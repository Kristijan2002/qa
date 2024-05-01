
interface SolutionProps{
    text: string;
}

const OurSolution: React.FC<SolutionProps> = ({text}) => {

    return (
        <div className="bg-custom-apricot sm:bg-custom-apricot w-full sm:w-4/5 mx-auto p-4 pb-36 rounded-b-3xl flex flex-col items-center pt-10">
                <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">Нашето решение</h1>
                <p className="font-semibold">{text}</p>
                <img src="/Untitled design (4) 1.png" alt="" className="w-1/2 mt-4"/>
        </div>
    );
};


export default OurSolution;
