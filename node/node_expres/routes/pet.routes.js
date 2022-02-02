const express = require('express');
const Pet = require('../models/Pet');

const server = express();
const router = express.Router();

router.get('/', async (req, res) => {
    try {
      const pets = await Pet.find();
      return res.status(200).json(pets)
    } catch (err) {
      return res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
  
    try {
      const pet = await Pet.findById(id);
  
      if (pet) {
        return res.status(200).json(pet);
      } else {
        return res.status(404).json('No pet found by this id');
      }
    } catch (err) {
      return res.status(500).json(err);
    }
});

router.get('/age/:age', async (req, res) => {
    const age = req.params.age;
  
    try {
      const petsByAge = await Pet.find({ age: { $lt: age } });
      return res.status(200).json(petsByAge);
    } catch (err) {
      return res.status(500).json(err);
    }
});

router.post('/create', async (req, res, next) => {
    try {
      // Crearemos una instancia de mascota con los datos enviados
      const newPet = new Pet({
        name: req.body.name,
        species: req.body.species,
        age: req.body.age,
      });
  
      // Guardamos la mascota en la DB
      const createdPet = await newPet.save();
      return res.status(200).json(createdPet);
    } catch (err) {
      // Lanzamos la función next con el error para que gestione todo Express
      next(err);
    }
});

router.put('/edit', async (req, res, next) => {
    try {
      const id = req.body.id;
  
      const updatedPet = await Pet.findByIdAndUpdate(
        id, // La id para encontrar el documento a actualizar
        { name: req.body.name }, // Campos que actualizaremos
        { new: true } // Usando esta opción, conseguiremos el documento actualizado cuando se complete el update
      );
  
      return res.status(200).json(updatedPet);
    } catch (err) {
      next(err);
    }
});

router.delete('/delete/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
      
      // No será necesaria asignar el resultado a una variable ya que vamos a eliminarlo
      await Pet.findByIdAndDelete(id);
      return res.status(200).json('Pet deleted!');
    } catch (err) {
      next(err);
    }
  });

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

module.exports = router;