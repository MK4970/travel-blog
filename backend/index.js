
import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'

const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())

app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ivankumys4970@gmail.com',
      pass: 'jtkq hdkf dnby vdzh',
    }
  })

  const mailOptions = {
    from: email,
    to: 'm.i.kalita.fitis22@chdtu.edu.ua',
    subject: `Повідомлення з сайту від ${name}`,
    text: message
  }

  try {
    await transporter.sendMail(mailOptions)
    res.status(200).json({ success: true, message: 'Email надіслано!' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ success: false, message: 'Помилка при надсиланні.' })
  }
})

app.listen(PORT, () => {
  console.log(`Сервер запущено на http://localhost:${PORT}`)
})
