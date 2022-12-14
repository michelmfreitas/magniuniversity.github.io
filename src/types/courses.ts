import { AlunosProps } from './alunos'
import { ProfessoresProps } from './professores'

export interface CourseProps {
  [x: string]: any
  id: string
  name: string
  slug: string
  semestres?: Array<{
    semestre: number
    disciplinas?: Array<{
      disciplina: string
      professor: Array<ProfessoresProps>
      alunos?: Array<AlunosProps>
    }>
  }>
}
