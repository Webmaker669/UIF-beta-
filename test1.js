async function fetchData() {
  try {
    console.log('Starting API request...');
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Data retrieved successfully:');
    console.log(JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('An error occurred:', error.message);
    process.exit(1);
  }
}

fetchData();
