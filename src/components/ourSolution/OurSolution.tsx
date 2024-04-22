
interface SolutionProps{
    text: string;
}

const OurSolution: React.FC<SolutionProps> = ({text}) => {

    return (
        <div className="w-11/12 md:w-1/2 mx-auto text-left py-10">
                <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">Нашето решение</h1>
                <p className="font-semibold">{text}</p>
                <img src="/Untitled design (4) 1.png" alt="" className="w-full mt-4"/>
        </div>
    );
};


export default OurSolution;
