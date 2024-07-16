import React, { useState } from 'react';
import ExerciseList from './components/ExerciseList';
import ExerciseForm from './components/ExerciseForm';
import './App.css';

const App = () => {
  const [exercises, setExercises] = useState([]);

  const addExercise = (exercise) => {
    setExercises([...exercises, exercise]);
  };

  const removeExercise = (index) => {
    setExercises(exercises.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h1>Lista de Exercícios Físicos</h1>
      <ExerciseForm addExercise={addExercise} />
      <ExerciseList exercises={exercises} removeExercise={removeExercise} />
    </div>
  );
};

export default App;