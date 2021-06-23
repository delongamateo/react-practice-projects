
import "./App.css";

function WeatherDetail (props) {
    const {day, wind, humidity, percipitation} = props.dayWeather;
    return (
        <div className="detail">
            <p>More info about:</p>
            <h1>{day}</h1>
            <p>{wind}</p>
            <p>{humidity}</p>
            <p>{percipitation}</p>
          
        </div>
    )
}

export default WeatherDetail;