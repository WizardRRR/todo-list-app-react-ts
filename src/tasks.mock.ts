import { Task } from './types/task'
import { generateUUID } from './utils'

export const mockTasks: Task[] = [
  {
    id: generateUUID(),
    title: 'Llevar el carro al taller para mantenimiento',
    checked: true
  },
  {
    id: generateUUID(),
    title: 'Comprar alimentos para la semana en el mercado',
    checked: false
  },
  {
    id: generateUUID(),
    title: 'Enviar informe mensual de ventas a administración',
    checked: true
  },
  {
    id: generateUUID(),
    title: 'Limpiar y organizar el escritorio de trabajo',
    checked: false
  },
  {
    id: generateUUID(),
    title: 'Programar una reunión con el equipo de desarrollo',
    checked: true
  }
]
