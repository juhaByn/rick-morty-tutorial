const GridTable = ({data=[]}) => {
    return(
        <div className="w-fit py-4 flex flex-row flex-wrap gap-4 justify-center justify-items-start">
            {data}
        </div>
    );
}

export default GridTable;