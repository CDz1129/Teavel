let defaultCity = '北京'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
  /* eslint-disable */
} catch (error) {}

export default {
    city: defaultCity
}