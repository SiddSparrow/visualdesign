import { TemplateConfig, TemplateType } from '@/types/templates'

import { arquitetoTemplate } from './arquiteto'


export const templates: Record<TemplateType, TemplateConfig> = {

  arquiteto: arquitetoTemplate,

}

export function getTemplate(type: TemplateType): TemplateConfig {
  return templates[type]
}

export {arquitetoTemplate}