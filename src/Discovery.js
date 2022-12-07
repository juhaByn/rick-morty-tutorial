import Card from "./components/Card";
import Header from "./components/Header";
import GridTable from "./components/GridTable";

//Import Sample Asset
import img1 from "./../src/img/sample1.jpg";
import img2 from "./../src/img/sample2.png"

const Title = ({children}) => (
    <h1 className="text-xl font-bold text-center">{children}</h1>
);

const sampleGridData = []
for(let i = 0;i<10;i++){
    sampleGridData.push(<Card img={img2}/>)
}

const Discovery = () => {
    return(
        <div className="max-w-lg mx-auto flex flex-col items-center">
            <Title>Cards</Title>
            <Card img={img1} title={"Card 1"} description={"Card 1 Description"}/>
            <br/>
            <Card img={img2}/>
            <br/>
            <Title>Header</Title>
            <Header/>
            <br/>
            <Title>Grid Table</Title>
            <GridTable data={sampleGridData}/>
        </div>
    );
}
export default Discovery;