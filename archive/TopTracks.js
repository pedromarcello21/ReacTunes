import React, { useEffect, useState } from 'react';

export default function TopTracks({ accessToken }) {
  const [topTracks, setTopTracks] = useState([]);

  useEffect(() => {
    async function fetchTopTracks() {
      try {
        const tracks = await getTopTracks(); // Await for the top tracks data
        setTopTracks(tracks); // Set the top tracks into state
      } catch (error) {
        console.error('Error fetching top tracks:', error);
      }
    }

    fetchTopTracks();
  }, [accessToken]);

  async function fetchWebApi(endpoint, method = 'GET', body) {
    const res = await fetch(`https://api.spotify.com/${endpoint}`, {
      method,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    return await res.json();
  }

  async function getTopTracks() {
    try {
      const response = await fetchWebApi(
        'v1/me/top/tracks?time_range=long_term&limit=5',
        'GET'
      );
      if (!response.items) {
        throw new Error('Failed to fetch top tracks');
      }
      return response.items;
    } catch (error) {
      console.error('Error fetching top tracks:', error);
      return []; // Return an empty array if there's an error
    }
  }

  return (
    <div>
      <h2>Top Tracks</h2>
      <ul>
        {topTracks.map((track) => (
          <li key={track.id}>
            {track.name} by {track.artists.map((artist) => artist.name).join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
}

