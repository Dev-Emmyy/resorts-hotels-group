
export default async function handler(req, res) {
  try {
    const rooms = [
      {
        "id": 1,
        "name": "Luxury Room",
        "image": "https://assets-global.website-files.com/64baa20851dc375f9b905e97/64c37486c6f85cbfbec0e200_luxury-bedroom-hotel%201%20(1).jpg"
      },
      {
        "id": 2,
        "name": "Single Room",
        "image": "https://assets-global.website-files.com/64baa20851dc375f9b905e97/64c37699e743d0c2d6ab3884_Single%20Room%20(1).jpg"
      },
      {
        "id": 3,
        "name": "Family Room",
        "image": "https://assets-global.website-files.com/64baa20851dc375f9b905e97/64c3755489c8fd4d0edb39ef_Family%20Room%20(1).jpg"
      }
      // Add more room objects as needed
    ];

    res.status(200).json(rooms);
    console.log(rooms)
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to fetch rooms' });
  }
}
