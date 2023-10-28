import { AreaChart, CartesianGrid, XAxis, YAxis, Area, Tooltip , Dot } from "recharts";
import { format, parseISO, subDays } from "date-fns";


const Rechart = ({ activeChart, setActiveChart }) => {
    const data = [];

    if (activeChart===1){
        for (let num = 30; num >= 0; num--) {
            data.push({
                date: subDays(new Date(), num).toISOString().substring(0, 10),
                value: Math.random() * (15 - 1) + 1,
            });
        }
    } else if (activeChart === 2){
        for(let num = 30; num >= 0; num--) {
        data.push({
            date: subDays(new Date(), num).toISOString().substring(0, 10),
            value: Math.random() * (15 - 1) + 1,
        });
        }
    } else {
        for (let num = 30; num >= 0; num--) {
            data.push({
                date: subDays(new Date(), num).toISOString().substring(0, 10),
                value: Math.random() * (15 - 1) + 1,
            });
        }
    }
    console.log(data);

    function CustomTooltip({ active, payload, label }) {
        if (active) {
            return (
                <div className="dash-main__tooltip">
                    <h4>{format(parseISO(label), "d MMM, yyyy")}</h4>
                    <p>{payload[0].value.toFixed(2) * 1000}</p>
                </div>
            );
        }
        return null;
    };
    return (
        <>
            <AreaChart width={960} height={390} data={data}
                
                margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop stopColor="#03B8FD" stopOpacity="0.46" />
                        <stop offset="1" stopColor="#03B8FD" stopOpacity="0" />
                    </linearGradient>
                    
                </defs>

                <XAxis dataKey="date" axisLine={false} tickLine={false} tickCount={4} tickFormatter={(str) => {return "";}} />

                <YAxis className="dash-main__axis" dataKey="value" axisLine={true} strokeWidth="1" tickLine={false} tickCount={4} tickFormatter={number=> `${number.toFixed(0)}k`}/>

                <CartesianGrid strokeDasharray="7 3" strokeWidth="0.5" />

                <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#7A92A8', strokeWidth: 1, strokeDasharray:"7 3" }} />

                <Area type="monotone" dataKey="value" strokeWidth="2" stroke="#1565C0" fillOpacity={1} fill="url(#colorUv)" />

            </AreaChart>
        </>
    );
}

export default Rechart;