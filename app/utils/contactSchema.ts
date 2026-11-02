import { z } from 'zod'
import { contactSubjectKeys } from './contactSubjects'

/**
 * Schema do formulário de contato. Fica separado da página para poder ser
 * reaproveitado na validação do lado do servidor quando o endpoint existir.
 */
export const contactSchema = z.object({
  // Apenas as chaves de contactSubjects.ts; o destinatário é resolvido no servidor.
  subject: z.enum(contactSubjectKeys, {
    errorMap: () => ({ message: 'Selecione o assunto.' }),
  }),
  name: z
    .string({ required_error: 'Informe seu nome.' })
    .trim()
    .min(2, 'O nome deve ter pelo menos 2 caracteres.')
    .max(100, 'O nome deve ter no máximo 100 caracteres.'),
  email: z
    .string({ required_error: 'Informe seu e-mail.' })
    .trim()
    .min(1, 'Informe seu e-mail.')
    .email('Informe um e-mail válido.')
    .max(160, 'O e-mail deve ter no máximo 160 caracteres.'),
  company: z
    .string({ required_error: 'Informe o nome da empresa.' })
    .trim()
    .min(2, 'O nome da empresa deve ter pelo menos 2 caracteres.')
    .max(120, 'O nome da empresa deve ter no máximo 120 caracteres.'),
  message: z
    .string({ required_error: 'Escreva sua mensagem.' })
    .trim()
    .min(10, 'A mensagem deve ter pelo menos 10 caracteres.')
    .max(2000, 'A mensagem deve ter no máximo 2000 caracteres.'),
})

export type ContactForm = z.infer<typeof contactSchema>
