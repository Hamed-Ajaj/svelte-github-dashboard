export async function load({ params }) {

  const { user } = params

  const repos = fetch(`https://api.github.com/users/${user}/repos`)
    .then(res => res.json())
    .catch(error => console.log(error))

  return {
    repos,
    username: user
  }
}
