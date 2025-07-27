export async function load({ params }) {
  const { repoName, user } = params;
  const token = import.meta.env.VITE_GITHUB_TOKEN;
  console.log(params)
  const repo = fetch(`https://api.github.com/repos/${user}/${repoName}`, {
    headers: { Authorization: `token ${token}` }
  })
    .then(res => res.json())
    .catch(error => console.log(error))

  const languages = fetch(`https://api.github.com/repos/${user}/${repoName}/languages`, {
    headers: {
      Authorization: `token ${token}`
    }
  })
  .then(res => res.json())
  .catch(error => console.log(error));
  return {
    repo
  }
}
