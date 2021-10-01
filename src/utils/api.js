export async function getPersons(page = 1, page_size = 10, last_name = '') {
  // eslint-disable-next-line camelcase
  const url = `http://pet.kandrusyak.ru:8000/api/persons/?last_name=${last_name}&page=${page}&page_size=${page_size}`;
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
export async function getPerson(id = 3) {
  return {
    id,
    last_name: 'Андрусяк',
    first_name: 'Кирилл',
    second_name: null,
    birth_date: '2021-09-29',
    tax_id: 240850327455,
    insurance_number: 22223344585,
    gender: 'Пушкатурбо',
  };
}
