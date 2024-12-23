import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//           Задание №1
// const App = () => {
//   const [input1, setInput1] = useState('');
//   const [input2, setInput2] = useState('');

//   return (
//     <div>
//       <input 
//         type="text" 
//         value={input1} 
//         onChange={(e) => setInput1(e.target.value)} 
//         placeholder="Введите текст для первого абзаца" 
//       />
//       <p>{input1}</p>

//       <input 
//         type="text" 
//         value={input2} 
//         onChange={(e) => setInput2(e.target.value)} 
//         placeholder="Введите текст для второго абзаца" 
//       />
//       <p>{input2}</p>
//     </div>
//   );
// };
// export default App

//        Задание 2
// function CharacterCount() {
//     const [text, setText] = useState('');
//     const handleChange = (event) => {
//         setText(event.target.value);
//     };
//     return (
//         <div>
//             <input type="text" value={text} onChange={handleChange} placeholder="Введите текст" />
//             <p>Количество символов: {text.length}</p>
//         </div>
//     );
// }
// export default CharacterCount

//        Задание 3
// function AverageCalculator() {
//     const [value1, setValue1] = useState(0);
//     const [value2, setValue2] = useState(0);
//     const [value3, setValue3] = useState(0);
//     const [value4, setValue4] = useState(0);
//     const [value5, setValue5] = useState(0);

//     function handleChange1(event) {
//         setValue1(+event.target.value);
//     }
//     function handleChange2(event) {
//         setValue2(+event.target.value);
//     }
//     function handleChange3(event) {
//         setValue3(+event.target.value);
//     }
//     function handleChange4(event) {
//         setValue4(+event.target.value);
//     }
//     function handleChange5(event) {
//         setValue5(+event.target.value);
//     }

//     const average = (value1 + value2 + value3 + value4 + value5) / 5;

//     return (
//         <div>
//             <input value={value1} onChange={handleChange1} placeholder="Число 1" />
//             <input value={value2} onChange={handleChange2} placeholder="Число 2" />
//             <input value={value3} onChange={handleChange3} placeholder="Число 3" />
//             <input value={value4} onChange={handleChange4} placeholder="Число 4" />
//             <input value={value5} onChange={handleChange5} placeholder="Число 5" />
//             <p>Среднее арифметическое: {average.toFixed(2)}</p>
//         </div>
//     );
// }
// export default AverageCalculator;

//        Задание 4
// function App() {
//   const [checked, setChecked] = useState(true);
//   let message;
//   if (checked){
//     message = <div><h2>Ура, вам есть уже 18 лет</h2><p>Здесь расположен контент только для взрослых</p></div>;
//   } else {
//     message = <div><h2>Увы, вам нет 18 лет</h2></div>;
//   }
//   return(
//     <div>
//       <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)}/>
//       <div>{message}</div>
//     </div>
//   );
// }
// export default App;

//          Задание 5
// function App() {
//   const [value, setValue] = useState("");
//   function handleChange(event) {
//     setValue(event.target.value);
//   }
//   return (
//     <div>
//       <select value={value} onChange={handleChange}>
//         <option>Вологда</option>
//         <option>Москва</option>
//         <option>Питер</option>
//         <option>Сочи</option>
//       </select>
//       <p> Ваш выбор: {value} </p>
//     </div>
//   );
// }
// export default App;

//          Задание 6
// function App() {
//   const [ageGroup, setAgeGroup] = useState("");

//   function handleChange(event) {
//     setAgeGroup(event.target.value);
//   }

//   return (
//     <div>
//       <label>Выберите вашу возрастную группу:</label>
//       <select onChange={handleChange}>
//         <option >--Выберите--</option>
//         <option >От 0 до 12 лет</option>
//         <option >От 13 до 17 лет</option>
//         <option >От 18 до 25 лет</option>
//         <option >Старше 25 лет</option>
//       </select>
//       {ageGroup && <p>Ваш выбор: {ageGroup}</p>}
//     </div>
//   );
// }
// export default App;

//          Задание 7
// function App() {
//   const [notes, setNotes] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
//   function changeHandler(index, event) {
//     const newValue = parseFloat(event.target.value) || 0;
//     setNotes([...notes.slice(0, index), newValue, ...notes.slice(index + 1)]);
//   }
//   const getAverage = (arr) => {
//     const sum = arr.reduce((acc, curr) => acc + curr, 0);
//     return sum / arr.length;
//   };
//   const result = notes.map((note, index) => {
//     return (
//       <input
//         key={index}
//         type="number"
//         value={note}
//         onChange={(event) => changeHandler(index, event)}
//       />
//     );
//   });
//   return (
//     <div>
//       {result}
//       <p>Среднее арифметическое: {getAverage(notes)}</p>
//     </div>
//   );
// }
// export default App;


//          Задание 8
// const initDate = { year: 2025, month: 12, day: 31 };
// function App() {
//   const [date, setDate] = useState(initDate);
//   const getWeekday = (year, month, day) => {
//     const dateObj = new Date(year, month - 1, day);
//     const weekdays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
//     return weekdays[dateObj.getDay()];
//   };
//   return (
//     <div>
//       <p>
//         Год: {date.year}, Месяц: {date.month}, День: {date.day}, День недели: {getWeekday(date.year, date.month, date.day)}
//       </p>
//     </div>
//   );
// }
// export default App;


//          Задание 9
// const initDate = { year: 2025, month: 12, day: 31 };
// function App() {
//   const [date, setDate] = useState(initDate);
//   function handleChange(prop, event) {
//     setDate({ ...date, [prop]: parseInt(event.target.value) || 0 });
//   }
//   const getWeekday = (year, month, day) => {
//     const dateObj = new Date(year, month - 1, day);
//     const weekdays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
//     return weekdays[dateObj.getDay()];
//   };
//   return (
//     <div>
//       <input 
//         type="number" 
//         value={date.year} 
//         onChange={(event) => handleChange("year", event)} 
//         placeholder="Год" 
//       />
//       <input 
//         type="number" 
//         value={date.month} 
//         onChange={(event) => handleChange("month", event)} 
//         placeholder="Месяц" 
//       />
//       <input 
//         type="number" 
//         value={date.day} 
//         onChange={(event) => handleChange("day", event)} 
//         placeholder="День" 
//       />
//       <br />
//       <p>
//         Год: {date.year}, Месяц: {date.month}, День: {date.day}, День недели: {getWeekday(date.year, date.month, date.day)}
//       </p>
//     </div>
//   );
// }
// export default App;


//            Задание 10
// function App() {
//   const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
//   const addNote = () => {
//     setNotes([...notes, notes.length + 1]); 
//   };
//   const result = notes.map((note, index) => {
//     return <li key={index}>{note}</li>;
//   });
//   return (
//     <div>
//       <button onClick={addNote}>Добавить элемент</button>
//       <ul>{result}</ul>
//     </div>
//   );
// }
// export default App;

//            Задание 11
// function App() {
//   const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
//   const [inputValue, setInputValue] = useState('');
//   const addNote = () => {
//     setNotes([...notes, notes.length + 1]);
//   };
//   const addCustomNote = () => {
//     if (inputValue.trim()) {
//       setNotes([...notes, inputValue]);
//       setInputValue('');
//     }
//   };
//   const result = notes.map((note, index) => {
//     return <li key={index}>{note}</li>;
//   });
//   return (
//     <div>
//       <button onClick={addNote}>Добавить элемент</button>
//       <ul>{result}</ul>
//       <input 
//         type="text" 
//         value={inputValue} 
//         onChange={(e) => setInputValue(e.target.value)} 
//         placeholder="Введите текст" 
//       />
//       <button onClick={addCustomNote}>Добавить текст</button>
//     </div>
//   );
// }
// export default App;


// // Задание 12-13
const initNotes = [
  { id: "GYi9G_uC4gBF1e2SixDvu", prop1: "value11", prop2: "value12", prop3: "value13" },
  { id: "IWSpfBPSV3SXgRF87uO74", prop1: "value21", prop2: "value22", prop3: "value23" },
  { id: "JAmjRlfQT8rLTm5tG2m1L", prop1: "value31", prop2: "value32", prop3: "value33" },
];

function App() {
  const [notes, setNotes] = useState(initNotes);
  const [newNote, setNewNote] = useState({ prop1: '', prop2: '', prop3: '' });

  const addNote = () => {
    const newId = Math.random().toString(36).substring(2, 15); 
    setNotes([...notes, { id: newId, ...newNote }]);
    setNewNote({ prop1: '', prop2: '', prop3: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewNote({ ...newNote, [name]: value });
  };
  const result = notes.map((note) => {
    return (
      <li key={note.id}>
        <span>{note.prop1}</span> <span>{note.prop2}</span> <span>{note.prop3}</span>
      </li>
    );
  });
  return (
    <div>
      <ul>{result}</ul>
      <input
        type="text"
        name="prop1"
        value={newNote.prop1}
        onChange={handleInputChange}
        placeholder="поле 1"
      />
      <input
        type="text"
        name="prop2"
        value={newNote.prop2}
        onChange={handleInputChange}
        placeholder="поле 2"
      />
      <input
        type="text"
        name="prop3"
        value={newNote.prop3}
        onChange={handleInputChange}
        placeholder="поле 3"
      />
      <button onClick={addNote}>Добавить элемент</button>
    </div>
  );
}
export default App;

