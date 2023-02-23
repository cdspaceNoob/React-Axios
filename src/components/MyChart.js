import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Line } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend)

const MyChart = () => {
    return (<Line
        datasetIdKey='id'
        data={{
            labels: ['Jun', 'Jul', 'Aug'],
            datasets: [
                {
                    id: 1,
                    label: '',
                    data: [5, 6, 7],
                },
                {
                    id: 2,
                    label: '',
                    data: [3, 2, 1],
                },
            ],
        }}
    />);
};

export default MyChart;
