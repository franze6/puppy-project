export async function getPersons(last_name = '', page = 1, page_size = 10) {
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
  const url = `http://pet.kandrusyak.ru:8000/api/person/${id}`;
  const resp = await fetch(url);
  const json = await resp
    .json()
    .then(res => res)
    .catch(() => {});
  return json;
}

export async function getCareer() {
  return [
    {
      id: 1,
      date: '2017-02-01',
      company: {
        id: 22,
        company_name: 'ТСК',
      },
      position: 'Разработчик',
    },
    {
      id: 2,
      date: '2019-07-12',
      company: {
        id: 22,
        company_name: 'Яндекс',
      },
      position: 'Аналитик',
    },
    {
      id: 3,
      date: '2016-11-04',
      company: {
        id: 33,
        company_name: 'Google',
      },
      position: 'Тестировщик',
    },
  ];
}
