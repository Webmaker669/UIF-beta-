async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    
    console.log('Fetched Data:', data);
    console.log('Title:', data.title);
    
  } catch (error) {
    console.error('Failed to fetch data:', error);
  }
}

fetchData();
