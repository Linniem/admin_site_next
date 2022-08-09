import Head from 'next/head';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    Filler,
    PointElement,
    LineElement,
} from 'chart.js';
import { Bar, Pie, Line, Doughnut } from 'react-chartjs-2';

export default function ChartsPage() {
    return (
        <>
            <Head>
                <title>Charts</title>
            </Head>

            <div className="chartWrapper">
                <BarChart />
            </div>
            <div className="chartWrapper">
                <LineChart />
            </div>
            <div className="chartWrapper">
                <PieChart />
            </div>
            <div className="chartWrapper">
                <DoughnutChart />
            </div>

            <style jsx>{`
                .chartWrapper {
                    width: 100%;
                    box-sizing: border-box;
                    padding: 10px;
                    display: inline-block;
                }

                @media screen and (min-width: 992px) {
                    .chartWrapper {
                        width: 50%;
                    }
                }
            `}</style>
        </>
    );
}

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    ArcElement,
    LineElement
);

const randNumber = (min = 0, max = 1000) =>
    Math.floor(Math.random() * (max + 1) + min);

function BarChart() {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Bar Chart',
            },
        },
    };

    const labels = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
    ];

    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: labels.map(() => randNumber()),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Dataset 2',
                data: labels.map(() => randNumber()),
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    return <Bar options={options} data={data} />;
}

function PieChart() {
    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return <Pie data={data} />;
}

function LineChart() {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Line Chart',
            },
        },
    };

    const labels = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
    ];

    const data = {
        labels,
        datasets: [
            {
                fill: true,
                label: 'Dataset 2',
                data: labels.map(() => randNumber()),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };
    return <Line options={options} data={data} />;
}

function DoughnutChart() {
    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };
    return <Doughnut data={data} />;
}
