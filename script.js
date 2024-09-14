const apiKey = 'qXH1JOv6Ey6hFOez9pIgLkzznDsZwU80';  // Replace with your Giphy API key

document.getElementById('searchButton').addEventListener('click', async () => {
  const searchInput = document.getElementById('searchInput').value;
  if (searchInput.trim() !== '') {
    const gifContainer = document.getElementById('gifContainer');
    gifContainer.innerHTML = '';  // Clear previous results

    try {
      const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchInput}&limit=10&offset=0&rating=g&lang=en`);
      const data = await response.json();
      
      if (data.data.length > 0) {
        data.data.forEach(gif => {
          const img = document.createElement('img');
          img.src = gif.images.fixed_height.url;
          gifContainer.appendChild(img);
        });
      } else {
        gifContainer.innerHTML = '<p>No GIFs found for this search.</p>';
      }
    } catch (error) {
      gifContainer.innerHTML = '<p>Something went wrong while fetching GIFs.</p>';
    }
  }
});
