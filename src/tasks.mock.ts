import { Task } from './types/task'
import { generateUUID } from './utils'

export const mockTasks: Task[] = [
  {
    id: generateUUID(),
    title: 'Llevar el carro al taller para mantenimiento',
    checked: true,
    createdAt: new Date().toISOString()
  },
  {
    id: generateUUID(),
    title: 'Comprar alimentos para la semana en el mercado',
    checked: false,
    createdAt: new Date().toISOString()
  },
  {
    id: generateUUID(),
    title: 'Enviar informe mensual de ventas a administración',
    checked: true,
    createdAt: new Date().toISOString()
  },
  {
    id: generateUUID(),
    title: 'Limpiar y organizar el escritorio de trabajo',
    checked: false,
    createdAt: new Date().toISOString()
  },
  {
    id: generateUUID(),
    title: 'Programar una reunión con el equipo de desarrollo',
    checked: true,
    createdAt: new Date().toISOString()
  }
]
