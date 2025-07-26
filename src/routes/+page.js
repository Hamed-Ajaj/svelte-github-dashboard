export async function load({ params }) {
  console.log(params)
  const repos = fetch("https://api.github.com/users/Hamed-Ajaj/repos")
    .then(res => res.json())

  return {
    repos // This is now a Promise
  }
}
