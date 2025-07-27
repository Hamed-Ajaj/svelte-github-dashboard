export async function load({ params }) {

  const token = import.meta.env.VITE_GITHUB_TOKEN;

  const { user } = params

  const repos = fetch(`https://api.github.com/users/${user}/repos`, {
    headers: { Authorization: `token ${token}` }
  })
    .then(res => res.json())
    .catch(error => console.log(error))

  return {
    repos,
    username: user
  }
}
