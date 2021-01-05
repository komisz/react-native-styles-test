//example api request: replace with your API request here in folder API

export const getUser = () => {
  try {
    return Promise.resolve({
      status: 'success',
      data: [
        { id: 1, name: '1' },
        { id: 2, name: '2' },
        { id: 3, name: '3' },
        { id: 4, name: '4' }
      ]
    })
  } catch (e) {
    return Promise.reject(e)
  }
}

module.exports = {
  getUser
}
