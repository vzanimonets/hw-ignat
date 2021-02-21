const addFriends = (students) =>
  students.map((st, _, arr) => {
    let fr = arr.filter((friend) => {
      return friend.name !== st.name;
    });
    const friends = fr.reduce((acc, item) => {
      acc.push(item.name);
      return acc;
    }, []);
    st.friends = friends;
    return st;
  });
let newArr = addFriends([
  { name: "a" },
  { name: "b" },
  { name: "c" },
  { name: "d" },
]);
console.log(...newArr);
