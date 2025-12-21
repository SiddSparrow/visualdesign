import { TemplateConfig, TemplateType } from '@/types/templates'

import { barbeiroTemplate } from './barbeiro'


export const templates: Record<TemplateType, TemplateConfig> = {

  barbeiro: barbeiroTemplate,

}

export function getTemplate(type: TemplateType): TemplateConfig {
  return templates[type]
}

export {barbeiroTemplate}