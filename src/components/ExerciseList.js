import React from 'react';

const ExerciseList = ({ exercises, removeExercise }) => {
  return (
    <div>
      <h2>Exercícios</h2>
      <ul>
        {exercises.map((exercise, index) => (
          <li key={index}>
            {exercise.name} - {exercise.duration} minutos
            <button onClick={() => removeExercise(index)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExerciseList;