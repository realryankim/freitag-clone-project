import faker from "faker";
import randomLocation from "random-location";

const STORES_COUNT = 32;

function generateStores() {
  const STANDARD_POINT = {
    latitude: 48.8583736,
    longitude: 70.2922926,
  };

  const stores = new Array(STORES_COUNT).fill().map((_, index) => {
    return {
      id: index + 1,
      store_name: faker.company.companyName(),
      address: faker.address.streetAddress(),
      lat: randomLocation.randomCircumferencePoint(STANDARD_POINT, 1500000)
        .latitude,
      lng: randomLocation.randomCircumferencePoint(STANDARD_POINT, 4300000)
        .longitude,
      country: faker.address.country(),
      city: faker.address.city(),
      img: "/Image/shop_s.jpg",
      img2: "/Image/shop_l.jpg",
      phone: faker.phone.phoneNumber(),
      email: faker.internet.email(),
      month: faker.date.month(),
      year: faker.random.number({
        min: 2005,
        max: 2020,
      }),
    };
  });
  return { data: stores };
}

export default generateStores();
