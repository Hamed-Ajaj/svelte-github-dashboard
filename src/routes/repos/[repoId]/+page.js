export async function load({ params }) {

  const { repoId } = params

  const repos = fetch(`https://api.github.com/users/${repoId}/repos`)
    .then(res => res.json())
    .catch(error => console.log(error))

  return {
    repos,
    username: repoId
  }
}
