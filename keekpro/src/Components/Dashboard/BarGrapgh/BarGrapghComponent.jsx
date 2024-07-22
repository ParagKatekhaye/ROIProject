import React ,  {useState} from 'react'
import { HiOutlineDocumentDownload } from "react-icons/hi";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
  } from "recharts";
  import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const BarGrapghComponent = ({expanded}) => {

  const [selectedOption, setSelectedOption] = useState('Weeks');

  // Static data for demo
  const weekData = [
    { name: 'Mon', amt: 300 },
    { name: 'Tue', amt: 410 },
    { name: 'Wed', amt: 690 },
    { name: 'Thu', amt: 500 },
    { name: 'Fri', amt: 181 },
    { name: 'Sat', amt: 200 },
    { name: 'Sun', amt: 210 },
  ];

  const monthData = [
    { name: 'Jan', amt: 400 },
    { name: 'Feb', amt: 300 },
    { name: 'Mar', amt: 600 },
    { name: 'Apr', amt: 700 },
    { name: 'May', amt: 500 },
    { name: 'Jun', amt: 300 },
    { name: 'Jul', amt: 400 },
    { name: 'Aug', amt: 300 },
    { name: 'Sep', amt: 600 },
    { name: 'Oct', amt: 700 },
    { name: 'Nov', amt: 500 },
    { name: 'Dec', amt: 300 },
  ];

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const dataToDisplay = selectedOption === 'Weeks' ? weekData : monthData;
  const width = expanded ? 650 : 850;
  const barSize =  selectedOption === 'Weeks' ? 50 : 30
      
    return (
    <div className='min-h-[296px] bg-white rounded-lg mt-1'>
    <div class="bg-card p-2  shadow-md">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-lg font-bold pl-4 text-card-foreground">Performance Measure</h2>
        <div class="flex mr-8">
          <select class="bg-secondary mr-4 text-secondary-foreground p-2 rounded-lg border border-border border-gray-500"
             value={selectedOption}
             onChange={handleOptionChange}
          >
            <option>Weeks</option>
            <option>Months</option>
          </select>
          <button className='bg-blue-600 text-white p-2 font-semibold rounded-lg border border-gray-500 hover:bg-primary/80 flex items-center'>
      <HiOutlineDocumentDownload className="mr-2 size-6 " />
      Export PDF
    </button>
        </div>
      </div>
     <div className='flex flex-row justify-between'>
     <div>
     
        <BarChart
          
          width={width}
          height={237}
          data={dataToDisplay}
    
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="name" />
          <YAxis  />
          <Tooltip  cursor={null}/>
          {/* <Legend /> */}
          <Bar dataKey="amt" fill='#384EDD' barSize={barSize} activeBar={{  stroke:  "#384EDD", strokeWidth: 2}}  />
        </BarChart> 
  
        </div>
        <div class="mt-8 mr-4 text-left  h-48 md:mt-0 md:ml-6 flex-col items-end justify-center">
        <div class="font-semibold text-xs text-green-500  mb-2" >Increase</div>
        <div class="font-semibold text-sm mb-2 text-green-500" >20% <FaArrowUp className='inline-block ml-1 mb-1' /></div>   
    <div class="font-semibold text-xs text-red-500  mb-2" >Decrease</div>
    <div class="font-semibold text-sm mb-2 text-red-500" >20% <FaArrowDown className='inline-block ml-1 mb-1' /></div>
    <div class="text-muted-foreground text-xs text-gray-500 mb-2">Current week</div>
    <div class="text-foreground text-sm font-bold mb-2" id="profitAmount">200,000</div>
    <div class="text-muted-foreground text-xs text-gray-500 mb-2">Previous week</div>
    <div class="text-foreground text-sm font-bold">200,000</div>
  </div>

     </div>

    </div>
    
    </div>
  )
}

export default BarGrapghComponent