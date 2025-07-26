export async function load({ params }) {
  const { repoName, user } = params;
  console.log(params)
  const repo = fetch(`https://api.github.com/repos/${user}/${repoName}`)
    .then(res => res.json())
    .catch(error => console.log(error))
  return {
    repo
  }
}
