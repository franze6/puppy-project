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

export async function getAddress() {
  return [
    {
      id: 3,
      address: 'ул. Бирюзова, д. 10',
      date_start: '2021-07-29',
      date_end: '2021-08-27',
    },
    {
      id: 1,
      address: 'ул. Первомайский пр-т, д. 56',
      date_start: '2020-03-17',
      date_end: '2021-01-07',
    },
    {
      id: 2,
      address: 'ул. Новаторов, д. 2',
      date_start: '2003-05-01',
      date_end: '2016-06-18',
    },
    {
      id: 4,
      address: 'ул. Радищева, д. 12',
      date_start: '2001-09-15',
      date_end: '2016-07-01',
    },
    {
      id: 5,
      address: 'ул. 3-Бутырки, д. 11',
      date_start: '2000-12-11',
      date_end: '2021-08-22',
    },
  ];
}
