# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Organization.destroy_all
OwnershipForm.destroy_all
TypeOfExchange.destroy_all
TypeOfContract.destroy_all
TypeOfPayment.destroy_all
Currency.destroy_all
Operation.destroy_all
Agreement.destroy_all

Operation.create!(
  name: 'покупка',
  user: User.first
)

Agreement.create!(
  name: 'двустороннее соглашение',
  user: User.first
)

TypeOfContract.create!(
  name: 'Договор поставки',
  user: User.first
)

TypeOfExchange.create!(
  name: 'Натуральный',
  user: User.first
)

TypeOfPayment.create!(
  name: 'Авансовый',
  user: User.first
)

Currency.create!(
  short_name: 'Br',
  full_name: 'бел. руб.',
  user: User.first
)

ownership_form = OwnershipForm.create!(
  name: 'Открытое Акционерное Общество',
  user: User.first
)

Organization.create!(
  name: 'ООО "Савушкин Продукт"',
  unp: '556367321',
  address: 'г. Минск',
  phone: '+375445895099',
  provider: true,
  buyer: false,
  ownership_form: ownership_form,
  user: User.first
)

Organization.create!(
  name: 'ООО "КолаКока"',
  unp: '457634222',
  address: 'г. Минск',
  phone: '+375445895099',
  provider: true,
  buyer: false,
  ownership_form: ownership_form,
  user: User.first
)

Organization.create!(
  name: 'ООО "МинскХлебПром"',
  unp: '888675644',
  address: 'г. Минск',
  phone: '+375445895099',
  provider: true,
  buyer: false,
  ownership_form: ownership_form,
  user: User.first
)

Organization.create!(
  name: 'ООО "Горбуша"',
  unp: '650436954',
  address: 'г. Минск',
  phone: '+375445895099',
  provider: true,
  buyer: false,
  ownership_form: ownership_form,
  user: User.first
)