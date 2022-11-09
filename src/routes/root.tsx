export default function Root() {
  const ApiKey: string = '4b6b8969dc618e1bf2e2319466654a7d';
  const lat: string = '35.689487';
  const lon: string = '139.691711';

  fetch(
    `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${ApiKey}`
  )
    .then((res) => res.json())
    .then((data) => console.log(data));

  return <h1>hi</h1>;
}
