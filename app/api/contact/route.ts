// ========== ARQUIVO: app/api/contact/route.ts ==========
// Este arquivo deve ser criado em: app/api/contact/route.ts

import { NextResponse } from 'next/server'
import { Resend } from 'resend'

// ========== CONFIGURAÇÕES ==========
const EMAIL_CONFIG = {
  // ESCOLHA UMA OPÇÃO ABAIXO:
  provider: 'resend' as 'resend' | 'nodemailer' | 'emailjs',
  
  // Para Resend (mais fácil e moderno) - https://resend.com
  resendApiKey: process.env.RESEND_API_KEY || '',
  
  // Email que receberá as mensagens
  recipientEmail: process.env.RECIPIENT_EMAIL || 'seu-email@exemplo.com',
  
  // Email remetente (deve ser verificado no Resend)
  fromEmail: process.env.FROM_EMAIL || 'contato@seusite.com',
}
// ======================================================

// ========== OPÇÃO 1: RESEND (RECOMENDADO) ==========
// 1. Instale: npm install resend
// 2. Crie conta grátis em: https://resend.com
// 3. Adicione ao .env.local:
//    RESEND_API_KEY=re_xxxxxxxxxxxxx
//    RECIPIENT_EMAIL=seu-email@exemplo.com
//    FROM_EMAIL=contato@seudominio.com

/* const resend = new Resend(EMAIL_CONFIG.resendApiKey)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    // Validação básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Campos obrigatórios faltando' },
        { status: 400 }
      )
    }

    // Envia email usando Resend
    const { data, error } = await resend.emails.send({
      from: EMAIL_CONFIG.fromEmail,
      to: [EMAIL_CONFIG.recipientEmail],
      replyTo: email,
      subject: `📩 Nova mensagem de ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #f9f9f9;
              }
              .header {
                background-color: #4F46E5;
                color: white;
                padding: 20px;
                text-align: center;
                border-radius: 8px 8px 0 0;
              }
              .content {
                background-color: white;
                padding: 30px;
                border-radius: 0 0 8px 8px;
              }
              .field {
                margin-bottom: 20px;
              }
              .label {
                font-weight: bold;
                color: #4F46E5;
                display: block;
                margin-bottom: 5px;
              }
              .value {
                padding: 10px;
                background-color: #f5f5f5;
                border-radius: 4px;
              }
              .footer {
                text-align: center;
                margin-top: 20px;
                color: #666;
                font-size: 12px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>📩 Nova Mensagem de Contato</h2>
              </div>
              <div class="content">
                <div class="field">
                  <span class="label">Nome:</span>
                  <div class="value">${name}</div>
                </div>
                
                <div class="field">
                  <span class="label">Email:</span>
                  <div class="value">
                    <a href="mailto:${email}">${email}</a>
                  </div>
                </div>
                
                ${phone ? `
                  <div class="field">
                    <span class="label">Telefone:</span>
                    <div class="value">
                      <a href="tel:${phone}">${phone}</a>
                    </div>
                  </div>
                ` : ''}
                
                <div class="field">
                  <span class="label">Mensagem:</span>
                  <div class="value">${message}</div>
                </div>
              </div>
              <div class="footer">
                <p>Esta mensagem foi enviada através do formulário de contato do seu site.</p>
                <p>Enviado em: ${new Date().toLocaleString('pt-BR')}</p>
              </div>
            </div>
          </body>
        </html>
      `,
    })

    if (error) {
      console.error('Erro ao enviar email:', error)
      return NextResponse.json(
        { error: 'Erro ao enviar email' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, message: 'Email enviado com sucesso' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Erro na API:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
} */


// ========== OPÇÃO 2: NODEMAILER (SMTP) ==========
// Use se preferir enviar através do seu próprio servidor de email
// Descomente o código abaixo e comente a parte do Resend


import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    // Configurar transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // ex: smtp.gmail.com
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Enviar email
    await transporter.sendMail({
      from: process.env.FROM_EMAIL,
      to: process.env.RECIPIENT_EMAIL,
      replyTo: email,
      subject: `Nova mensagem de ${name}`,
      html: `
        <h2>Nova Mensagem de Contato</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Telefone:</strong> ${phone}</p>` : ''}
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Erro:', error)
    return NextResponse.json(
      { error: 'Erro ao enviar email' },
      { status: 500 }
    )
  }
}

// Adicione ao .env.local:
// SMTP_HOST=smtp.gmail.com
// SMTP_PORT=587
// SMTP_USER=seu-email@gmail.com
// SMTP_PASS=sua-senha-de-app
// RECIPIENT_EMAIL=destino@exemplo.com
// FROM_EMAIL=remetente@exemplo.com



// ========== OPÇÃO 3: WEBHOOK (ALTERNATIVA SIMPLES) ==========
// Use se quiser enviar para um serviço externo como Zapier, Make, n8n

/*
export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Envia para webhook externo
    const response = await fetch(process.env.WEBHOOK_URL || '', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    if (!response.ok) {
      throw new Error('Erro ao enviar para webhook')
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Erro:', error)
    return NextResponse.json(
      { error: 'Erro ao processar mensagem' },
      { status: 500 }
    )
  }
}

// Adicione ao .env.local:
// WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/xxxxx/
*/