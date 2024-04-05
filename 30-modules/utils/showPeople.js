const showPeople = (people) => {
  const newPeople = people
    .map(({ name, job }) => {
      return `<p>${name} <strong>${job}</strong></p>`;
    })
    .join('');
  return newPeople;
};

export default showPeople;
