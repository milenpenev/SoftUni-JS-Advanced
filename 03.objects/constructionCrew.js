function crew(object) {
  if (object.dizziness) {
    object.levelOfHydrated += 0.1 * object.weight * object.experience;
    object.dizziness = false;
  }
  return object
}

console.log(crew({
  weight: 80,
  experience: 1,
  levelOfHydrated: 0,
  dizziness: true
}
))
console.log(crew({
  weight: 120,
  experience: 20,
  levelOfHydrated: 200,
  dizziness: true
}

))