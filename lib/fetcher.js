export default async function fetcher(...args) {
    const res = await fetch(...args).then(r => r.json());
  
    return res.json();
}