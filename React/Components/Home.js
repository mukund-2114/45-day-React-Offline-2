import React from 'react'

const Home = () => {

    // var a= 5;
    // console.log(a);
    var names = ["name1", "name2", "name3","name4","name5"];

    var data = [
    {name:"rahul",age:25},
    {name:"virat",age:31},
    {name:"rohit",age:45}
];
    // console.log(data)
  return (
    <div>
        {/* {names.map((i)=>(
            <p>{i}</p>      
        ))} */}
        {
           data.map((i,a)=>(
                <div>
                    <b>{a}</b>
                    <i>{i.name}</i>
                    <i>{i.age}</i>
               </div>
           )) 
        }
    </div>
  )
}

export default Home