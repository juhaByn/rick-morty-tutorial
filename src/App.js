import {useEffect, useState} from "react";
import Header from "./components/Header";
import GridTable from "./components/GridTable";
import Card from "./components/Card";

//sample Imaeg
import img2 from "./../src/img/sample2.png"

const App = () => {
    //state
  const [data,setData] = useState(undefined);

  //compoennt did mount
  useEffect(()=>{
    const getData = async() =>{
       const data =  await fetch("https://rickandmortyapi.com/api/character").then(respon=>respon.json());
       setData(data.results);
       console.log(data.results)
    }
    getData();
  },[]);
  
  const sampleGridData = []
  for(let i = 0;i<10;i++){
      sampleGridData.push(<Card img={img2}/>)
  }

  return(
    <div>
      <Header/>
      <div className="mx-auto max-w-5xl pt-20">
        {!data?<h1>Loading....</h1>:
          <GridTable data={
            data.map((char)=>(
              <Card key={char.id.toString()} title={char.name} description={char.origin.name} img={char.image} href={"https://www.google.com/search?q="+char.name.replace(" ","+")}/>
            ))}/>
        }        
      </div>
    </div>
  );
}
export default App;