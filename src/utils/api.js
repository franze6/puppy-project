export async function getPersons(page = 1, page_size = 10) {
  // eslint-disable-next-line camelcase
  const url = `http://pet.kandrusyak.ru:8000/api/persons/?page=${page}&page_size=${page_size}`;
  const resp = await fetch(url);
  const json = await resp
    .json()
    .then(res => {
      const obj = {
        page_count: res.page_params.page_count,
        record_count: res.page_params.record_count,
        results: res.results,
      };
      return obj;
    })
    .catch(() => []);
  return json;
}
