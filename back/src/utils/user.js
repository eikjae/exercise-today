export function getRequiredInfoFromData(data) {
  return {
    id: data.id,
    email: data.email,
    name: data.name,
    height: data.height,
    weight: data.weight,
    description: data.description,
    imageLink: data.imageLink,
  };
}
