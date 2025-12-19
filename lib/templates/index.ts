import { TemplateConfig, TemplateType } from '@/types/templates'
import { medicoTemplate } from './medico'
import { psicologoTemplate } from './psicologo'
import { barbeiroTemplate } from './barbeiro'
import { coachTemplate } from './coach'

export const templates: Record<TemplateType, TemplateConfig> = {
  medico: medicoTemplate,
  psicologo: psicologoTemplate,
  barbeiro: barbeiroTemplate,
  coach: coachTemplate
}

export function getTemplate(type: TemplateType): TemplateConfig {
  return templates[type]
}

export { medicoTemplate, psicologoTemplate, barbeiroTemplate, coachTemplate }