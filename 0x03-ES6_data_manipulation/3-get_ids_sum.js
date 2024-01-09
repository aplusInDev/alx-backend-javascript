export default function getStudentIdsSum(students) {
  //   const reducer = (accumulator, currentValue) => accumulator + currentValue;
  //   const studentIds = students.map((student) => student.id);
  //   return studentIds.reduce(reducer);
  return students.reduce(
    (accumulator, currentValue) => accumulator + currentValue.id,
    0,
  );
}
