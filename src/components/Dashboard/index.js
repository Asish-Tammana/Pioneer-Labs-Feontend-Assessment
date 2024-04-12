import {React,useState, useEffect} from 'react'
import Sidebar from '../Sidebar'
import Navbar from '../Navbar'
import {Line} from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    defaults
} from 'chart.js'
import './index.css'


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

defaults.responsive = true
defaults.plugins.legend.align = "end"

const Dashboard = () => {

    const [chartData, setchartData] = useState();

    const options= {
        scales: {
            y: {
                text: 'Population Count',
                padding: 10
            },
            x: {
                text: 'Year'
            }
        }
    }

    const getData = async () => {

        const url = "https://datausa.io/api/data?drilldowns=Nation&measures=Population"

        const response = await fetch(url)
        if(response.ok){
            const responseData = await response.json();

            const chartData = {
                labels: responseData.data.map(each => each.Year),
                datasets: [
                    {
                        label: "Population in million",
                        data: responseData.data.map(each => each.Population/1000000),
                        backgroundColor: '#333232',
                        pointHoverRadius: 15,
                        borderColor: '#2bb42b',
                        

                    }
                ]
            }

            setchartData(chartData)

        }
    }


    useEffect(() => {
        getData()
    }, []);

  return (
    <div className='main-container'>
        <Sidebar />
      <div className='w-full min-h-screen'>
        <Navbar />
        <div className='dashboard-container'>
            <h1 className='chart-title'>Population of United States</h1>

            {chartData && <Line data={chartData} options={options}  />}
            
        </div>
      </div>
    </div>
  )
}

export default Dashboard
