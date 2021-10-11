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
  return {
    results: [
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
    ],
  };
}

export async function getAddress() {
  return {
    results: [
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
        address: 'ул. 2-Бутырки, д. 11',
        date_start: '2000-12-11',
        date_end: '2021-08-22',
      },
    ],
  };
}

export async function getCompany() {
  return [
    {
      id: 1,
      name: 'ТСК',
    },
    {
      id: 2,
      name: 'MS',
    },
    {
      id: 3,
      name: 'LX',
    },
    {
      id: 4,
      name: 'Ромашка',
    },
    {
      id: 5,
      name: 'Лютик',
    },
  ];
}

export async function getPassport() {
  return {
    results: [
      {
        id: 1,
        series: '4588',
        number: '938843',
        department_code: '278-344',
        issued_by: 'ГУ МВД ПО Г. МОСКВЕ',
        date_issue: '2018-08-25',
      },
      {
        id: 2,
        series: '4798',
        number: '902834',
        department_code: '590-734',
        issued_by: 'ГУ МВД ПО Г. МОСКВЕ',
        date_issue: '2013-07-09',
      },
      {
        id: 3,
        series: '8454',
        number: '383489',
        department_code: '347-895',
        issued_by: 'ГУ МВД ПО Г. МОСКВЕ',
        date_issue: '2020-12-11',
      },
      {
        id: 4,
        series: '4589',
        number: '348949',
        department_code: '489-467',
        issued_by: 'ГУ МВД ПО Г. МОСКВЕ',
        date_issue: '2011-10-29',
      },
      {
        id: 5,
        series: '8949',
        number: '939339',
        department_code: '383-899',
        issued_by: 'ГУ МВД ПО Г. МОСКВЕ',
        date_issue: '2017-03-20',
      },
    ],
  };
}

export async function getContactDetails() {
  return {
    results: [
      {
        id: 1,
        type: {
          id: 22,
          type_name: 'WhatsApp',
        },
        basic: false,
        active: true,
        UID: '+7(950)657-48-93',
      },
      {
        id: 2,
        type: {
          id: 22,
          type_name: 'e-mail',
        },
        basic: true,
        active: true,
        UID: 'etopochta@yandex.ru',
      },
      {
        id: 3,
        type: {
          id: 33,
          type_name: 'Telegram',
        },
        basic: true,
        active: true,
        UID: '+7(950)657-48-93',
      },
      {
        id: 4,
        type: {
          id: 44,
          type_name: 'Телефон',
        },
        basic: true,
        active: true,
        UID: '+7(950)657-48-93',
      },
      {
        id: 5,
        type: {
          id: 55,
          type_name: 'ICQ',
        },
        basic: true,
        active: false,
        UID: '347348946',
      },
      {
        id: 6,
        type: {
          id: 66,
          type_name: 'Skype',
        },
        basic: true,
        active: true,
        UID: 'live:c8284n8kuxc4in',
      },
    ],
  };
}
