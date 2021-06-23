
function WeatherComp (props) {

    return (
        <>
        {props.weather.map((data, i) => (
        <div key={i}>
          <h1>{data.day}</h1>
          <p>{data.min}</p>
          <p>{data.max}</p>
          <button onClick={() => props.setDay(i)}>Details</button>
        </div>
      ))}
      </>
    )
}

export default WeatherComp;