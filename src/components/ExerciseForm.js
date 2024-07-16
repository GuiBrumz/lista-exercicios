import React, { useState } from 'react';

const ExerciseForm = ({ addExercise }) => {
  const [name, setName] = useState('');
  const [duration, setDuration] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addExercise({ name, duration });
    setName('');
    setDuration('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome do Exercício:</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Duração (minutos):</label>
        <input 
          type="number" 
          value={duration} 
          onChange={(e) => setDuration(e.target.value)} 
          required 
        />
      </div>
      <button type="submit">Adicionar Exercício</button>
    </form>
  );
};

export default ExerciseForm;