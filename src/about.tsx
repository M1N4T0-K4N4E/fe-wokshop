import React from "react";

type Prop = {
    data: string[];
    func:React.Dispatch<React.SetStateAction<string>>
};

const about = ({data}: Prop) => {
    return <div>about</div>;
    {data.map((item, idx) => (
        <h4 key = {idx}>{item}</h4>
    ))}
};

export default about;