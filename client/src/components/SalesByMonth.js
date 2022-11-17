import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



export default function SalesByMonth ({myOrdersOut, user, item, myOrders, partialOrderComplete}) {

  const data = [
    {
      name: 'January',
      Produce: 400,
      
      Specialty: 240,
      // amt: 2400,
    },
    {
      name: 'February',
      Produce: 300,
      
      Specialty: 139,
      // amt: 2210,
    },
    {
      name: 'March',
      Produce: 200,

      Specialty: 450,
      // amt: 2290,
    },
    {
      name: 'April',
      Produce: 278,
      
      Specialty: 390,
      // amt: 2000,
    },
    {
      name: 'May',
      Produce: 189,
      
      Specialty: 480,
      // amt: 2181,
    },
    {
      name: 'June',
      Produce: 239,
      
      Specialty: 380,
      // amt: 2500,
    },
    {
      name: 'July',
      Produce: 265,
      
      Specialty: 430,
      // amt: 2100,
    },
    {
      name: 'August',
      Produce: 349,
      
      Specialty: 477,
      // amt: 2100,
    },
    {
      name: 'September',
      Produce: 452,
      
      Specialty: 430,
      // amt: 2100,
    },
    {
      name: 'October',
      Produce: 349,
      
      Specialty: 520,
      // amt: 2100,
    },
    {
      name: 'November',
      Produce: partialOrderComplete? 365+ (parseInt(myOrdersOut.map((item)=>{return item.product.price*item.quantity}).reduce((partialSum, a)=>partialSum+a,0))) : 365,
      // <h5>Total Price = ${myOrders.map((item)=>{return item.product.price*item.quantity}).reduce((partialSum, a)=>partialSum+a,0)}</h5>
 
      Specialty: 280,
      // amt: 2100,
    },
    {
      name: 'December',
      Produce: 0,
      
      Specialty: 0,
      // amt: 2100,
    },
  ];
    console.log((parseInt(myOrdersOut.map((item)=>{return item.product.price*item.quantity}).reduce((partialSum, a)=>partialSum+a,0))))
    return (
      <ResponsiveContainer width="100%" aspect={3}>

        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis unit="$"/>
          <Tooltip />
          <Legend />
          <Bar dataKey="Produce" stackId="a" fill="#82ca9d" />
          <Bar dataKey="Specialty" stackId="a" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    );
  
}
