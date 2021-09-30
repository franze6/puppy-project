export async function getPersons() {
  return [
    {
      id: 1,
      last_name: 'Иванов',
      first_name: 'Сергей',
      second_name: 'Александрович',
      birth_date: '1993-09-29',
      tax_id: 345234123987,
      insurance_number: 62153358681,
      gender: 'm',
    },
    {
      id: 2,
      last_name: 'Фазанова',
      first_name: 'Алла',
      second_name: 'Николаевна',
      birth_date: '2001-01-23',
      tax_id: 453890561094,
      insurance_number: 82309560064,
      gender: 'w',
    },
    {
      id: 3,
      last_name: 'Вертинский',
      first_name: 'Кирилл',
      second_name: 'Михайлович',
      birth_date: '1976-05-03',
      tax_id: 271095780163,
      insurance_number: 12487326490,
      gender: 'm',
    },
  ];
}
