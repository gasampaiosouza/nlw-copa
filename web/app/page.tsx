async function getData() {
  const data = await fetch('http://localhost:3333/pools/count');

  return data.json();
}

async function Page() {
  const data = await getData();

  return <h1>{data.count}</h1>;
}

export default Page;
