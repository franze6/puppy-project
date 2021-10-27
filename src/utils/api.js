export async function getPersons(last_name = '', limit = 1, offset) {
  // eslint-disable-next-line camelcase
  const url = `http://pet.kandrusyak.ru:8000/api/persons/?last_name=${last_name}&limit=${limit}&offset=${offset}`;
  const resp = await fetch(url);
  const json = await resp
    .json()
    .then(res => {
      const obj = {
        offset: res.offset,
        limit: res.limit,
        record_count: res.count,
        results: res.results,
      };
      return obj;
    })
    .catch(() => []);
  return json;
}

export async function getPerson(id = 3) {
  const url = `http://pet.kandrusyak.ru:8000/api/persons/${id}`;
  const resp = await fetch(url);
  const json = await resp
    .json()
    .then(res => res)
    .catch(() => {});
  return json;
}

export async function setPassport(arr, id) {
  const url = `http://pet.kandrusyak.ru:8000/api/passports/create/`;
  const obj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      series: arr.series,
      number: arr.number,
      issued_date: new Date(arr.issued_date).toJSON().substr(0, 10),
      issued_by: arr.issued_by,
      issued_by_code: arr.issued_by_code,
      person_id: id,
    }),
  };
  const resp = await fetch(url, obj);
  return resp;
}

export async function updatePassport(arr, id) {
  const url = `http://pet.kandrusyak.ru:8000/api/passports/${id}/update/`;
  const obj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      series: arr.series,
      number: arr.number,
      issued_date: new Date(arr.issued_date).toJSON().substr(0, 10),
      issued_by: arr.issued_by,
      issued_by_code: arr.issued_by_code,
      person_id: arr.id,
      update_at: new Date().toJSON(),
    }),
  };
  const resp = await fetch(url, obj);
  return resp;
}

export async function updateMessengers(arr, id) {
  const url = `http://pet.kandrusyak.ru:8000/api/messengers/${id}/update/`;
  const obj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: arr.name,
      is_active: arr.is_active,
      uid: arr.uid,
      person_id: id,
      update_at: new Date().toJSON(),
    }),
  };
  const resp = await fetch(url, obj);
  return resp;
}

export async function setMessengers(arr, id) {
  const url = `http://pet.kandrusyak.ru:8000/api/messengers/create/`;
  const obj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: arr.name,
      is_active: !!arr.is_active,
      uid: arr.uid,
      person_id: id,
    }),
  };
  const resp = await fetch(url, obj);
  return resp;
}

export async function deletePassports(id) {
  const url = `http://pet.kandrusyak.ru:8000/api/passports/${id}/delete/`;
  const resp = await fetch(url, { method: 'DELETE' });
  return resp;
}

export async function deleteAddresses(id) {
  const url = `http://pet.kandrusyak.ru:8000/api/addresses/${id}/delete/`;
  const resp = await fetch(url, { method: 'DELETE' });
  return resp;
}

export async function deleteMessengers(id) {
  const url = `http://pet.kandrusyak.ru:8000/api/messengers/${id}/delete/`;
  const resp = await fetch(url, { method: 'DELETE' });
  return resp;
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
        project: 'VTB',
      },
      {
        id: 2,
        date: '2019-07-12',
        company: {
          id: 22,
          company_name: 'Яндекс',
        },
        position: 'Аналитик',
        project: 'MTS',
      },
      {
        id: 3,
        date: '2016-11-04',
        company: {
          id: 33,
          company_name: 'Google',
        },
        position: 'Тестировщик',
        project: 'Sber',
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
        address: 'ул. 3-Бутырки, д. 11',
        date_start: '2000-12-11',
        date_end: '2021-08-22',
      },
    ],
  };
}

export async function setAddress(arr, id) {
  const url = `http://pet.kandrusyak.ru:8000/api/addresses/create/`;
  const obj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      address_plain: arr.address_plain,
      is_active: !!arr.is_active,
      person_id: id,
    }),
  };
  const resp = await fetch(url, obj);
  return resp;
}

export async function updateAddress(arr, id) {
  const url = `http://pet.kandrusyak.ru:8000/api/addresses/${id}/update/`;
  const obj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      address_plain: arr.address_plain,
      is_active: arr.is_active,
      person_id: id,
    }),
  };
  const resp = await fetch(url, obj);
  return resp;
}

export async function getMessenger() {
  return [
    {
      id: 1,
      name: 'Телефон',
    },
    {
      id: 2,
      name: 'Telegram',
    },
    {
      id: 3,
      name: 'E-mail',
    },
    {
      id: 4,
      name: 'WhatsApp',
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
        UID: '@yaloginteleg',
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

export async function getNotification() {
  return {
    results: [
      {
        id: 1,
        text: 'bla-bla 1',
        title: 'Заголовок 1',
        date: '2017-03-20',
        is_active: true,
      },
      {
        id: 2,
        text: 'Тестовое уведомление номер два',
        title: 'Заголовок 2',
        date: '2021-05-01',
        is_active: true,
      },
      {
        id: 3,
        text: 'bla-bla 3',
        title: 'Заголовок 3',
        date: '2021-03-01',
        is_active: true,
      },
      {
        id: 4,
        text: 'bla-bla 4',
        title: 'Заголовок 4',
        date: '2019-09-10',
        is_active: true,
      },
    ],
  };
}
