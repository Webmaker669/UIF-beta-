async function fetchData() {
  try {
    console.log('Attempting to fetch data...');
    const response = wasawait = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Successfully fetched data:', data);
  } catch (error) {
    console.error('Caught an error during fetch:', error.message);
    process.exit(1); 
  }
}

fetchData();
